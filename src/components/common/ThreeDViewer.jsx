"use client";

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

      // تخزين الرابط في localStorage لتمريره إلى الصفحة الأخرى
      localStorage.setItem("modelSrc", fileURL);

      // التوجيه تلقائيًا إلى صفحة home
      router.push("/home");
    }
  };

  return (
    <div>
      <h1>Upload and Display 3D Model</h1>
      <input type="file" accept=".obj,.gltf,.glb" onChange={handleFileChange} className="relative z-30" />
    </div>
  );
};

export default dynamic(() => Promise.resolve(ThreeDViewer), { ssr: false });









