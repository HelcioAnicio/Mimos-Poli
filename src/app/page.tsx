"use client";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FaArrowRight,
  FaArrowLeft,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { SiGooglemaps } from "react-icons/si";

export default function Home() {
  const [menu, setMenu] = useState(false);

  const openMenu = () => {
    setMenu(!menu);
  };

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

  const logos = [
    { img: "/tupperware.png" },
    { img: "/eudora.png" },
    { img: "/boticário.png" },
    { img: "/jequiti.png" },
    { img: "/natura.png" },
  ];

  const companies = [
    {
      title: "Revista empresa",
      description: "coleção",
      icon: <MdMenuBook className="text-xl md:text-2xl" />,
      link: "https://google.com",
    },
    {
      title: "Revista empresa",
      description: "coleção",
      icon: <MdMenuBook className="text-xl md:text-2xl" />,
      link: "https://google.com",
    },
    {
      title: "Revista empresa",
      description: "coleção",
      icon: <MdMenuBook className="text-xl md:text-2xl" />,
      link: "https://google.com",
    },
    {
      title: "Revista empresa",
      description: "coleção",
      icon: <MdMenuBook className="text-xl md:text-2xl" />,
      link: "https://google.com",
    },
    {
      title: "Revista empresa",
      description: "coleção",
      icon: <MdMenuBook className="text-xl md:text-2xl" />,
      link: "https://google.com",
    },
    {
      title: "Revista empresa",
      description: "coleção",
      icon: <MdMenuBook className="text-xl md:text-2xl" />,
      link: "https://google.com",
    },
  ];
  return (
    <>
      <header className="bg-card relative w-full">
        <div className="relative m-auto flex max-w-5xl items-center justify-between px-5 py-5">
          <h2 className="text-primary font-sans text-2xl font-bold">
            Mimos da Poli
          </h2>
          <nav>
            <ul className="flex items-center lg:gap-5">
              {[
                { text: "Home", href: "#hero" },
                { text: "Segmentos", href: "#segments" },
                { text: "Lançamentos", href: "#trends" },
                { text: "Parceiros", href: "#partners" },
                { text: "Sobre mim", href: "#aboutMe" },
                { text: "Contact", href: "#footer" },
              ].map((link, index) => (
                <li key={index} className="hidden list-none lg:inline">
                  <Link
                    className="after:bg-secondary text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                    href={link.href}
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
              <li className="hidden w-fit flex-wrap justify-center gap-10 lg:flex">
                <Link href={"https://google.com"}>
                  <FaInstagram className="text-secondary-foreground hover:text-popover size-6 transition-all duration-150 hover:scale-110" />
                </Link>
                <Link href={"https://google.com"}>
                  <FaWhatsapp className="text-secondary-foreground hover:text-popover size-6 transition-all duration-150 hover:scale-110" />
                </Link>
                <Link href={"https://google.com"}>
                  <SiGooglemaps className="text-secondary-foreground hover:text-popover size-6 transition-all duration-150 hover:scale-110" />
                </Link>
              </li>
              <button
                className="cursor-pointer lg:hidden"
                onClick={() => openMenu()}
              >
                <IoMenu className="size-10" />
              </button>
            </ul>
          </nav>
        </div>
        {menu && (
          <menu className="bg-card absolute top-0 right-0 z-20 flex min-h-max w-full max-w-md flex-col gap-10 p-5 min-[450px]:rounded-bl-xl lg:hidden">
            <div className="ml-auto">
              <button className="cursor-pointer" onClick={() => openMenu()}>
                <IoMdCloseCircle className="size-8 transition-all duration-150 hover:scale-110" />
              </button>
            </div>
            <nav>
              <ul className="text-primary flex flex-col gap-10">
                {[
                  { text: "Home", href: "#hero" },
                  { text: "Segmentos", href: "#segments" },
                  { text: "Lançamentos", href: "#trends" },
                  { text: "Parceiros", href: "#partners" },
                  { text: "Sobre mim", href: "#aboutMe" },
                  { text: "Contact", href: "#footer" },
                ].map((link, index) => (
                  <li key={index} className="list-none">
                    <Link
                      className="after:bg-secondary text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full sm:text-lg"
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                <li className="flex w-fit flex-wrap justify-center gap-10">
                  <Link href={"https://google.com"}>
                    <FaInstagram className="text-secondary-foreground hover:text-popover size-10 transition-all duration-150 hover:scale-110" />
                  </Link>
                  <Link href={"https://google.com"}>
                    <FaWhatsapp className="text-secondary-foreground hover:text-popover size-10 transition-all duration-150 hover:scale-110" />
                  </Link>
                  <Link href={"https://google.com"}>
                    <SiGooglemaps className="text-secondary-foreground hover:text-popover size-10 transition-all duration-150 hover:scale-110" />
                  </Link>
                </li>
              </ul>
            </nav>
            <Button>Explorar Coleções</Button>
          </menu>
        )}
      </header>
      <main className="w-full">
        <section
          className="relative mx-auto h-[calc(100vh-74px)] w-full overflow-y-hidden"
          id="hero"
        >
          <Image
            className="absolute right-0 -z-20 min-h-dvh w-full object-cover"
            src={"/backgroundImage.svg"}
            width={500}
            height={500}
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
            <div className="mt-10 flex w-fit flex-wrap justify-center gap-4">
              <Button>Explorar Coleções</Button>
              <Button variant="secondary">Falar com a Consultoria</Button>
            </div>
          </article>
        </section>
        <section>
          <article
            className="mx-auto w-full max-w-5xl px-5 py-20 lg:px-2 xl:px-0"
            id="segments"
          >
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
            <ul className="grid auto-rows-[400px] grid-cols-1 gap-8 md:grid-cols-12">
              {[
                { name: "Natura", src: "/1.svg" },
                { name: "Eudora", src: "/1.svg" },
                { name: "O Boticário", src: "/1.svg" },
                { name: "Rommanel", src: "/1.svg" },
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
                      className="absolute inset-0 z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 z-20 bg-linear-to-t from-black/80 to-transparent" />

                    <div className="relative z-30 flex h-full flex-col justify-end gap-3 px-10 pb-5">
                      <h3 className="text-background font-notoSerif text-4xl">
                        {brand.name}
                      </h3>
                      <Button>Explorar</Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </section>
        <section className="bg-card">
          <article
            className="mx-auto flex w-full max-w-5xl flex-col gap-20 overflow-x-hidden px-4 py-10 md:py-20 lg:px-2 xl:px-0"
            id="trends"
          >
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
            <ul className="animate-scroll-custom pause-hover flex w-max gap-20 pl-20 whitespace-nowrap">
              {trends.map((trend, index) => (
                <li key={index}>
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
                </li>
              ))}
              {trends.map((trend, index) => (
                <li key={index}>
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
                </li>
              ))}
            </ul>
          </article>
        </section>
        <section>
          <article
            className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-2 py-20 min-[400px]:px-4 lg:px-2 xl:px-0"
            id="partners"
          >
            <div className="mx-auto max-w-sm space-y-3 text-center md:max-w-lg">
              <h2 className="font-notoSerif text-3xl font-medium min-[420px]:text-4xl">
                Catálogos Digitais
              </h2>
              <p className="text-secondary-foreground/60 text-sm">
                Folheie as últimas edições e escolha seus mimos. Descubra as
                últimas tendências diretamente do seu dispositivo.
              </p>
            </div>
            <ul className="mx-auto grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16 lg:grid-cols-4 lg:gap-x-24">
              {companies.map((company, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <span className="bg-card/40 hover:bg-primary hover:text-background text-card-foreground rounded-full p-5 transition-all duration-300">
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
            className="mx-auto flex w-full max-w-5xl flex-wrap gap-10 px-2 py-20 min-[400px]:px-4 lg:px-2 xl:px-0"
            id="aboutMe"
          >
            <Image
              src={"/1.svg"}
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
              <Link href={""}>
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
                  alt="Imagem de lançamento"
                  key={index}
                />
              ))}
              {logos.map((logo, index) => (
                <Image
                  width={500}
                  height={500}
                  className="w-40 object-contain"
                  src={logo.img}
                  alt="Imagem de lançamento"
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
                  alt="Imagem de lançamento"
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
                  alt="Imagem de lançamento"
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
                href={"https://google.com"}
              >
                Envios e Devoluções
              </Link>
              <Link
                className="text-secondary-foreground/50 hover:text-secondary hover:decoration-secondary block text-sm font-light hover:underline hover:underline-offset-2"
                href={"https://google.com"}
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
                href={"https://google.com"}
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
