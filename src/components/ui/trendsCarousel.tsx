import { searchCloudinaryImagesByTag } from "@/lib/cloudinary";
import Image from "next/image";
import Link from "next/link";

export const TrendsCarousel = async () => {
  const cloudinaryImages = await searchCloudinaryImagesByTag("novidades");

  const trends = [
    {
      img: "/1.webp",
    },
    {
      img: "/1.webp",
    },
    {
      img: "/1.webp",
    },
    {
      img: "/1.webp",
    },
    {
      img: "/1.webp",
    },
    {
      img: "/1.webp",
    },
  ];

  return (
    <section className="bg-card">
      <article
        className="mx-auto flex w-full flex-col gap-20 overflow-x-hidden px-4 py-24 md:py-20 lg:px-2 xl:px-0"
        id="trends"
      >
        <div className="mx-auto flex w-full max-w-5xl flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-5">
            <span className="text-secondary text-xs font-light uppercase">
              Destaques
            </span>
            <h2 className="font-notoSerif w-full text-5xl min-[430px]:max-w-96 min-[500px]:max-w-none">
              Novidades e Tendências
            </h2>
          </div>
          {/* <div className="flex gap-7">
                <button className="bg-muted border-foreground/30 rounded-full border p-4">
                  <FaArrowLeft />
                </button>
                <button className="bg-muted border-foreground/30 rounded-full border p-4">
                  <FaArrowRight />
                </button>
              </div> */}
        </div>
        <ul className="animate-scroll-custom pause-hover relative z-20 flex w-max gap-20 pl-20 whitespace-nowrap">
          {trends.map((trend, index) => (
            <li key={index}>
              <figure className="max-w-xs md:max-w-md">
                <Image
                  width={500}
                  height={500}
                  className="h-screen max-h-130 rounded-md object-cover object-top"
                  loading="lazy"
                  src={
                    cloudinaryImages.length > 0
                      ? cloudinaryImages[index % cloudinaryImages.length]
                      : trend.img
                  }
                  alt="Imagem de lançamento"
                />
              </figure>
            </li>
          ))}
          {trends.map((trend, index) => (
            <li key={index} aria-hidden>
              <Link
                href={
                  "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja"
                }
              >
                <figure className="max-w-xs md:max-w-md">
                  <Image
                    width={500}
                    height={500}
                    className="h-screen max-h-130 rounded-md object-cover object-top"
                    loading="lazy"
                    src={
                      cloudinaryImages.length > 0
                        ? cloudinaryImages[index % cloudinaryImages.length]
                        : trend.img
                    }
                    alt="Imagem de lançamento"
                  />
                </figure>
              </Link>
            </li>
          ))}{" "}
          {trends.map((trend, index) => (
            <li key={index} aria-hidden className="hidden 2xl:inline">
              <figure className="max-w-xs md:max-w-md">
                <Image
                  width={500}
                  height={500}
                  className="h-screen max-h-130 rounded-md object-cover object-top"
                  loading="lazy"
                  src={
                    cloudinaryImages.length > 0
                      ? cloudinaryImages[index % cloudinaryImages.length]
                      : trend.img
                  }
                  alt="Imagem de lançamento"
                />
              </figure>
            </li>
          ))}{" "}
          {trends.map((trend, index) => (
            <li key={index} aria-hidden className="hidden 2xl:inline">
              <figure className="max-w-xs md:max-w-md">
                <Image
                  width={500}
                  height={500}
                  className="h-screen max-h-130 rounded-md object-cover object-top"
                  loading="lazy"
                  src={
                    cloudinaryImages.length > 0
                      ? cloudinaryImages[index % cloudinaryImages.length]
                      : trend.img
                  }
                  alt="Imagem de lançamento"
                />
              </figure>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
