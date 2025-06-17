"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contactus", label: "Contact Us" },
    { href: "/uploadIMG", label: "Design" },
  ];

  return (
    <nav className="bg-mainbackground py-5 px-4 md:px-36 relative z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/home">
            <span className="hover:cursor-pointer">Wardiere Inc.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`cursor-pointer transition-all ${
                  isActive(href)
                    ? "text-white font-semibold border-b-2 py-1 border-white"
                    : "text-white hover:text-white"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 bg-white transition-transform duration-300 ${
                isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-mainbackground px-4 py-4 space-y-2 rounded-b-lg shadow-lg transition-all duration-300">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive(href)
                    ? "bg-white text-mainbackground font-semibold"
                    : "hover:bg-white hover:text-mainbackground"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
