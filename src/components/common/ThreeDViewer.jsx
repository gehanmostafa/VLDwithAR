import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import "aframe";

const ThreeDViewer = () => {
  const [modelSrc, setModelSrc] = useState(null);
  const router = useRouter();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setModelSrc(fileURL);
      localStorage.setItem("modelSrc", fileURL);
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40vh] bg-secbackground p-4">
      <h1 className="text-2xl font-bold text-mainbackground mb-6">Upload and Display 3D Model</h1>
      <label className="relative cursor-pointer bg-white border border-gray-300 rounded-lg shadow-sm px-6 py-3 text-gray-700 hover:bg-gray-50 transition-all">
        <span className="font-medium">Choose a 3D Model</span>
        <input
          type="file"
          accept=".gltf,.glb,.obj"
          onChange={handleFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </label>
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThreeDViewer), { ssr: false });








