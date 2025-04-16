// import React, { useState, useRef, useEffect } from "react";
// import "aframe";
// import "aframe-event-set-component";
// import "aframe-physics-system";
// import * as THREE from "three";

// export default function TestThreejs() {
//   const [selectedModelId, setSelectedModelId] = useState(null);
//   const [models, setModels] = useState([]);
//   const [modelId, setModelId] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStartPos, setDragStartPos] = useState(null);
//   const [draggingModel, setDraggingModel] = useState(null);
//   const sceneRef = useRef(null);

//   const items = [
//     { src: "/ava_large_geometric_hand_tufted_wool_rug.glb", thumbnail: "/storage.webp", name: "Chair" },
//     { src: "/sofa_chair.glb", thumbnail: "/Chair.avif", name: "Table" },
//   ];

//   const handleAddItem = (itemSrc) => {
//     const model = { id: modelId, src: itemSrc, position: "0 0 2", scale: "0.05 0.5 0.3", rotation: "0 0 0" };
//     setModels([...models, model]);
//     setModelId(modelId + 1);
//   };

//   const handleMoveItem = (id, newPosition) => {
//     const newModels = models.map((model) => {
//       if (model.id === id) {
//         return { ...model, position: newPosition };
//       }
//       return model;
//     });
//     setModels(newModels);
//   };

//   const startDrag = (event, model) => {
//     setIsDragging(true);
//     setSelectedModelId(model.id);
//     setDraggingModel(model);

//     // Get the current mouse position
//     const mousePos = new THREE.Vector2(event.clientX, event.clientY);
//     setDragStartPos(mousePos);
//   };

//   const onDragMove = (event) => {
//     if (!isDragging || dragStartPos === null || draggingModel === null) return;

//     const mousePos = new THREE.Vector2(event.clientX, event.clientY);
//     const delta = mousePos.sub(dragStartPos);

//     // Calculate new position for the dragged model
//     const newPosition = `0 ${draggingModel.position.split(" ")[1]} ${delta.x * 0.01 + 2}`; // Update only x and z axis
//     handleMoveItem(selectedModelId, newPosition);

//     setDragStartPos(mousePos); // Update the drag start position
//   };

//   const stopDrag = () => {
//     setIsDragging(false);
//     setDragStartPos(null);
//     setDraggingModel(null);
//   };

//   // Add event listeners for dragging
//   useEffect(() => {
//     if (sceneRef.current) {
//       sceneRef.current.addEventListener("mousemove", onDragMove);
//       sceneRef.current.addEventListener("mouseup", stopDrag);
//     }

//     return () => {
//       if (sceneRef.current) {
//         sceneRef.current.removeEventListener("mousemove", onDragMove);
//         sceneRef.current.removeEventListener("mouseup", stopDrag);
//       }
//     };
//   }, [isDragging, dragStartPos]);

//   return (
//     <div className="bg-mainbackground min-h-[100vh] flex">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-secbackground p-4 space-y-4">
//         <h2 className="text-white text-lg mb-4">Items</h2>
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-mainbackground p-2 rounded-lg cursor-pointer hover:scale-105 transition"
//             onClick={() => handleAddItem(item.src)}
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.name}
//               className="w-full h-20 object-contain rounded-lg"
//             />
//             <p className="text-center text-white mt-2">{item.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Main Scene */}
//       <div className="flex-1 relative">
//         <a-scene ref={sceneRef} embedded physics>
//           {/* Room */}
//           <a-entity
//             gltf-model="/childs_room_day_house_room.glb"
//             position="0 30 0"
//             scale="1 1 1"
//             static-body
//           ></a-entity>

//           {/* Floor */}
//           <a-plane
//             position="0 -1 0"
//             rotation="-90 0 0"
//             width="10"
//             height="10"
//             color="#7BC8A4"
//             static-body
//           ></a-plane>

//           {/* Model 1 */}
//           {models.map((model) => (
//             <a-entity
//               key={model.id}
//               gltf-model={model.src}
//               position={model.position}
//               rotation={model.rotation}
//               scale={model.scale}
//               className="draggable"
//               dynamic-body={isDragging && draggingModel?.id === model.id ? "" : "false"} // Only add dynamic-body while dragging
//               events={{
//                 click: () => setSelectedModelId(model.id),
//                 mousedown: (event) => startDrag(event, model), // Start drag on mousedown
//                 mouseup: stopDrag, // Stop drag
//               }}
//             ></a-entity>
//           ))}

//           {/* Camera */}
//           <a-camera
//             position="0 0 4"
//             look-controls
//             wasd-controls
//           ></a-camera>
//         </a-scene>
//       </div>
//     </div>
//   );
// }
// import React, { useState, useRef, useEffect } from "react";
// import "aframe";
// import "aframe-event-set-component";
// import "aframe-physics-system";
// import * as THREE from "three";

// export default function TestThreejs() {
//   const [selectedModelId, setSelectedModelId] = useState(null);
//   const [models, setModels] = useState([]);
//   const [modelId, setModelId] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragStartPos, setDragStartPos] = useState(null);
//   const sceneRef = useRef(null);

//   const items = [
//     { src: "/ava_large_geometric_hand_tufted_wool_rug.glb", thumbnail: "/storage.webp", name: "Chair" },
//     { src: "/sofa_chair.glb", thumbnail: "/Chair.avif", name: "Table" },
//   ];

//   const handleAddItem = (itemSrc) => {
//     const model = { id: modelId, src: itemSrc, position: "0 0 2", scale: "0.05 0.5 0.3", rotation: "0 0 0" };
//     setModels([...models, model]);
//     setModelId(modelId + 1);
//   };

//   const handleMoveItem = (id, newPosition) => {
//     const newModels = models.map((model) => {
//       if (model.id === id) {
//         return { ...model, position: newPosition };
//       }
//       return model;
//     });
//     setModels(newModels);
//   };

//   const startDrag = (event, model) => {
//     setIsDragging(true);
//     setSelectedModelId(model.id);

//     // Get the current mouse position
//     const mousePos = new THREE.Vector2(event.clientX, event.clientY);
//     setDragStartPos(mousePos);
//   };

//   const onDragMove = (event) => {
//     if (!isDragging || dragStartPos === null) return;

//     const mousePos = new THREE.Vector2(event.clientX, event.clientY);
//     const delta = mousePos.sub(dragStartPos);

//     // Calculate new position for the dragged model
//     const newPosition = `0 ${delta.y * 0.01} 2`; // Adjust based on mouse movement
//     handleMoveItem(selectedModelId, newPosition);

//     setDragStartPos(mousePos); // Update the drag start position
//   };

//   const stopDrag = () => {
//     setIsDragging(false);
//     setDragStartPos(null);
//   };

//   // Add event listeners for dragging
//   useEffect(() => {
//     if (sceneRef.current) {
//       sceneRef.current.addEventListener("mousemove", onDragMove);
//       sceneRef.current.addEventListener("mouseup", stopDrag);
//     }

//     return () => {
//       if (sceneRef.current) {
//         sceneRef.current.removeEventListener("mousemove", onDragMove);
//         sceneRef.current.removeEventListener("mouseup", stopDrag);
//       }
//     };
//   }, [isDragging, dragStartPos]);

//   return (
//     <div className="bg-mainbackground min-h-[100vh] flex">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-secbackground p-4 space-y-4">
//         <h2 className="text-white text-lg mb-4">Items</h2>
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="bg-mainbackground p-2 rounded-lg cursor-pointer hover:scale-105 transition"
//             onClick={() => handleAddItem(item.src)}
//           >
//             <img
//               src={item.thumbnail}
//               alt={item.name}
//               className="w-full h-20 object-contain rounded-lg"
//             />
//             <p className="text-center text-white mt-2">{item.name}</p>
//           </div>
//         ))}
//       </div>

//       {/* Main Scene */}
//       <div className="flex-1 relative">
//         <a-scene ref={sceneRef} embedded physics>
//           {/* Room */}
//           <a-entity
//             gltf-model="/childs_room_day_house_room.glb"
//             position="0 30 0"
//             scale="1 1 1"
//             static-body
//           ></a-entity>

//           {/* Floor */}
//           <a-plane
//             position="0 -1 0"
//             rotation="-90 0 0"
//             width="10"
//             height="10"
//             color="#7BC8A4"
//             static-body
//           ></a-plane>

//           {/* Model 1 */}
//           {models.map((model) => (
//             <a-entity
//               key={model.id}
//               gltf-model={model.src}
//               position={model.position}
//               rotation={model.rotation}
//               scale={model.scale}
//               className="draggable"
//               events={{
//                 click: () => setSelectedModelId(model.id),
//                 mousedown: (event) => startDrag(event, model), // Start drag on mousedown
//               }}
//             ></a-entity>
//           ))}

//           {/* Camera */}
//           <a-camera
//             position="0 0 4"
//             look-controls
//             wasd-controls
//           ></a-camera>
//         </a-scene>
//       </div>
//     </div>
//   );
// }
///!SECTION only Test 
"use client";
import "aframe";
import { useEffect, useRef } from "react";

const ARScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && sceneRef.current) {
      sceneRef.current.addEventListener("click", (event) => {
        const target = event.target;
        if (target.classList.contains("clickable")) {
          console.log("Clicked model ID:", target.id);
        }
      });
    }
  }, []);

  return (
    <a-scene ref={sceneRef}>
      {/* Camera with Cursor */}
      <a-entity camera position="0 1.6 3">
        <a-cursor raycaster="objects: .clickable"></a-cursor>
      </a-entity>

      {/* 3D Model */}
      <a-entity
        id="myModel"
        className="clickable"
        gltf-model="/white-room1.glb"
        position="0 0 -2"
        scale="1 1 1"
      ></a-entity>
    </a-scene>
  );
};

export default ARScene;

