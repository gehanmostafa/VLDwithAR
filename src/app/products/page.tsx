//  'use client';

// import React from 'react';
// import Image from 'next/image';

// const products = [
//   { id: 1, name: 'orange sofa', image: '/5.png', price: 200 },
//   { id: 2, name: 'green sofa', image: '/a.jpg', price: 200 },
//   { id: 3, name: 'white sofa', image: '/b.jpg', price: 200 },
//   { id: 4, name: 'wooden table', image: '/c.jpg', price: 200 },
//   { id: 5, name: 'white chair', image: '/a.jpg', price: 200 },
//   { id: 6, name: 'white sofa', image: '/b.jpg', price: 200 },
//   { id: 7, name: 'brown table', image: '/c.jpg', price: 200 },
//   { id: 8, name: 'red sofa', image: '/5.png', price: 200 },
// ];

// const Products = () => {
//   return (
//     <div className="px-6 py-8 bg-[#f3f8f7] min-h-screen">
//       {/* Search */}
//       <div className="flex justify-between items-center mb-6">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none"
//         />
//       </div>

//       {/* Title */}
//       <div className="flex items-center mb-6">
//         <h2 className="text-xl font-semibold text-[#0D4c3e] mr-2">Modern Room</h2>
//         <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
//           >
//             <Image
//               src={product.image}
//               alt={product.name}
//               width={300}
//               height={200}
//               className="w-full h-48 object-cover"
//             />
//             <div className="bg-[#0D4c3e] text-white p-4 flex flex-col justify-between h-28">
//               <div className="font-medium capitalize">{product.name}</div>
//               <div className="flex justify-between items-center mt-2">
//                 <div className="flex text-yellow-400 text-sm space-x-1">
//                   {Array(5)
//                     .fill(0)
//                     .map((_, i) => (
//                       <span key={i}>★</span>
//                     ))}
//                 </div>
//                 <div className="text-white font-semibold">{product.price}$</div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const products = [
  { id: 1, name: 'orange sofa', image: '/5.png', price: 200 },
  { id: 2, name: 'green sofa', image: '/a.jpg', price: 200 },
  { id: 3, name: 'white sofa', image: '/b.jpg', price: 200 },
  { id: 4, name: 'wooden table', image: '/c.jpg', price: 200 },
  { id: 5, name: 'white chair', image: '/a.jpg', price: 200 },
  { id: 6, name: 'white sofa', image: '/b.jpg', price: 200 },
  { id: 7, name: 'brown table', image: '/c.jpg', price: 200 },
  { id: 8, name: 'red sofa', image: '/5.png', price: 200 },
];

const Products = () => {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) return null; // prevent flicker

  return (
    <div className="px-6 py-8 bg-[#f3f8f7] min-h-screen">
      {/* Search */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full max-w-md px-4 py-2 border rounded-md shadow-sm focus:outline-none"
        />
      </div>

      {/* Title */}
      <div className="flex items-center mb-6">
        <h2 className="text-xl font-semibold text-[#0D4c3e] mr-2">Modern Room</h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="bg-[#0D4c3e] text-white p-4 flex flex-col justify-between h-28">
              <div className="font-medium capitalize">{product.name}</div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex text-yellow-400 text-sm space-x-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <div className="text-white font-semibold">{product.price}$</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
