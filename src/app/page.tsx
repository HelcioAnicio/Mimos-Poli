import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
          <article className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-2 px-5 min-[430px]:gap-16 sm:gap-20">
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
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-background cursor-pointer rounded-md px-14 py-4 uppercase shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105">
                Explorar coleções
              </button>
              <button className="bg-card/20 hover:bg-card/30 text-background cursor-pointer rounded-md border px-10 py-4 uppercase shadow-md transition-all duration-300 hover:shadow-2xl">
                Fala com Consultoria
              </button>
            </div>
          </article>
        </section>
        <section>
          <article className="px-5 py-20">
            <div className="flex flex-col gap-10">
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
            <div className="grid grid-cols-1 grid-rows-1 gap-10 py-20 sm:grid-cols-2 sm:grid-rows-2">
              <div className="group bg-primary relative flex aspect-square w-full items-end overflow-hidden rounded-md">
                <Image
                  src={"/1.svg"}
                  alt={"logo do patrocinador"}
                  width={500}
                  height={500}
                  className="absolute top-0 h-full w-full rounded-md object-cover group-hover:scale-105"
                />
                <div className="bg-foreground/40 absolute z-10 aspect-square w-full" />
                <div className="relative z-20 flex flex-col gap-5 px-10 pb-16">
                  <h3 className="text-background font-notoSerif text-4xl">
                    Natura
                  </h3>
                  <p></p>
                  <button className="bg-primary text-background cursor-pointer rounded-md px-14 py-4 uppercase shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105">
                    Explorar
                  </button>
                </div>
              </div>
              <div className="bg-primary relative flex aspect-square w-full items-end overflow-hidden rounded-md">
                <Image
                  src={"/1.svg"}
                  alt={"logo do patrocinador"}
                  width={500}
                  height={500}
                  className="absolute top-0 h-full w-full rounded-md object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="bg-foreground/40 group absolute z-10 aspect-square w-full" />
                <div className="relative z-20 flex flex-col gap-5 px-10 pb-16">
                  <h3 className="text-background font-notoSerif text-4xl">
                    Natura
                  </h3>
                  <p></p>
                  <button className="bg-primary text-background cursor-pointer rounded-md px-14 py-4 uppercase shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105">
                    Explorar
                  </button>
                </div>
              </div>
              <div className="bg-primary relative flex aspect-square w-full items-end overflow-hidden rounded-md">
                <Image
                  src={"/1.svg"}
                  alt={"logo do patrocinador"}
                  width={500}
                  height={500}
                  className="absolute top-0 h-full w-full rounded-md object-cover group-hover:scale-105"
                />
                <div className="bg-foreground/40 group absolute z-10 aspect-square w-full" />
                <div className="relative z-20 flex flex-col gap-5 px-10 pb-16">
                  <h3 className="text-background font-notoSerif text-4xl">
                    Natura
                  </h3>
                  <p></p>
                  <button className="bg-primary text-background cursor-pointer rounded-md px-14 py-4 uppercase shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105">
                    Explorar
                  </button>
                </div>
              </div>
              <div className="bg-primary relative flex aspect-square w-full items-end overflow-hidden rounded-md">
                <Image
                  src={"/1.svg"}
                  alt={"logo do patrocinador"}
                  width={500}
                  height={500}
                  className="absolute top-0 h-full w-full rounded-md object-cover group-hover:scale-105"
                />
                <div className="bg-foreground/40 absolute z-10 aspect-square w-full" />
                <div className="relative z-20 flex flex-col gap-5 px-10 pb-16">
                  <h3 className="text-background font-notoSerif text-4xl">
                    Natura
                  </h3>
                  <p></p>
                  <button className="bg-primary text-background cursor-pointer rounded-md px-14 py-4 uppercase shadow-md transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:brightness-105">
                    Explorar
                  </button>
                </div>
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
