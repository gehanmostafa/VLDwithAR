// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname();
//   const isActive = (path: string) => pathname === path;

//   return (
//     <nav className="bg-mainbackground py-5 px-36 p-5 relative z-20 ">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-lg font-bold">
//           <Link href="/home">
//             <span className="hover:cursor-pointer">
//               Wardiere Inc.
//             </span>
//           </Link>
//         </div>

//         <div className="hidden md:flex space-x-6">
//           <Link href="/home">
//             <span
//               className={`cursor-pointer ${isActive("/home")
//                   ? " text-white font-semibold border-b-2 py-1 border-white"
//                   : "text-white hover:text-white"
//                 }`}
//             >
//               Home
//             </span>
//           </Link>
//           <Link href="/products">
//             <span
//               className={`cursor-pointer ${isActive("/products")
//                   ? " text-white font-semibold border-b-2 py-1 border-white"
//                   : "text-white hover:text-white"
//                 }`}
//             >
//               Products
//             </span>
//           </Link>
//           <Link href="/blog">
//             <span
//               className={`cursor-pointer ${isActive("/blog")
//                   ? " text-white font-semibold border-b-2 py-1 border-white"
//                   : "text-white hover:text-white"
//                 }`}
//             >
//               Blog
//             </span>
//           </Link>
//           <Link href="/contactus">
//             <span
//               className={`cursor-pointer ${isActive("/contactus")
//                   ? " text-white font-semibold border-b-2 py-1 border-white"
//                   : "text-white hover:text-white"
//                 }`}
//             >
//               Contact Us
//             </span>
//           </Link>
//           <Link href="/uploadIMG">
//             <span
//              className={`cursor-pointer ${isActive("/uploadIMG")
//               ? " text-white font-semibold border-b-2 py-1 border-white"
//               : "text-white hover:text-white"
//             }`}
//             >
//               Design
//             </span>
//           </Link>
//         </div>

//         <div className="md:hidden">
//           <button className="bg-white  px-3 py-2 rounded-md shadow-md">
//             Menu
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[#0d4c3e] py-5 px-36 p-5 relative z-20 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/home">
            <span className="hover:cursor-pointer">Wardiere Inc.</span>
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link href="/home">
            <span
              className={`cursor-pointer ${
                isActive("/home")
                  ? " text-white font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-white"
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/products">
            <span
              className={`cursor-pointer ${
                isActive("/products")
                  ? " text-white font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-white"
              }`}
            >
              Products
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={`cursor-pointer ${
                isActive("/blog")
                  ? " text-white font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-white"
              }`}
            >
              Blog
            </span>
          </Link>
          <Link href="/contactus">
            <span
              className={`cursor-pointer ${
                isActive("/contactus")
                  ? " text-white font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-white"
              }`}
            >
              Contact Us
            </span>
          </Link>
          <Link href="/uploadIMG">
            <span
              className={`cursor-pointer ${
                isActive("/uploadIMG")
                  ? " text-white font-semibold border-b-2 py-1 border-white"
                  : "text-white hover:text-white"
              }`}
            >
              Design
            </span>
          </Link>
        </div>

        <div className="md:hidden">
          <button className="bg-white px-3 py-2 rounded-md shadow-md">
            Menu
          </button>
        </div>
      </div>
    </nav>
  );
}
 