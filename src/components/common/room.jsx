// pages/test.jsx
"use client"
import React, { useEffect } from "react";
import "aframe";  // تأكد من أن A-Frame تم تثبيته في مشروعك
import Head from "next/head";

export default function Room() {
  
  useEffect(() => {
    // التأكد من أن المشهد تم تحميله بشكل كامل
    const scene = document.querySelector('a-scene');
    scene.addEventListener('loaded', () => {
      // إضافة مستمع للنقر على الكائنات بعد تحميل المشهد
      const chair = document.getElementById('chair');
      chair.addEventListener('click', () => {
        console.log("Item with ID: chair was clicked");
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>A-Frame Test</title>
      </Head>
      <div style={{ height: "100vh", width: "100%" }}>
        <a-scene embedded>
          {/* Room */}
          <a-entity
            gltf-model="url(white-room1.glb)"
            position="0 1 0"
            scale="1 1 1"
            static-body
          ></a-entity>

          {/* Floor */}
          <a-plane
            position="0 0 0"
            rotation="-90 0 0"
            width="10"
            height="10"
            color="#7BC8A4"
            static-body
          ></a-plane>

          {/* Clickable Items */}
          <a-entity
            id="chair"
            gltf-model="url(sofa_chair.glb)"
            position="2 1 0"
            scale="1 1 1"
            class="clickable-item"
          ></a-entity>

          {/* Camera */}
          <a-camera position="0 1.6 4">
            <a-cursor raycaster="objects: .clickable-item; showLine: true" material="opacity: 0.5"></a-cursor>
          </a-camera>
        </a-scene>
      </div>
    </>
  );
}
