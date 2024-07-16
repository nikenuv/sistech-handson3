"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {NavbarData} from '../utils/NavbarData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`w-full py-4 px-6 mx-auto flex justify-between items-center top-0 bg-transparent fixed transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="logo">
        <Image src="/logo.png" width={150} height={100} />
      </div>
      <nav className="nav-list hidden md:flex">
        <ul className="pl-0 flex justify-end gap-4">
          {NavbarData.map((nav) => (
            <li key={nav.id} className="px-4 py-2 rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline">
              <a className="text-black" href={nav.href}>
                {nav.name}
              </a>
            </li>
          ))}
          <li className="px-4 py-2 border-black rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline">
            <a
              href="#login"
              className="px-4 py-2 border-2 border-black rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <ul className="pl-0 flex flex-col items-center gap-4 py-4">
            {NavbarData.map((nav) => (
              <li key={nav.id} className="px-4 py-2 text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline">
                <a className="text-black" href={nav.href}>
                  {nav.name}
                </a>
              </li>
            ))}
            <li className="px-4 py-2 border-black text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline">
              <a
                href="#login"
                className="px-4 py-2 border-2 border-black text-black text-lg font-bold transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;