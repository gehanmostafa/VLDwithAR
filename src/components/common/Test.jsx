 
  "use client";
import React, { useState, useEffect } from "react";
import "aframe";
import "aframe-event-set-component";
import "aframe-physics-system";

AFRAME.registerComponent('draggable', {
  init: function () {
    this.el.addEventListener('mousedown', (event) => {
      this.el.setAttribute('dynamic-body', ''); // Make the entity draggable by the mouse
      this.el.addEventListener('mouseup', () => this.el.removeAttribute('dynamic-body'));
    });
  }
});

export default function RoomEditor() {
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(0);

  const items = [
    { src: "/ava_large_geometric_hand_tufted_wool_rug.glb", thumbnail: "/storage.webp", name: "Chair" },
    { src: "/sofa_chair.glb", thumbnail: "/Chair.avif", name: "Table" },
    { src: "/sofa_chair.glb", thumbnail: "/lamp.jpg", name: "Lamp" },
  ];

  const handleAddItem = (itemSrc) => {
    const model = { id: modelId, src: itemSrc, position: "0 0 2", scale: "0.05 0.5 0.3" };
    setModels([...models, model]);
    setSelectedModelId(model.id);
    setModelId(modelId + 1);
  };

  const handleRemoveItem = (id) => {
    const newModels = models.filter((model) => model.id !== id);
    setModels(newModels);
    setSelectedModelId(null);
  };

  const handleSelectItem = (id) => {
    setSelectedModelId(id);
  };

  const handleMoveItem = (id, position) => {
    const newModels = models.map((model) => 
      model.id === id ? { ...model, position } : model
    );
    setModels(newModels);
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
      <div className="flex-1 relative">
        <a-scene embedded physics>
          {/* الغرفة */}
          <a-entity
            gltf-model="/childs_room_day_house_room.glb"
            position="0 30 0"
            scale="1 1 1"
            static-body
          ></a-entity>

          {/* الأرضية */}
          <a-plane
            position="0 -1 0"
            rotation="-90 0 0"
            width="10"
            height="10"
            color="#7BC8A4"
            static-body
          ></a-plane>

          {/* العناصر المختارة */}
          {models.map((model) => (
            <a-entity
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              scale={model.scale}
              class="draggable"
              draggable // Enable drag-and-drop for the item
              events={{
                mousedown: () => this.setAttribute('dynamic-body', ''),
                mouseup: () => this.removeAttribute('dynamic-body'),
                click: () => handleSelectItem(model.id),
                dragend: (event) => handleMoveItem(model.id, event.target.getAttribute('position'))
              }}
            ></a-entity>
          ))}

          {/* الكاميرا */}
          <a-camera
            position="0 0 4"
            look-controls
            wasd-controls
          ></a-camera>
        </a-scene>

        {/* Button to remove selected item */}
        {selectedModelId !== null && (
          <button
            className="absolute bottom-4 right-4 bg-red-500 text-white p-2 rounded"
            onClick={() => handleRemoveItem(selectedModelId)}
          >
            Remove Selected Item
          </button>
        )}
      </div>
    </div>
  );
}
