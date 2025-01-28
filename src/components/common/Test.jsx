  
 
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
    const model = { id: modelId, src: itemSrc, position: "0 0 2", scale: "0.05 0.5 0.3", rotation: "0 0 0" };
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

  const handleMoveItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentPosition = parsePosition(model.position);
        switch (direction) {
          case 'forward':
            currentPosition.z -= 1;
            break;
          case 'backward':
            currentPosition.z += 1;
            break;
          case 'left':
            currentPosition.x -= 1;
            break;
          case 'right':
            currentPosition.x += 1;
            break;
          default:
            break;
        }
        return { ...model, position: stringifyPosition(currentPosition) };
      }
      return model;
    });
    setModels(newModels);
  };

  const handleRotateItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentRotation = AFRAME.utils.coordinates.parse(model.rotation);
        const newRotation = { ...currentRotation, y: currentRotation.y + (direction === 'left' ? -45 : 45) };
        return { ...model, rotation: AFRAME.utils.coordinates.stringify(newRotation) };
      }
      return model;
    });
    setModels(newModels);
  };

  const handleScaleItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentScale = AFRAME.utils.coordinates.parse(model.scale);
        const scaleFactor = direction === 'increase' ? 1.1 : 0.9;
        const newScale = { x: currentScale.x * scaleFactor, y: currentScale.y * scaleFactor, z: currentScale.z * scaleFactor };
        return { ...model, scale: AFRAME.utils.coordinates.stringify(newScale) };
      }
      return model;
    });
    setModels(newModels);
  };

  const parsePosition = (positionStr) => {
    const [x, y, z] = positionStr.split(" ").map(Number);
    return { x, y, z };
  };

  const stringifyPosition = (position) => {
    return `${position.x} ${position.y} ${position.z}`;
  };

  const handleDuplicateItem = () => {
    const selectedItem = models.find((model) => model.id === selectedModelId);
    if (selectedItem) {
      const newModel = { ...selectedItem, id: modelId };
      const currentPosition = parsePosition(selectedItem.position);
      const newPosition = { ...currentPosition, x: currentPosition.x + 1 }; // Shift position to the right
      newModel.position = stringifyPosition(newPosition);

      setModels([...models, newModel]);
      setSelectedModelId(newModel.id);
      setModelId(modelId + 1);
    }
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
          {/* Room */}
          <a-entity
            gltf-model="/childs_room_day_house_room.glb"
            position="0 30 0"
            scale="1 1 1"
            static-body
          ></a-entity>

          {/* Floor */}
          <a-plane
            position="0 -1 0"
            rotation="-90 0 0"
            width="10"
            height="10"
            color="#7BC8A4"
            static-body
          ></a-plane>

          {/* Selected Items */}
          {models.map((model) => (
            <a-entity
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              rotation={model.rotation}
              scale={model.scale}
              className="draggable"
              draggable // Enable drag-and-drop
              events={{
                mousedown: () => this.setAttribute('dynamic-body', ''),
                mouseup: () => this.removeAttribute('dynamic-body'),
                click: () => handleSelectItem(model.id),
                dragend: (event) => handleMoveItem(model.id, event.target.getAttribute('position'))
              }}
            ></a-entity>
          ))}

          {/* Camera */}
          <a-camera
            position="0 0 4"
            look-controls
            wasd-controls
          ></a-camera>
        </a-scene>

        {/* Control Panel for Moving Item */}
        {selectedModelId !== null && (
          <div className="absolute bottom-4 right-4 bg-opacity-70 bg-gray-800 p-4 rounded-lg flex flex-col space-y-3">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={() => handleRemoveItem(selectedModelId)}
            >
              Remove
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleDuplicateItem}
            >
              Duplicate
            </button>
            <button
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
              onClick={() => handleRotateItem(selectedModelId, 'left')}
            >
              Rotate Left
            </button>
            <button
              className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-600"
              onClick={() => handleRotateItem(selectedModelId, 'right')}
            >
              Rotate Right
            </button>
            <button
              className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => handleScaleItem(selectedModelId, 'increase')}
            >
              Scale Up
            </button>
            <button
              className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={() => handleScaleItem(selectedModelId, 'decrease')}
            >
              Scale Down
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={() => handleMoveItem(selectedModelId, 'forward')}
            >
              Move Backward
              
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={() => handleMoveItem(selectedModelId, 'backward')}
            >
              
              Move Forward
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={() => handleMoveItem(selectedModelId, 'left')}
            >
              Move Right
              
            </button>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
              onClick={() => handleMoveItem(selectedModelId, 'right')}
            >
              
              Move Left
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
