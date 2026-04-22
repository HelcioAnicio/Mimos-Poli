import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Home() {
  const trends = [
    {
      title: "Coleção lavanda real",
      description: "Perfumes",
      img: "/1.svg",
    },
    {
      title: "Coleção lavanda real",
      description: "Perfumes",
      img: "/1.svg",
    },
    {
      title: "Coleção lavanda real",
      description: "Perfumes",
      img: "/1.svg",
    },
    {
      title: "Coleção lavanda real",
      description: "Perfumes",
      img: "/1.svg",
    },
    {
      title: "Coleção lavanda real",
      description: "Perfumes",
      img: "/1.svg",
    },
    {
      title: "Coleção lavanda real",
      description: "Perfumes",
      img: "/1.svg",
    },
  ];
  return (
    <>
      <header className="bg-card relative w-full">
        <div className="relative m-auto flex max-w-5xl justify-between px-2 py-5">
          <h2 className="text-primary font-sans text-2xl font-bold">
            Mimos da Poli
          </h2>
          <nav>
            <button>
              <IoMenu className="size-7" />
            </button>
          </nav>
        </div>
      </header>
      <main className="w-full">
        <section className="relative mx-auto h-[calc(100vh-74px)] w-full overflow-y-hidden">
          <Image
            className="absolute right-0 -z-20 min-h-dvh w-full object-cover"
            src={"/backgroundImage.svg"}
            width={1500}
            height={1500}
            alt="background"
            loading="eager"
          />
          <div className="bg-foreground/60 absolute -z-10 min-h-full w-full" />
          <article className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-2 px-5 min-[430px]:gap-16 sm:gap-20 lg:px-2 xl:px-0">
            <div className="flex flex-col gap-5">
              <span className="text-background font-mono text-xs uppercase md:text-base">
                O Atelier Digital
              </span>
              <h1 className="text-background font-notoSerif max-w-sm text-5xl min-[430px]:text-6xl sm:max-w-xl sm:text-7xl">
                A Curadoria de beleza que você merece
              </h1>
              <p className="text-background sm: w-full max-w-md font-light min-[450px]:max-w-xl sm:text-xl">
                Descubra uma seleção exclusiva das melhores marcas de perfumaria
                e semijoias, escolhidas a dedo para realçar sua essência.
              </p>
            </div>
            <div className="flex w-fit flex-wrap justify-center gap-4">
              <Button>Explorar Coleções</Button>
              <Button variant="secondary">Fala com a Consultoria</Button>
            </div>
          </article>
        </section>
        <section>
          <article className="mx-auto w-full max-w-5xl px-5 py-20 lg:px-2 xl:px-0">
            <div className="flex flex-col gap-4 pb-20 md:pb-32">
              <h2 className="font-notoSerif w-full max-w-40 text-5xl min-[430px]:max-w-96 min-[500px]:max-w-none">
                Nossas marcas parceiras
              </h2>
              <div className="flex flex-wrap justify-between gap-5">
                <p className="text-foreground/70 w-11/12 font-light sm:w-1/2">
                  Uma seleção exclusiva de parceiros que compartilham nosso
                  compromisso com a qualidade, ética e beleza atemporal.
                </p>
                <Link
                  href=""
                  className="text-sm font-light text-yellow-600 uppercase underline underline-offset-2"
                >
                  Ver todos os parceiros
                </Link>
              </div>
            </div>
            <div className="grid auto-rows-[400px] grid-cols-1 gap-8 md:grid-cols-12">
              {[
                { name: "Natura", src: "/1.svg" },
                { name: "Eudora", src: "/1.svg" },
                { name: "O Boticário", src: "/1.svg" },
                { name: "Rommanel", src: "/1.svg" },
              ].map((brand, index) => {
                const isLarge = index === 0 || index === 3;
                const gridClasses = isLarge ? "md:col-span-7" : "md:col-span-5";

                return (
                  <div
                    key={index}
                    className={`group relative flex w-full overflow-hidden rounded-xl ${gridClasses}`}
                  >
                    <Image
                      src={brand.src}
                      alt={`logo do ${brand.name}`}
                      fill
                      className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 z-20 bg-linear-to-t from-black/80 to-transparent" />

                    <div className="relative z-30 flex h-full flex-col justify-end gap-3 px-10 pb-5">
                      <h3 className="text-background font-notoSerif text-4xl">
                        {brand.name}
                      </h3>
                      <Button>Explorar</Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        </section>
        <section className="bg-muted">
          <article className="mx-auto flex w-full max-w-5xl flex-col gap-20 overflow-x-hidden px-4 py-10 md:py-20 lg:px-2 xl:px-0">
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div className="flex flex-col gap-5">
                <span className="text-secondary text-xs font-light uppercase">
                  Destaques
                </span>
                <h2 className="font-notoSerif w-full text-5xl min-[430px]:max-w-96 min-[500px]:max-w-none">
                  Novidades e Tendências
                </h2>
              </div>
              <div className="flex gap-7">
                <button className="bg-muted border-foreground/30 rounded-full border p-4">
                  <FaArrowLeft />
                </button>
                <button className="bg-muted border-foreground/30 rounded-full border p-4">
                  <FaArrowRight />
                </button>
              </div>
            </div>
            <div className="animate-scroll-custom pause-hover flex w-max gap-20 pl-20 whitespace-nowrap">
              {trends.map((trend, index) => (
                <div key={index}>
                  <figure className="max-w-xs md:max-w-md">
                    <Image
                      width={500}
                      height={500}
                      className="h-115 rounded-md object-cover"
                      src={trend.img}
                      alt="Imagem de lançamento"
                    />
                    <figcaption className="font-notoSerif text-xl">
                      {trend.title} {index}
                    </figcaption>
                    <p className="text-card text-sm uppercase">
                      {trend.description}
                    </p>
                  </figure>
                </div>
              ))}
              {trends.map((trend, index) => (
                <div key={index}>
                  <figure className="max-w-xs md:max-w-md">
                    <Image
                      width={500}
                      height={500}
                      className="h-115 rounded-md object-cover"
                      src={trend.img}
                      alt="Imagem de lançamento"
                    />
                    <figcaption className="font-notoSerif text-xl">
                      {trend.title} {index}
                    </figcaption>
                    <p className="text-card text-sm uppercase">
                      {trend.description}
                    </p>
                  </figure>
                </div>
              ))}
            </div>
          </article>
        </section>
        <section>
          <article>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <ul>
              {[].map((product, index) => (
                <li key={index}>
                  <span></span>
                  <h3></h3>
                  <p></p>
                  <Link
                    href={"https://google.com"}
                    className="uppercase underline underline-offset-2"
                  >
                    Ver Revista
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
