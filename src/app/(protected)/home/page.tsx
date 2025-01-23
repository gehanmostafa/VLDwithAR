import SearchBar from '@/components/common/Searchbar';
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <div className="bg-mainbackground min-h-[70vh] py-9">
      <SearchBar />
      <div className="container mx-auto flex flex-col  justify-between items-center md:flex-row gap-6 mt-6 w-[70%]">
        
        <div className="grid grid-cols-3 gap-4 w-full md:w-1/3">
          {[
            { src: "/storage.webp", category: "Shelf" },
            { src: "/melltorp-table-white__0737267_pe740965_s5.webp", category: "Table" },
            { src: "/Chair.avif", category: "Chair" },
            { src: "/bedavif.avif", category: "Bed" },
            { src: "/storage.webp", category: "Shelf" },
            { src: "/aepplaryd-sofa-djuparp-dark-blue__0992903_pe820321_s5.avif", category: "Sofa" },
            { src: "/besta-storage-combination.webp", category: "Cupboard" },
            { src: "/stilren-vase-white__0704329_pe725345_s5.avif", category: "Vase" },
            { src: "/lampan-table-lamp-white__0459937_pe606395_s5.webp", category: "Lamp" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.category}
                className="w-full h-[120px] object-contain rounded-lg"
              />
              <p className="mt-2 text-sm text-gray-300">{item.category}</p>
            </div>
          ))}
        </div>

        
        <div className="flex flex-col items-center w-full md:w-2/3">
          <img
            src="/main2Home.jpg"
            alt="Main Furniture"
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <div className="flex justify-between items-center w-full mt-6 space-x-4">
            <Button className="flex items-center justify-center pr-6 pl-1  py-2 bg-secbackground text-textMainColor rounded-full hover:scale-105 transition-transform duration-200">
              <div className="flex justify-center items-center w-8 h-8 bg-mainbackground text-white rounded-full">
                <FaArrowLeft size={16} />
              </div>
              <span className="text-lg font-medium ml-3">3D</span>
            </Button>

            <Button className="flex items-center justify-center pl-6 pr-1  py-2 bg-secbackground text-textMainColor rounded-full  hover:scale-105 transition-transform duration-200">
              <span className="text-lg font-medium mr-3">Save</span>
              <div className="flex justify-center items-center w-8 h-8 bg-mainbackground text-white rounded-full">
                <FaArrowRight size={16} />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
