// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const isActive = (path: string) => pathname === path;

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/contactus", label: "Contact Us" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-mainbackground py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/home">
//             <span className="hover:cursor-pointer">Wardiere Inc.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-mainbackground px-4 py-4 space-y-2 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   isActive(href)
//                     ? "bg-white text-mainbackground font-semibold"
//                     : "hover:bg-white hover:text-mainbackground"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const pathname = usePathname();
//   const isActive = (path: string) => pathname === path;

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/home">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Buttons */}
//           <Link href="/login">
//             <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//               <span>Log in</span>
//               <FaArrowRight className="ml-1" size={12} />
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//               <span>Sign up</span>
//               <FaArrowRight className="ml-1" size={12} />
//             </button>
//           </Link>
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Mobile Buttons */}
//           <Link href="/login">
//             <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//               <span>Log in</span>
//               <FaArrowRight size={12} />
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//               <span>Sign up</span>
//               <FaArrowRight size={12} />
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setHasMounted(true);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/home">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Buttons */}
//           <Link href="/login">
//             <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//               <span>Log in</span>
//               <FaArrowRight className="ml-1" size={12} />
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//               <span>Sign up</span>
//               <FaArrowRight className="ml-1" size={12} />
//             </button>
//           </Link>
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Mobile Buttons */}
//           <Link href="/login">
//             <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//               <span>Log in</span>
//               <FaArrowRight size={12} />
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//               <span>Sign up</span>
//               <FaArrowRight size={12} />
//             </button>
//           </Link>
//         </div>
//       )}
//     </nav>
//   );
// }
//  "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const isActive = (path: string) => pathname === path;

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Auth Buttons or User Status */}
//           {userName ? (
//             <div className="flex items-center space-x-4">
//               <span className="text-white">Welcome, {userName}!</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Auth Section (Mobile) */}
//           {userName ? (
//             <>
//               <p className="text-white text-center">Welcome, {userName}!</p>
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* If logged in, show username + logout */}
//           {userName ? (
//             <>
//               <span className="text-white font-medium">Hello, {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <>
//               <span className="block text-white text-base px-3 py-2">Hello, {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <>
//               <span className="text-white font-medium">Hello, {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);

//     // ✅ Listen to changes in localStorage from other components
//     const syncUserName = () => {
//       setUserName(localStorage.getItem("userName"));
//     };

//     window.addEventListener("storage", syncUserName);

//     return () => {
//       window.removeEventListener("storage", syncUserName);
//     };
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <>
//               <span className="text-white font-medium">Hello, {userName}</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-xl font-bold">
//           <Link href="/"><span className="hover:cursor-pointer">Roomi AR.</span></Link>
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span className={`cursor-pointer transition-all ${isActive(href) ? "text-white font-semibold border-b-2 py-1 border-white" : "text-white hover:text-white"}`}>
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <>
//               <span className="text-white font-medium">Hi, {userName.charAt(0).toUpperCase()}.</span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';
// import { FaArrowRight } from 'react-icons/fa';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const storedName = localStorage.getItem('userName');
//     setUserName(storedName);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('userName');
//     setUserName(null);
//     router.push('/login');
//   };

//   const navItems = [
//     { href: '/', label: 'Home' },
//     { href: '/products', label: 'Products' },
//     { href: '/blog', label: 'Blog' },
//     { href: '/projects', label: 'Projects' },
//     { href: '/uploadIMG', label: 'Design' },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? 'text-white font-semibold border-b-2 py-1 border-white'
//                     : 'text-white hover:text-white'
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Logged in state */}
//           {userName ? (
//             <>
//               <span className="text-white font-medium">
//                 Hi, {userName.charAt(0).toUpperCase()}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? 'transform rotate-45 translate-y-1.5' : ''
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? 'opacity-0' : ''
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? 'bg-white text-[#0d4c3e] font-semibold'
//                     : 'hover:bg-white hover:text-[#0d4c3e]'
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {/* Logged in state */}
//           {userName ? (
//             <>
//               <span className="block text-white text-base px-3 py-2">
//                 Hi, {userName.charAt(0).toUpperCase()}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//               <Link href="/signup">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <>
//               <span className="text-white font-medium">
//                 Hi, {userName.charAt(0).toUpperCase()}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <>
//               <span className="block text-white text-base px-3 py-2">
//                 Hi, {userName.charAt(0).toUpperCase()}
//               </span>
//               <button
//                 onClick={handleLogout}
//                 className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [userName, setUserName] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const storedName = localStorage.getItem("userName");
//     setUserName(storedName);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userName");
//     setUserName(null);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/products", label: "Products" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">Roomi AR.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {userName ? (
//             <button
//               onClick={handleLogout}
//               className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/Learn How to", label: "Learn How to" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer"> ARvana.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight className="ml-1" size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link href="/login">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Log in</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>

//               <Link href="/signup">
//                 <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:opacity-90 transition">
//                   <span>Sign up</span>
//                   <FaArrowRight size={12} />
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/Learn How to", label: "Learn How to" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <span className="hover:cursor-pointer">ARvana.</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               {/* Animated Log in Button */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href="/login">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               {/* Animated Sign up Button (no left movement) */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href="/signup">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               {/* Mobile Log in Button with animation */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href="/login">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               {/* Mobile Sign up Button (same as login) */}
//               <motion.div
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Link href="/signup">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setHasMounted(true);
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/uploadIMG", label: "Design" },
  ];

  return (
    <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <span className="hover:cursor-pointer">ARvana.</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`cursor-pointer transition-all ${
                  hasMounted && isActive(href)
                    ? "text-white font-semibold border-b-2 py-1 border-white"
                    : "text-white hover:text-white"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          ) : (
            <>
              {/* Log in Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login">
                  <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
                    <span className="uppercase">Log in</span>
                    <motion.span
                      className="ml-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      <FaArrowRight size={12} />
                    </motion.span>
                  </button>
                </Link>
              </motion.div>

              {/* Sign up Button */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/signup">
                  <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
                    <span className="uppercase">Sign up</span>
                    <motion.span
                      className="ml-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      <FaArrowRight size={12} />
                    </motion.span>
                  </button>
                </Link>
              </motion.div>
            </>
          )}
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
        <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span
                className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
                  hasMounted && isActive(href)
                    ? "bg-white text-[#0d4c3e] font-semibold"
                    : "hover:bg-white hover:text-[#0d4c3e]"
                }`}
              >
                {label}
              </span>
            </Link>
          ))}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
            >
              Logout
            </button>
          ) : (
            <>
              {/* Log in Mobile */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/login">
                  <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
                    <span className="uppercase">Log in</span>
                    <motion.span
                      className="ml-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      <FaArrowRight size={12} />
                    </motion.span>
                  </button>
                </Link>
              </motion.div>

              {/* Sign up Mobile */}
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="/signup">
                  <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
                    <span className="uppercase">Sign up</span>
                    <motion.span
                      className="ml-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                    >
                      <FaArrowRight size={12} />
                    </motion.span>
                  </button>
                </Link>
              </motion.div>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

