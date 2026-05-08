"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { useState, useRef, useEffect } from "react";

export const Segments = () => {
  const [segmentsState, setSegmentsState] = useState(false);
  const [listSegments, setListSegments] = useState([
    { index: 0, state: false, name: "Natura", src: "/natura.webp" },
    { index: 1, state: false, name: "Eudora", src: "/eudora.webp" },
    { index: 2, state: false, name: "O Boticário", src: "/boticario.webp" },
    { index: 3, state: false, name: "Rommanel", src: "/rommanel.webp" },
  ]);

  const segmentsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSegmentsState(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );
    const element = segmentsRef.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.disconnect();
    };
  }, [segmentsState]);

  const setCardWhenClicked = (index: number) => {
    setListSegments((prev) =>
      prev.map((item) => {
        if (item.index === index) {
          return { ...item, state: !item.state };
        }
        return item;
      }),
    );
  };

  const setCardWhenHoverOut = (index: number) => {
    setListSegments((prev) =>
      prev.map((item) => {
        if (item.index === index) {
          if (item.state) {
            return { ...item, state: !item.state };
          }
        }
        return item;
      }),
    );
  };
  const setCardWhenHoverIn = (index: number) => {
    setListSegments((prev) =>
      prev.map((item) => {
        if (item.index === index) {
          if (!item.state) {
            return { ...item, state: !item.state };
          }
        }
        return item;
      }),
    );
  };

  // const setCardWhenHoverLeave = (index: number) => {
  //   setListSegments((prev) =>
  //     prev.map((item) => {
  //       if (item.index === index) {
  //         if (!item.state) {
  //           return { ...item, state: !item.state };
  //         }
  //       }
  //       return item;
  //     }),
  //   );
  // };

  return (
    <section>
      <article
        className="mx-auto w-full max-w-5xl px-5 py-24 lg:px-2 xl:px-0"
        ref={segmentsRef}
        id="segments"
      >
        <div className="flex flex-col gap-4 pb-20 xl:pb-32">
          <h2
            className={` ${segmentsState ? "blur-0 translate-x-0 opacity-100" : "-translate-x-full opacity-0 blur-md"} font-notoSerif w-full max-w-40 text-5xl transition-all delay-150 duration-700 min-[430px]:max-w-96 min-[500px]:max-w-none`}
          >
            Nossas marcas parceiras
          </h2>
          <div className="flex flex-wrap justify-between gap-5">
            <p
              className={` ${segmentsState ? "blur-0 translate-x-1 opacity-100" : "-translate-x-full opacity-0 blur-md"} text-foreground/70 w-11/12 font-light transition-all delay-150 duration-700 sm:w-1/2`}
            >
              Uma seleção exclusiva de parceiros que compartilham nosso
              compromisso com a qualidade, ética e beleza atemporal.
            </p>
            <Link
              href="#partners"
              className={`${segmentsState ? "blur-0 translate-x-0 opacity-100" : "translate-x-full opacity-0 blur-md"} text-sm font-light text-yellow-600 uppercase underline underline-offset-2 transition-all delay-150 duration-700 hover:scale-110 hover:animate-pulse`}
            >
              Ver todos os parceiros
            </Link>
          </div>
        </div>
        <ul className="grid auto-rows-[400px] grid-cols-1 gap-8 md:grid-cols-12">
          {listSegments.map((card) => {
            const isLarge = card.index === 0 || card.index === 3;
            const gridClasses = isLarge ? "md:col-span-7" : "md:col-span-5";

            return (
              <li
                key={card.index}
                className={`${segmentsState ? "blur-0 translate-y-0 opacity-100" : "translate-y-full opacity-0 blur-md"} group h-full w-full rounded-xl transition-all delay-500 duration-700 perspective-midrange ${gridClasses}`}
              >
                <div
                  onClick={() => setCardWhenClicked(card.index)}
                  onMouseLeave={() => setCardWhenHoverOut(card.index)}
                  onMouseEnter={() => setCardWhenHoverIn(card.index)}
                  className={`li_div relative h-full w-full rounded-xl shadow-lg transition-all duration-700 transform-3d ${card.state ? "transform-[rotateY(180deg)]" : "transform-[rotateY(0)]"}`}
                >
                  <div className="bg-foreground/90 li_div_div absolute inset-0 flex h-full w-full flex-col justify-end overflow-hidden rounded-xl backface-hidden">
                    <Image
                      src={card.src}
                      alt={`logo do ${card.name}`}
                      fill
                      sizes="500px"
                      className="absolute inset-0 z-10 h-full w-full object-cover"
                    />
                    <div className="from-foreground/90 absolute inset-0 z-20 bg-linear-to-t to-transparent" />
                    <div className="relative z-30 flex flex-col gap-3 px-10 pb-10">
                      <h3 className="font-notoSerif text-4xl text-white">
                        {card.name}
                      </h3>
                      <Link
                        href={`https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20${card.name}`}
                      >
                        {" "}
                        <Button>Explorar</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="bg-foreground absolute inset-0 flex h-full w-full transform-[rotateY(180deg)] flex-col justify-end overflow-hidden rounded-xl backface-hidden">
                    <Image
                      src={card.src}
                      alt={`logo do ${card.name}`}
                      fill
                      sizes="500px"
                      className="absolute inset-0 z-10 h-full w-full object-cover opacity-80"
                    />
                    <div className="from-foreground/90 absolute inset-0 z-20 bg-linear-to-t to-transparent" />
                    <div className="relative z-30 flex flex-col gap-3 px-10 pb-10">
                      <h3 className="font-notoSerif text-4xl text-white">
                        {card.name}
                      </h3>
                      <Link
                        href={`https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20revista%20${card.name}`}
                      >
                        {" "}
                        <Button variant="diferent">Explorar</Button>
                      </Link>
                    </div>
                  </div>{" "}
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
