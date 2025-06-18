"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/uploadIMG", label: "Design" },
  ];

  return (
    <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/home">
            <span className="hover:cursor-pointer">DesignAR</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
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

          {/* Buttons */}
          <Link href="/login">
            <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
              <span>Log in</span>
              <FaArrowRight className="ml-1" size={12} />
            </button>
          </Link>

          <Link href="/signup">
            <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
              <span>Sign up</span>
              <FaArrowRight className="ml-1" size={12} />
            </button>
          </Link>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "transform rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
                  isActive(href)
                    ? "bg-white text-[#0d4c3e] font-semibold"
                    : "hover:bg-white hover:text-[#0d4c3e]"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}

          {/* Mobile Buttons */}
          <Link href="/login">
            <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
              <span>Log in</span>
              <FaArrowRight size={12} />
            </button>
          </Link>

          <Link href="/signup">
            <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
              <span>Sign up</span>
              <FaArrowRight size={12} />
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}
