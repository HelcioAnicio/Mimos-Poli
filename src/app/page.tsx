import { TbPerfume, TbBottle } from "react-icons/tb";
import { RiDiamondRingLine } from "react-icons/ri";
import { PiDropSimpleBold } from "react-icons/pi";
import { FaBottleDroplet } from "react-icons/fa6";
import {
  GiPerfumeBottle,
  GiLipstick,
  GiLips,
  GiDelicatePerfume,
  GiDropEarrings,
  GiSpiralBottle,
} from "react-icons/gi";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/ui/header";
import { Suspense } from "react";
import { TrendsCarousel } from "@/components/ui/trendsCarousel";

export default async function Home() {
  const logos = [
    { img: "/tupperware.png", name: "Tupperware" },
    { img: "/eudora.png", name: "Eudora" },
    { img: "/boticario.png", name: "O Boticário" },
    { img: "/jequiti.png", name: "Jequiti" },
    { img: "/natura.png", name: "Natura" },
    { img: "/avon.png", name: "Avon" },
    { img: "/barome.webp", name: "Barume" },
    { img: "/lacquadifiori.png", name: "L'acqua di Fiore" },
    { img: "/racco.png", name: "Racco" },
    { img: "/ciclo.webp", name: "Ciclo" },
    { img: "/rommanel.png", name: "Rommanel" },
  ];

  const companies = [
    {
      title: "Revista O Boticário",
      description: "coleção",
      icon: <TbPerfume className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20O%20Boticário",
    },
    {
      title: "Revista Tupperware",
      description: "coleção",
      icon: <TbBottle className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Tupperware",
    },
    {
      title: "Revista Rommanel",
      description: "coleção",
      icon: <RiDiamondRingLine className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Rommanel",
    },
    {
      title: "Revista Natura",
      description: "coleção",
      icon: <PiDropSimpleBold className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Natura",
    },
    {
      title: "Revista Jequiti",
      description: "coleção",
      icon: <GiPerfumeBottle className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Jequiti",
    },
    {
      title: "Revista Eudora",
      description: "coleção",
      icon: <GiLipstick className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
    {
      title: "Revista Ciclo",
      description: "coleção",
      icon: <GiSpiralBottle className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
    {
      title: "Revista K Constância",
      description: "coleção",
      icon: <TbPerfume className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
    {
      title: "Revista Racco",
      description: "coleção",
      icon: <FaBottleDroplet className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
    {
      title: "Revista Barume",
      description: "coleção",
      icon: <GiDropEarrings className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
    {
      title: "Revista L'acqua di Fiore",
      description: "coleção",
      icon: <GiDelicatePerfume className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
    {
      title: "Revista Avon",
      description: "coleção",
      icon: <GiLips className="text-xl md:text-2xl" />,
      link: "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20Eudora",
    },
  ];
  return (
    <>
      <Header />
      <main className="w-full">
        <section
          className="relative mx-auto h-screen w-full overflow-y-hidden"
          id="hero"
        >
          <Image
            className="absolute right-0 -z-20 min-h-dvh w-full object-cover placeholder:blur-lg"
            src={"/backgroundImage.webp"}
            fill
            alt="background"
            priority
            fetchPriority="high"
            quality={75}
          />
          <div
            aria-hidden
            className="bg-foreground/60 absolute -z-10 min-h-full w-full"
          />
          <article className="min-[]: mx-auto flex min-h-full w-full max-w-5xl flex-col justify-center gap-2 px-5 min-[430px]:gap-16 min-[1100px]:gap-20 sm:gap-20 lg:gap-5 lg:px-2 xl:px-0">
            <div className="flex flex-col gap-5">
              <span className="text-background font-mono text-xs uppercase md:text-base">
                O Atelier Digital
              </span>
              <h1 className="text-background font-notoSerif max-w-sm text-5xl min-[430px]:text-6xl sm:max-w-xl sm:text-7xl lg:text-6xl xl:text-7xl">
                A Curadoria de beleza que você merece
              </h1>
              <p className="text-background sm: w-full max-w-md font-light min-[450px]:max-w-xl sm:text-xl lg:text-lg xl:text-xl">
                Descubra uma seleção exclusiva das melhores marcas de perfumaria
                e semijoias, escolhidas a dedo para realçar sua essência.
              </p>
            </div>
            <div className="mt-10 flex w-fit flex-wrap justify-center gap-4">
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
        <section>
          <article
            className="mx-auto w-full max-w-5xl px-5 py-24 lg:px-2 xl:px-0"
            id="segments"
          >
            <div className="flex flex-col gap-4 pb-20 xl:pb-32">
              <h2 className="font-notoSerif w-full max-w-40 text-5xl min-[430px]:max-w-96 min-[500px]:max-w-none">
                Nossas marcas parceiras
              </h2>
              <div className="flex flex-wrap justify-between gap-5">
                <p className="text-foreground/70 w-11/12 font-light sm:w-1/2">
                  Uma seleção exclusiva de parceiros que compartilham nosso
                  compromisso com a qualidade, ética e beleza atemporal.
                </p>
                <Link
                  href="#partners"
                  className="text-sm font-light text-yellow-600 uppercase underline underline-offset-2"
                >
                  Ver todos os parceiros
                </Link>
              </div>
            </div>
            <ul className="grid auto-rows-[400px] grid-cols-1 gap-8 md:grid-cols-12">
              {[
                { name: "Natura", src: "/natura.webp" },
                { name: "Eudora", src: "/eudora.webp" },
                { name: "O Boticário", src: "/boticario.webp" },
                { name: "Rommanel", src: "/rommanel.webp" },
              ].map((brand, index) => {
                const isLarge = index === 0 || index === 3;
                const gridClasses = isLarge ? "md:col-span-7" : "md:col-span-5";

                return (
                  <li
                    key={index}
                    className={`group relative flex w-full overflow-hidden rounded-xl ${gridClasses}`}
                  >
                    <Image
                      src={brand.src}
                      alt={`logo do ${brand.name}`}
                      fill
                      sizes="500"
                      className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div
                      aria-hidden
                      className="absolute inset-0 z-20 bg-linear-to-t from-black/80 to-transparent"
                    />

                    <div className="relative z-30 flex h-full flex-col justify-end gap-3 px-10 pb-5">
                      <h3 className="text-background font-notoSerif text-4xl">
                        {brand.name}
                      </h3>
                      <Link
                        href={`https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20${brand.name}`}
                      >
                        <Button>Explorar</Button>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
        <Suspense
          fallback={<div className="h-[500px] animate-pulse bg-gray-200" />}
        >
          <TrendsCarousel />
        </Suspense>
        <section>
          <article
            className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-2 py-24 min-[400px]:px-4 lg:px-2 xl:px-0"
            id="partners"
          >
            <div className="mx-auto max-w-sm space-y-3 text-center md:max-w-lg">
              <h2 className="font-notoSerif w-full max-w-40 text-5xl min-[430px]:max-w-96 min-[500px]:max-w-none">
                Catálogos Digitais
              </h2>
              <p className="text-secondary-foreground/60 text-sm">
                Folheie as últimas edições e escolha seus mimos. Descubra as
                últimas tendências diretamente do seu dispositivo.
              </p>
            </div>
            <ul className="mx-auto grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16 lg:grid-cols-3 lg:gap-x-24">
              {companies.map((company, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <span className="bg-muted hover:bg-primary hover:text-background text-card-foreground rounded-full p-5 transition-all duration-300">
                    {company.icon}
                  </span>
                  <div>
                    <h3 className="font-notoSerif font-medium">
                      {company.title}
                    </h3>
                    <p className="text-card-foreground/50">
                      {company.description}
                    </p>
                  </div>
                  <Link
                    href={company.link}
                    className="text-secondary decoration-secondary/30 hover:decoration-primary text-light text-xs uppercase underline underline-offset-4 transition-all duration-300"
                  >
                    Ver Revista
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section>
          <article
            className="mx-auto flex w-full max-w-5xl flex-wrap gap-10 px-2 py-24 min-[400px]:px-4 lg:px-2 xl:px-0"
            id="aboutMe"
          >
            <Image
              src={"/poliana.png"}
              alt={"Imagem da Poliana"}
              height={500}
              width={500}
              className="w-full rounded-md object-cover lg:w-1/2 lg:max-w-sm"
            />
            <div className="max-w-xl space-y-10 py-10 lg:w-1/2">
              <span className="text-secondary text-sm font-light">
                A Essência pro trás do atêlier
              </span>
              <h2 className="font-notoSerif mb-20 text-4xl font-medium sm:text-6xl">
                Poliana Autran
              </h2>
              <p className="text-secondary-foreground/40 sm:text-lg">
                Com mais de uma década de experiência no mercado de beleza,
                fundei a Mimos da Poli não apenas como uma loja, mas como um
                refúgio de curadoria pessoal.
              </p>
              <p className="text-secondary-foreground/40 text-sm font-light sm:text-base">
                Minha missão é elevar o seu cotidiano através de fragrâncias,
                texturas e brilhos que ressoam com sua personalidade única. Cada
                item é selecionado com o olhar atento de quem entende que a
                beleza é um ato de carinho consigo mesma.
              </p>
              <Link
                href={
                  "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja"
                }
                aria-label="Abrir conversa do WhatsApp e conversar com a consultora"
              >
                <Button>Nossa história</Button>
              </Link>
            </div>
          </article>
        </section>
        <section>
          <article className="border-t-card overflow-x-hidden border-t-2 py-10">
            <div className="animate-scroll-custom pause-hover flex w-max gap-20 pl-20 whitespace-nowrap">
              {logos.map((logo, index) => (
                <Image
                  width={500}
                  height={500}
                  className="w-40 object-contain"
                  src={logo.img}
                  alt={`Logo da companhia ${logo.name}`}
                  key={index}
                />
              ))}
              {logos.map((logo, index) => (
                <Image
                  width={500}
                  height={500}
                  className="w-40 object-contain"
                  src={logo.img}
                  alt={`Logo da companhia ${logo.name}`}
                  key={index}
                  aria-hidden
                />
              ))}
              {logos.map((logo, index) => (
                <Image
                  width={500}
                  height={500}
                  className="hidden w-40 object-contain 2xl:inline"
                  src={logo.img}
                  alt={`Logo da companhia ${logo.name}`}
                  key={index}
                  aria-hidden
                />
              ))}{" "}
              {logos.map((logo, index) => (
                <Image
                  width={500}
                  height={500}
                  className="hidden w-40 object-contain 2xl:inline"
                  src={logo.img}
                  alt={`Logo da companhia ${logo.name}`}
                  key={index}
                  aria-hidden
                />
              ))}
            </div>
          </article>
        </section>
      </main>
      <footer className="bg-card w-full">
        <div
          className="mx-auto w-full max-w-5xl px-2 pt-20 min-[410px]:px-4 md:gap-10 lg:px-2 xl:px-0"
          id="footer"
        >
          <ul className="grid gap-4 pb-20 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            <li className="space-y-5">
              <h3 className="text-2xl font-medium">Mimos da Poli</h3>
              <p className="text-secondary-foreground/50 text-sm font-light">
                Elegância editorial em cada detalhe. Seu destino para beleza de
                luxo e semijoias exclusivas.
              </p>
            </li>
            <li className="space-y-5">
              <p className="text-secondary text-sm font-medium uppercase">
                Atelier
              </p>
              <Link
                className="text-secondary-foreground/50 hover:text-secondary hover:decoration-secondary block text-sm font-light hover:underline hover:underline-offset-2"
                href={"https://google.com"}
              >
                Política de Privacidade
              </Link>
              <Link
                className="text-secondary-foreground/50 hover:text-secondary hover:decoration-secondary block text-sm font-light hover:underline hover:underline-offset-2"
                href={"https://google.com"}
              >
                Termos de Uso
              </Link>
            </li>
            <li className="space-y-5">
              <p className="text-secondary text-sm font-medium uppercase">
                Suporte
              </p>
              <Link
                className="text-secondary-foreground/50 hover:text-secondary hover:decoration-secondary block text-sm font-light hover:underline hover:underline-offset-2"
                href={
                  "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20envios%20e%20devolu%C3%A7%C3%B5es"
                }
              >
                Envios e Devoluções
              </Link>
              <Link
                className="text-secondary-foreground/50 hover:text-secondary hover:decoration-secondary block text-sm font-light hover:underline hover:underline-offset-2"
                href={
                  "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja"
                }
              >
                Fale Conosco
              </Link>
            </li>
            <li className="space-y-5">
              <p className="text-secondary text-sm font-medium uppercase">
                Descobrir
              </p>
              <Link
                className="text-secondary-foreground/50 hover:text-secondary hover:decoration-secondary block text-sm font-light hover:underline hover:underline-offset-2"
                href={"#partners"}
              >
                Nossas Marcas
              </Link>
            </li>
          </ul>
          <p className="border-t-foreground/30 text-foreground/30 relative left-0 border-t py-10">
            © 2024 Mimos da Poli. Todos os direitos reservados. Desenvolvido por{" "}
            <Link
              href={"https://codandoideias-helcioanicios-projects.vercel.app/"}
              className="underline underline-offset-1"
            >
              Helcio Anicio
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}
