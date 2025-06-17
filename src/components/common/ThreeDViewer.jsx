'use client';

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

const ThreeDViewer = () => {
  const [modelSrc, setModelSrc] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // تحميل مكتبة A-Frame في المتصفح فقط
      import("aframe").catch(console.error);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setModelSrc(fileURL);
      localStorage.setItem("modelSrc", fileURL);
      router.push("/arPage");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[50vh] bg-mainbackground p-4 w-full">
      <h1 className="text-2xl font-bold text-secbackground mb-6">
        Upload and Display 3D Model
      </h1>
      <label className="relative cursor-pointer bg-white border border-gray-300 rounded-lg shadow-sm px-6 py-3 text-gray-700 hover:bg-gray-50 transition-all">
        <span className="font-medium">Choose a 3D Model</span>
        <input
          type="file"
          accept=".gltf,.glb,.obj"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer "
        />
      </label>
    </div>
  );
};

export default ThreeDViewer;





