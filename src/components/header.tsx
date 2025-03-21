"use client";

import { useState, useEffect } from "react";
import Logo from "./logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 px-12 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="flex w-full justify-between items-center p-4">
        <Logo />

        <nav className="flex items-center gap-8">
          {/* Barra de busca animada */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isScrolled ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              type="text"
              placeholder="Pesquisar notícias..."
              className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Menu tradicional com hover personalizado */}
          {/* Menu tradicional com hover personalizado */}
          <ul
            className={`flex gap-8 orbitron-text text-xl transition-all ${
              isScrolled ? "translate-y-0" : "-translate-y-0"
            }`}
          >
            <li className="group relative">
              <a
                href="#home"
                className="relative block py-2  hover:text-red-800 transition-colors duration-300"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li className="group relative">
              <a
                href="#contact"
                className="relative block py-2  hover:text-red-800 transition-colors duration-300"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>

            <li className="group relative">
              <a
                href="#about"
                className="relative block py-2  hover:text-red-800 transition-colors duration-300"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
