"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export const SectionHero = () => {
  const [heroVisible, setHeroVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
        console.log("First hero: ", heroVisible);
      },
      { threshold: 0.1 },
    );
    const element = heroRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.disconnect();
    };
  }, [heroVisible]);

  return (
    <section
      className="relative mx-auto h-screen w-full overflow-hidden"
      ref={heroRef}
      id="hero"
    >
      <Image
        className={`${heroVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"} absolute right-0 -z-20 min-h-dvh w-full object-cover transition-all delay-150 duration-1000 placeholder:blur-lg`}
        src={"/backgroundImage.webp"}
        fill
        alt="background"
        priority
        fetchPriority="high"
        quality={75}
      />
      <div
        aria-hidden
        className={`${heroVisible ? "bg-foreground/60 opacity-100" : "bg-foreground/30 opacity-0"} absolute -z-10 min-h-full w-full transition-all delay-500 duration-1000`}
      />
      <article className="min-[]: mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-2 px-5 min-[430px]:gap-16 min-[1100px]:gap-20 sm:gap-20 lg:gap-5 lg:px-2 xl:px-0">
        <div className="flex flex-col gap-5">
          <span
            className={`${heroVisible ? "blur-0 translate-x-0 opacity-100" : "-translate-x-full opacity-0 blur-md"} text-background font-mono text-xs uppercase transition-all delay-500 duration-700 md:text-base`}
          >
            O Atelier Digital
          </span>
          <h1
            className={`${heroVisible ? "blur-0 translate-x-0 opacity-100" : "-translate-x-full opacity-0 blur-md"} text-background font-notoSerif max-w-sm text-5xl transition-all delay-500 duration-700 min-[430px]:text-6xl sm:max-w-xl sm:text-7xl lg:text-6xl xl:text-7xl`}
          >
            A Curadoria de beleza que você merece
          </h1>
          <p
            className={`${heroVisible ? "blur-0 translate-x-0 opacity-100" : "-translate-x-full opacity-0 blur-md"} text-background sm: w-full max-w-md font-light transition-all delay-500 duration-700 min-[450px]:max-w-xl sm:text-xl lg:text-lg xl:text-xl`}
          >
            Descubra uma seleção exclusiva das melhores marcas de perfumaria e
            semijoias, escolhidas a dedo para realçar sua essência.
          </p>
        </div>
        <div
          className={`${heroVisible ? "blur-0 translate-y-0 opacity-100" : "translate-y-full opacity-0 blur-md"} mt-10 flex w-fit flex-wrap justify-center gap-4 transition-all delay-500 duration-700`}
        >
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
