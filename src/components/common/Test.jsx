"use client";
import React, { useState } from "react";
import "aframe";
import "aframe-event-set-component";
import "aframe-physics-system";

export default function RoomEditor() {
  const [selectedModel, setSelectedModel] = useState(null);

  const items = [
    { src: "/ava_large_geometric_hand_tufted_wool_rug.glb", thumbnail: "/storage.webp", name: "Chair" },
    { src: "/sofa_chair.glb", thumbnail: "/Chair.avif", name: "Table" },
    { src: "/sofa_chair.glb", thumbnail: "/lamp.jpg", name: "Lamp" },
  ];

  const handleAddItem = (itemSrc) => {
    setSelectedModel(itemSrc);
  };

  return (
    <div className="bg-mainbackground min-h-[100vh] flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-secbackground p-4 space-y-4">
        <h2 className="text-white text-lg mb-4">Items</h2>
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-mainbackground p-2 rounded-lg cursor-pointer hover:scale-105 transition"
            onClick={() => handleAddItem(item.src)}
          >
            <img
              src={item.thumbnail}
              alt={item.name}
              className="w-full h-20 object-contain rounded-lg"
            />
            <p className="text-center text-white mt-2">{item.name}</p>
          </div>
        ))}
      </div>

      {/* Main Scene */}
      <div className="flex-1">
        <a-scene embedded physics>
          {/* الغرفة */}
          <a-entity
            gltf-model="/childs_room_day_house_room.glb"
            position="0 30 0"  // تحديد مكان الغرفة
            scale="1 1 1"
            static-body
          ></a-entity>

          {/* الأرضية */}
          <a-plane
            position="0 -1 0"  // تحديد الأرضية بموقع أدنى
            rotation="-90 0 0"
            width="10"
            height="10"
            color="#7BC8A4"
            static-body
          ></a-plane>

          {/* العنصر المختار */}
          {selectedModel && (
            <a-entity
              gltf-model={selectedModel}
              position="0 0 2"  // تغيير مكان العنصر داخل الغرفة بحيث يكون أمام الكاميرا
              scale="0.05 0.5 0.3"  // ضبط حجم العنصر
              // dynamic-body
              event-set__enter="_event: mouseenter; scale: 0.02 0.02 0.02"
              event-set__leave="_event: mouseleave; scale: 0.01 0.01 0.01"
              class="draggable"
            ></a-entity>
          )}

          {/* الكاميرا */}
          <a-camera
            position="0 0 4"  // وضع الكاميرا في منتصف الغرفة
            look-controls
            wasd-controls
          ></a-camera>
        </a-scene>
      </div>
    </div>
  );
}

