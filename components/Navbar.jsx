import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
      <header className="w-full py-4 px-[5%] mx-auto flex justify-around items-center top-0 bg-transparent">
        <div className="logo">
          <Image src="/logo.png" width={150} height={100}/>
        </div>
        <nav className="nav-list">
          <ul className="pl-0 flex justify-end gap-4">
            <li className="list-none">
              <Link
                href="index.html"
                className="px-4 py-2 rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline"
              >
                Home
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#courses"
                className="px-4 py-2 rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline"
              >
                Courses
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#workshop"
                className="px-4 py-2 rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline"
              >
                Workshop
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#about"
                className="px-4 py-2 rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:underline"
              >
                About
              </Link>
            </li>
            <li className="list-none">
              <Link
                href="#login"
                className="px-4 py-2 border-2 border-black rounded-full text-black text-lg font-bold transition-all duration-200 ease-in-out hover:bg-black hover:text-white"
              >
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Navbar;

