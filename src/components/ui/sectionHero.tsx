"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const SectionHero = () => {
  return (
    <section
      className="relative mx-auto h-screen w-full overflow-hidden"
      id="hero"
    >
      <Image
        className="animate-hero-image absolute top-0 left-0 -z-20 h-full w-full object-cover"
        src={"/backgroundImage.webp"}
        fill
        alt="background"
        priority
        quality={75}
        sizes="(max-width: 768px) 100vw, 100vw"
      />

      <div
        aria-hidden
        className="animate-hero-overlay bg-foreground/60 absolute -z-10 h-full w-full"
      />

      <article className="mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-2 px-5 min-[430px]:gap-16 min-[1100px]:gap-20 sm:gap-20 lg:gap-5 lg:px-2 xl:px-0">
        <div className="flex flex-col gap-5">
          {/* Tagline */}
          <span className="animate-hero-slide-left text-background font-mono text-xs uppercase md:text-base">
            O Atelier Digital
          </span>

          {/* Título principal */}
          <h1 className="animate-hero-slide-left animation-delay-100 text-background font-notoSerif max-w-sm text-5xl min-[430px]:text-6xl sm:max-w-xl sm:text-7xl lg:text-6xl xl:text-7xl">
            A Curadoria de beleza que você merece
          </h1>

          <p className="text-background w-full max-w-md font-light min-[450px]:max-w-xl sm:text-xl lg:text-lg xl:text-xl">
            Descubra uma seleção exclusiva das melhores marcas de perfumaria e
            semijoias, escolhidas a dedo para realçar sua essência.
          </p>
        </div>

        <div className="animate-hero-slide-up mt-10 flex w-fit flex-wrap justify-center gap-4">
          <Link href={"#partners"}>
            <Button aria-label="Navegar a sessão de revista dos parceiros">
              Explorar Coleções
            </Button>
          </Link>
          <Link
            href={
              "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja"
            }
          >
            <Button variant="secondary">Falar com a Consultoria</Button>
          </Link>
        </div>
      </article>
    </section>
  );
};
