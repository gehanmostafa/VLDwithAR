import React, { useState, useEffect } from "react";
import "aframe";
import "aframe-event-set-component";
import "aframe-physics-system";
import { FaTrash, FaCopy, FaExpand, FaCompress, FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaUndo, FaRedo } from "react-icons/fa";

export default function RoomEditor() {
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(0);
  const [cursorPos, setCursorPos] = useState("0 1 0");

  const items = [
    { src: "/ava_large_geometric_hand_tufted_wool_rug.glb", thumbnail: "/storage.webp", name: "Chair" },
    { src: "/sofa_chair.glb", thumbnail: "/Chair.avif", name: "Table" },
    { src: "/ritchie_3_seater_sofa_ochre_yellow.glb", thumbnail: "/storage.webp", name: "Sofa" },
    { src: "/kolton_rocking_chair_marl_grey.glb", thumbnail: "/storage.webp", name: "Sofa" },
  ];

  const handleAddItem = (itemSrc) => {
    const model = {
      id: modelId,
      src: itemSrc,
      position: cursorPos,
      scale: "1 1 1",
      rotation: "0 0 0"
    };
    setModels([...models, model]);
    setSelectedModelId(model.id);
    setModelId(modelId + 1);
  };

  const handleRemoveItem = (id) => {
    const newModels = models.filter((model) => model.id !== id);
    setModels(newModels);
    setSelectedModelId(null);
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

  const handleDuplicateItem = () => {
    const selectedItem = models.find((model) => model.id === selectedModelId);
    if (selectedItem) {
      const newModel = { ...selectedItem, id: modelId };
      const currentPosition = parsePosition(selectedItem.position);
      const newPosition = { ...currentPosition, x: currentPosition.x + 1 };
      newModel.position = stringifyPosition(newPosition);

      setModels([...models, newModel]);
      setSelectedModelId(newModel.id);
      setModelId(modelId + 1);
    }
  };

  const parsePosition = (positionStr) => {
    const [x, y, z] = positionStr.split(" ").map(Number);
    return { x, y, z };
  };

  const stringifyPosition = (position) => {
    return `${position.x} ${position.y} ${position.z}`;
  };

  // Function to update cursor position on floor click
  const handleFloorClick = (evt) => {
    if (evt.detail && evt.detail.intersection) {
      const point = evt.detail.intersection.point;
      const newPos = `${point.x.toFixed(2)} ${point.y.toFixed(2)} ${point.z.toFixed(2)}`;
      setCursorPos(newPos);
    }
  };

  useEffect(() => {
    const floorEl = document.getElementById("floor");
    if (floorEl) {
      floorEl.addEventListener("click", handleFloorClick);
    }
    return () => {
      if (floorEl) {
        floorEl.removeEventListener("click", handleFloorClick);
      }
    };
  }, []);

  // Show menu when item is selected
  useEffect(() => {
    const modelElement = document.getElementById(selectedModelId);
    if (modelElement) {
      modelElement.addEventListener("click", () => setSelectedModelId(selectedModelId));
    }

    return () => {
      if (modelElement) {
        modelElement.removeEventListener("click", () => setSelectedModelId(selectedModelId));
      }
    };
  }, [selectedModelId]);

  return (
    <div className="bg-mainbackground min-h-[100vh] flex">
      <div className="w-1/4 bg-secbackground p-4 space-y-4 border border-mainbackground">
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

      <div className="flex-1 relative">
        <a-scene embedded physics>
          <a-entity gltf-model="/white-room1.glb" position="0 1 0" scale="1 1 1" static-body></a-entity>
          <a-plane id="floor" className="clickable-floor" position="0 1 0" rotation="-90 0 0" width="10" height="10" color="#ffff" static-body></a-plane>

          {models.map((model) => (
            <a-entity
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              rotation={model.rotation}
              scale={model.scale}
              id={model.id}
              className="clickable-item"
              event-set__click={`_event: click; setSelectedModelId: ${model.id}`}
            />
          ))}

          <a-camera position="0 1.6 4">
            <a-cursor raycaster="objects: .clickable-item, .clickable-floor; showLine: true" material="opacity: 0.5"></a-cursor>
          </a-camera>
        </a-scene>

        {selectedModelId !== null && (
          <div className="absolute flex space-x-2 bg-gray-800 bg-opacity-70 p-2 rounded-lg" style={{ left: `50%`, top: `50%`, transform: "translate(-50%, -100%)" }}>
            <FaTrash className="text-white text-2xl cursor-pointer" onClick={() => handleRemoveItem(selectedModelId)} />
            <FaCopy className="text-white text-2xl cursor-pointer" onClick={handleDuplicateItem} />
            <FaExpand className="text-white text-2xl cursor-pointer" onClick={() => handleScaleItem(selectedModelId, "increase")} />
            <FaCompress className="text-white text-2xl cursor-pointer" onClick={() => handleScaleItem(selectedModelId, "decrease")} />
            <FaArrowUp className="text-white text-2xl cursor-pointer" onClick={() => handleMoveItem(selectedModelId, "forward")} />
            <FaArrowDown className="text-white text-2xl cursor-pointer" onClick={() => handleMoveItem(selectedModelId, "backward")} />
            <FaArrowLeft className="text-white text-2xl cursor-pointer" onClick={() => handleMoveItem(selectedModelId, "left")} />
            <FaArrowRight className="text-white text-2xl cursor-pointer" onClick={() => handleMoveItem(selectedModelId, "right")} />
            <FaUndo className="text-white text-2xl cursor-pointer" onClick={() => handleRotateItem(selectedModelId, "left")} />
            <FaRedo className="text-white text-2xl cursor-pointer" onClick={() => handleRotateItem(selectedModelId, "right")} />
          </div>
        )}
      </div>
    </div>
  );
}
