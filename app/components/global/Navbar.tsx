"use client";

import Link from "next/link";
import { useState } from "react";

import { IoIosMenu, IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <header className="py-6 md:px-16 px-6 border-b border-zinc-800 z-30 ">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/">
          <p className="text-2xl font-bold cursor-pointer px-2 border-1 rounded-full">
            P
          </p>
        </Link>
        {/* Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-x-8">
            <li>
              <Link
                href="/"
                className={`block hover:text-purple-400 duration-300 ${pathname === "/" ? "border-l-4 pl-2 border-purple-400" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block hover:text-purple-400 duration-300 ${pathname === "/about" ? "border-l-4 pl-2 border-purple-400" : ""}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block hover:text-purple-400 duration-300 ${pathname === "/projects" ? "border-l-4 pl-2 border-purple-400" : ""}`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block hover:text-purple-400 duration-300 ${pathname === "/contact" ? "border-l-4 pl-2 border-purple-400" : ""}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <IoIosMenu size={30} />
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 border-l border-zinc-800 p-6 transition-transform duration-300  ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-6 right-6"
          >
            <IoMdClose size={30} />
          </button>
          <nav className="mt-12">
            <ul className="space-y-6 text-lg">
              <li>
                <Link
                  href={"/"}
                  className={`block hover:text-purple-400 duration-300 ${pathname === "/" ? "border-l-4 pl-2 border-purple-400" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block hover:text-purple-400 duration-300 ${pathname === "/about" ? "border-l-4 pl-2 border-purple-400" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`block hover:text-purple-400 duration-300 ${pathname === "/projects" ? "border-l-4 pl-2 border-purple-400" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block hover:text-purple-400 duration-300 ${pathname === "/contact" ? "border-l-4 pl-2 border-purple-400" : ""}`}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {isOpen && (
        <div
          className=" fixed inset-0 bg-black/50"
          onClick={() => setIsOpen(!isOpen)}
        ></div>
      )}
    </header>
  );
}
