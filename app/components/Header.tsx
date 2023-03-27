"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
// import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import { UsescrollHook } from "../hooks/useScroll";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Sidebar from "./Sidebar";

interface Props {
  open: () => void;
  close: () => void;
  isOpen: Boolean;
}
function Header({ open = () => {}, close, isOpen }: Props): JSX.Element | null {
  const pathname = usePathname();
  const genericHamburgerLine = `h-0.5 w-6 my-0.5 transition ease-in-out transform duration-500`;

  const { show, lastScrollY } = UsescrollHook();

  // Links nav
  const links = [
    { href: "/", label: "Home" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/contacto", label: "Contacto" },
  ];
  return (
    <>
      <header
        className={`${
          lastScrollY > 20 && !isOpen ? "bg-white border-b" : "bg-transparent"
        } w-screen fixed z-30 transition duration-500 ease-in-out ${
          !show && !isOpen
            ? "-translate-y-full ease-in-out duration-300 shadow-sm bg-transparent"
            : "translate-y-full"
        }} `}
      >
        {/* Desktop */}
        <div className="z-10 py-2 layout flex items-center justify-between">
          <Link href="/">
            <div
              //   onClick={() => isOpen && setIsOpen(isOpen)}
              className="relative w-14 h-14 shrink cursor-pointer"
            >
              {(lastScrollY > 20 && !isOpen) ||
              (!isOpen && pathname !== "/") ? (
                <Image src="/images/logosgr.webp" fill alt="sgrlogo" />
              ) : (
                <Image src="/images/logosgrwhite.webp" fill alt="sgrlogo" />
              )}
            </div>
          </Link>
          <nav className="flex-2 shrink-0">
            <ul
              className={`items-center justify-end space-x-6 group hidden md:inline-flex  ${
                lastScrollY > 20 || pathname !== "/" ? "text-dark" : "text-white"
              }`}
            >
              {links.map(({ href, label }) => (
                <li
                  key={label}
                  className={`${
                    pathname === href || pathname === href + "/[slug]"
                      ? "underline underline-offset-4"
                      : "hover:underline underline-offset-4 "
                  }  font-light text-relax cursor-pointer`}
                >
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Burger mobile animate */}
          <div
            className="md:hidden cursor-pointer shrink-0 py-5"
            
          >
            {!isOpen ? (
              <button onClick={open} className="flex flex-col justify-center items-center z-50 shrink">
                <div
                  className={`${genericHamburgerLine} ${
                    lastScrollY > 20 || pathname !== "/"
                      ? "bg-main"
                      : "bg-white"
                  } ${isOpen && "rotate-45 translate-y-1 z-50 bg-white"}`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "opacity-0"
                  } ${
                    lastScrollY > 20 || pathname !== "/"
                      ? "bg-main"
                      : "bg-white"
                  } `}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    lastScrollY > 20 || pathname !== "/"
                      ? "bg-main"
                      : "bg-white"
                  } ${isOpen && "-rotate-45 -translate-y-2 z-50 bg-white"}`}
                />
              </button>
            ) : (
              <button onClick={close} className="flex flex-col justify-center items-center z-50">
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "rotate-45 translate-y-1 z-50 bg-white"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "opacity-0"
                  } ${lastScrollY > 20 ? "bg-main" : "bg-white/100"} `}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen && "-rotate-45 -translate-y-2 z-50 bg-white"
                  }`}
                />
              </button>
            )}
          </div>
        </div>
        {/* Sidebar */}
        <Sidebar isOpen={isOpen} links={links} close={close} />
      </header>
    </>
  );
}

export default Header;
