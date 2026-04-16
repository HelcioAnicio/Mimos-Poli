import { IoMenu } from "react-icons/io5";
import Image from "next/image";

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
          <article className="mx-auto flex min-h-full w-full max-w-5xl flex-col items-center justify-center gap-32 px-2">
            <div className="flex flex-col gap-5">
              <span className="text-background font-mono text-xs uppercase md:text-base">
                O Atelier Digital
              </span>
              <h1 className="text-background font-notoSerif max-w-sm text-6xl font-bold sm:max-w-xl sm:text-6xl lg:text-8xl">
                A Curadoria de beleza que você merece
              </h1>
              <p className="text-background w-3/4 max-w-md font-light min-[450px]:max-w-2xl sm:text-xl">
                Descubra uma seleção exclusiva das melhores marcas de perfumaria
                e semijoias, escolhidas a dedo para realçar sua essência.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:justify-evenly">
              <button className="bg-primary hover:bg-primary/85 text-background cursor-pointer rounded-md px-14 py-4 uppercase shadow-md transition-all duration-300 hover:shadow-2xl">
                Explorar coleções
              </button>
              <button className="bg-card/20 hover:bg-card/30 text-background cursor-pointer rounded-md border px-10 py-4 uppercase shadow-md transition-all duration-300 hover:shadow-2xl">
                Fala com Consultoria
              </button>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}
