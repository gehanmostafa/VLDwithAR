import Link from "next/link";

export default function Navbar() {
return (
<nav className="relative bg-teal-500 p-4">
  <div className="absolute top-0 left-0 w-full h-16 bg-teal-500 clip-polygon"></div>
  <div className="container mx-auto flex justify-between items-center relative z-10">
    <div className="text-white text-lg font-bold">
      <Link href="/">
        <span className="hover:text-blue-200 cursor-pointer">Wardiere Inc.</span>
      </Link>
    </div>

    <div className="hidden md:flex space-x-6">
      <Link href="/products">
        <span className="text-white hover:text-blue-200 cursor-pointer">Products</span>
      </Link>
      <Link href="/blog">
        <span className="text-white hover:text-blue-200 cursor-pointer">Blog</span>
      </Link>
      <Link href="/contactus">
        <span className="text-white hover:text-blue-200 cursor-pointer">Contact Us</span>
      </Link>
      <Link href="/design">
        <span className="text-white hover:text-blue-200 cursor-pointer">Design</span>
      </Link>
      <Link href="/documentation">
        <span className="text-white hover:text-blue-200 cursor-pointer">Documentation</span>
      </Link>
    </div>

    <div className="md:hidden">
      <button className="bg-white text-blue-500 px-3 py-2 rounded-md shadow-md">
        Menu
      </button>
    </div>
  </div>
</nav>
)
}