"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-mainbackground py-5 px-36 p-5">
      <div className="w-full bg-mainbackground"></div>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/home">
            <span className="hover:text-blue-200 cursor-pointer">
              Wardiere Inc.
            </span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/home">
            <span
              className={`cursor-pointer ${
                isActive("/home")
                  ? "text-blue-300 font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/products">
            <span
              className={`cursor-pointer ${
                isActive("/products")
                  ? "text-blue-300 font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Products
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={`cursor-pointer ${
                isActive("/blog")
                  ? "text-blue-300 font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Blog
            </span>
          </Link>
          <Link href="/contactus">
            <span
              className={`cursor-pointer ${
                isActive("/contactus")
                  ? "text-blue-300 font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Contact Us
            </span>
          </Link>
          <Link href="/design">
            <span
              className={`cursor-pointer ${
                isActive("/design")
                  ? "text-blue-300 font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-blue-200"
              }`}
            >
              Design
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button className="bg-white text-blue-500 px-3 py-2 rounded-md shadow-md">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
