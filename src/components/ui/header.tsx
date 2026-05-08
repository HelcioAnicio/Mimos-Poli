"use client";

import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { Button } from "./button";
import { useState } from "react";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  // const menuRef = useRef(null);

  const openMenu = () => {
    setMenu(!menu);
    setMenuVisible(!menu);
  };

  return (
    <header className="bg-card fixed top-0 left-0 z-50 w-full">
      <div className="relative mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5">
        <h2 className="text-primary font-sans text-2xl font-bold">
          Mimos da Poli
        </h2>{" "}
        <nav>
          <ul className="flex items-center lg:gap-5">
            {[
              { text: "Home", href: "#home" },
              { text: "Segmentos", href: "#segments" },
              { text: "Lançamentos", href: "#trends" },
              { text: "Parceiros", href: "#partners" },
              { text: "Sobre mim", href: "#aboutMe" },
              { text: "Contato", href: "#footer" },
            ].map((link, index) => (
              <li key={index} className="hidden list-none lg:inline">
                <Link
                  className="after:bg-secondary text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full"
                  href={link.href}
                  aria-label={`Navegar até a sessão ${link.href.substring(1)}`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="hidden w-fit flex-wrap justify-center gap-5 lg:flex">
              <Link
                href={"https://www.instagram.com/mimos.poli/"}
                aria-label="Navegar para o perfil do instagram"
              >
                <FaInstagram className="hover:text-primary size-6 text-gray-700 transition-all duration-150 hover:scale-110" />
              </Link>
              <Link
                aria-label="Navegar para conversar pelo WhatsApp"
                href={
                  "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja"
                }
              >
                <FaWhatsapp className="hover:text-primary size-6 text-gray-700 transition-all duration-150 hover:scale-110" />
              </Link>
              <Link
                href={"https://maps.app.goo.gl/5e67Hm6YHZAgQW9j9"}
                aria-label="Navegar para o Google Maps"
              >
                <SiGooglemaps className="hover:text-primary size-6 text-gray-700 transition-all duration-150 hover:scale-110" />
              </Link>
            </li>
            <li>
              <button
                className="cursor-pointer lg:hidden"
                aria-label="Abrir menu mobile"
                onClick={() => openMenu()}
              >
                <IoMenu className="size-10" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {menu && (
        <>
          <div
            aria-hidden
            onClick={() => openMenu()}
            className={`${menuVisible ? "translate-x-0 opacity-100 backdrop-blur-xs" : "translate-x-full opacity-0 backdrop-blur-lg"} bg-foreground/85 absolute top-0 right-0 z-30 min-h-screen w-screen touch-none overflow-hidden overscroll-contain transition-all delay-1000 duration-300 lg:hidden`}
          ></div>
          <menu
            // ref={menuRef}
            className={`${menuVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} bg-card absolute top-0 right-0 z-50 flex min-h-max w-full max-w-md flex-col gap-5 p-5 min-[450px]:rounded-bl-xl lg:hidden`}
          >
            <div className="ml-auto">
              <button
                className="cursor-pointer"
                onClick={() => openMenu()}
                aria-label="Fechar menu mobile"
              >
                <IoMdCloseCircle className="size-8 transition-all duration-150 hover:scale-110" />
              </button>
            </div>
            <nav>
              <ul className="text-primary flex flex-col gap-5 sm:gap-10">
                {[
                  { text: "Home", href: "#home" },
                  { text: "Segmentos", href: "#segments" },
                  { text: "Lançamentos", href: "#trends" },
                  { text: "Parceiros", href: "#partners" },
                  { text: "Sobre mim", href: "#aboutMe" },
                  { text: "Contato", href: "#footer" },
                ].map((link, index) => (
                  <li key={index} className="list-none">
                    <Link
                      className="after:bg-secondary text-secondary relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 after:content-[''] hover:after:w-full sm:text-lg"
                      aria-label={`Navegar até a sessão ${link.href.substring(1)}`}
                      onClick={() => openMenu()}
                      href={link.href}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                <li className="flex w-fit flex-wrap justify-center gap-10">
                  <Link
                    href={"https://www.instagram.com/mimos.poli/"}
                    aria-label="Navegar para o perfil do instagram"
                  >
                    <FaInstagram className="hover:text-primary size-6 text-gray-700 transition-all duration-150 hover:scale-110" />
                  </Link>
                  <Link
                    aria-label="Navegar para conversar pelo WhatsApp"
                    href={
                      "https://wa.me/5531992893691?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja"
                    }
                  >
                    <FaWhatsapp className="hover:text-primary size-6 text-gray-700 transition-all duration-150 hover:scale-110" />
                  </Link>
                  <Link
                    href={"https://maps.app.goo.gl/5e67Hm6YHZAgQW9j9"}
                    aria-label="Navegar para o Google Maps"
                  >
                    <SiGooglemaps className="hover:text-primary size-6 text-gray-700 transition-all duration-150 hover:scale-110" />
                  </Link>
                </li>
              </ul>
            </nav>
            <Link
              href={"#partners"}
              aria-label="Navegar a sessão de revista dos fornecedores"
            >
              <Button onClick={() => openMenu()}>Explorar Coleções</Button>
            </Link>
          </menu>
        </>
      )}
    </header>
  );
};
