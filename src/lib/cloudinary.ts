type CloudinaryResource = {
  secure_url: string;
  resource_type?: string;
};

type CloudinarySearchResponse = {
  resources?: CloudinaryResource[];
};

const cloudName =
  process.env.CLOUDINARY_CLOUD_NAME ??
  process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const apiKey =
  process.env.CLOUDINARY_API_KEY ?? process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

function getCloudinaryAuthHeader() {
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      "Cloudinary credentials are missing in environment variables.",
    );
  }

  const token = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  return `Basic ${token}`;
}

export async function searchCloudinaryImagesByTag(tag: string) {
  if (!tag.trim()) return [];

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: getCloudinaryAuthHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      expression: `tags:${tag}`,
      sort_by: [{ created_at: "desc" }],
      max_results: 20,
    }),
    // Mudamos para revalidate para ganhar velocidade com cache de 1 hora
    next: { revalidate: 3600 },
  });

  if (!response.ok) return [];

  const data = (await response.json()) as CloudinarySearchResponse;
  return (
    (data.resources ?? [])
      // Garante que o Cloudinary identificou como imagem[cite: 4]
      .filter((resource) => resource.resource_type === "image")
      .map((resource: { secure_url: string }) => {
        // Otimização de URL que sugerimos antes
        return resource.secure_url.replace(
          "/upload/",
          "/upload/f_auto,q_auto,w_1000/",
        );
      })
      // Filtro extra: garante que a URL não aponte para pastas de vídeo
      .filter((url: string | string[]) => !url.includes("/video/upload/"))
  );
}
