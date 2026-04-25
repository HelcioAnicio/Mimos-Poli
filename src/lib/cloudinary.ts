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
  if (!tag.trim()) {
    return [];
  }

  const endpoint = `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`;
  const expression = `tags:${tag}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: getCloudinaryAuthHeader(),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      expression,
      sort_by: [{ created_at: "desc" }],
      max_results: 10,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(
      `Cloudinary API request failed (${response.status}): ${errorText}`,
    );
  }

  const data = (await response.json()) as CloudinarySearchResponse;
  return (data.resources ?? [])
    .filter((resource) => resource.resource_type === "image")
    .map((resource) => resource.secure_url)
    .filter((url) => url.includes("/image/upload/"));
}
