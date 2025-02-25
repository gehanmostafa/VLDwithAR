"use client";
if (typeof self === "undefined") {
  global.self = global;
}
// import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SearchBar from '@/components/common/Searchbar';
// import "aframe";

// export default function Home() {
//   const [modelSrc, setModelSrc] = useState(null);

//   useEffect(() => {
//     const savedModelSrc = localStorage.getItem("modelSrc");
//     console.log("Loaded model:", savedModelSrc);
//     if (savedModelSrc) {
//       setModelSrc(savedModelSrc);
//     }
//   }, []);

//   return (
//     <div className="bg-mainbackground min-h-screen py-9 flex flex-col items-center">
//       <SearchBar />
//       <div className="flex flex-col justify-between items-center md:flex-row gap-6 mt-6 w-[90%]">

//         {/* قائمة العناصر */}
//         <div className="grid grid-cols-3 gap-4 w-full md:w-1/4">
//           {[
//             { src: "/storage.webp", category: "Shelf" },
//             { src: "/melltorp-table-white__0737267_pe740965_s5.webp", category: "Table" },
//             { src: "/Chair.avif", category: "Chair" },
//             { src: "/bedavif.avif", category: "Bed" },
//             { src: "/storage.webp", category: "Shelf" },
//             { src: "/aepplaryd-sofa-djuparp-dark-blue__0992903_pe820321_s5.avif", category: "Sofa" },
//             { src: "/besta-storage-combination.webp", category: "Cupboard" },
//             { src: "/stilren-vase-white__0704329_pe725345_s5.avif", category: "Vase" },
//             { src: "/lampan-table-lamp-white__0459937_pe606395_s5.webp", category: "Lamp" },
//           ].map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <img
//                 src={item.src}
//                 alt={item.category}
//                 className="w-full h-[120px] object-contain rounded-lg"
//               />
//               <p className="mt-2 text-sm text-gray-300">{item.category}</p>
//             </div>
//           ))}
//         </div>

//         {/* عرض النموذج */}
//         <div className="flex flex-col items-center w-full md:w-3/4">
//           {!modelSrc ? (
//             <img
//               src="/main2Home.jpg"
//               alt="Main Furniture"
//               className="w-full h-[500px] object-cover rounded-lg"
//             />
//           ) : (
//             <div className="w-full h-[500px]  rounded-lg">
//               <a-scene embedded style={{ width: "100%", height: "100%" }}>
//                 <a-entity
//                   gltf-model={modelSrc}
//                   scale="1 1 1"
//                   position="0 0 0"
//                   rotation="0 180 0"
//                 />
//                 <a-camera position="0 0 0"></a-camera>
//               </a-scene>
//             </div>
//           )}

//           {/* أزرار التحكم */}
//           <div className="flex justify-between items-center w-full mt-6 space-x-4">
//             <Button className="flex items-center justify-center pr-6 pl-1 py-2 bg-secbackground text-textMainColor rounded-full hover:scale-105 transition-transform duration-200">
//               <div className="flex justify-center items-center w-8 h-8 bg-mainbackground text-white rounded-full">
//                 <FaArrowLeft size={16} />
//               </div>
//               <span className="text-lg font-medium ml-3">3D</span>
//             </Button>

//             <Button className="flex items-center justify-center pl-6 pr-1 py-2 bg-secbackground text-textMainColor rounded-full hover:scale-105 transition-transform duration-200">
//               <span className="text-lg font-medium mr-3">Save</span>
//               <div className="flex justify-center items-center w-8 h-8 bg-mainbackground text-white rounded-full">
//                 <FaArrowRight size={16} />
//               </div>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from "react";
import "aframe";
import "aframe-event-set-component";
import "aframe-physics-system";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import {
  FaTrash,
  FaCopy,
  FaExpand,
  FaCompress,
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
  FaUndo,
  FaRedo,
} from "react-icons/fa";

// ----------------------------------------------------------------------
// تسجيل مكونات A-Frame: drag-drop و bounding-box-helper
// ----------------------------------------------------------------------
if (typeof AFRAME !== "undefined") {
  if (!AFRAME.components["drag-drop"]) {
    AFRAME.registerComponent("drag-drop", {
      schema: {},
      init: function () {
        this.dragging = false;
        this.offset = new AFRAME.THREE.Vector3();
        this.cameraEl = null;
        // حفظ المقياس الأصلي للكائن.
        this.originalScale = {
          x: this.el.object3D.scale.x,
          y: this.el.object3D.scale.y,
          z: this.el.object3D.scale.z,
        };
        // تحديد إزاحة قاع النموذج.
        this.initialBottomOffset = 0;
        // ربط معالجات الأحداث.
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.el.addEventListener("mousedown", this.onMouseDown);
      },
      onMouseDown: function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dragging = true;
        // تحديث المقياس.
        this.originalScale = {
          x: this.el.object3D.scale.x,
          y: this.el.object3D.scale.y,
          z: this.el.object3D.scale.z,
        };
        // إيقاف تحكم الكاميرا أثناء السحب.
        this.cameraEl = this.el.sceneEl.querySelector("[camera]");
        if (this.cameraEl && this.cameraEl.components["look-controls"]) {
          this.cameraEl.components["look-controls"].pause();
        }
        // حساب الإزاحة.
        if (evt.detail && evt.detail.intersection) {
          this.offset.copy(this.el.object3D.position).sub(evt.detail.intersection.point);
          this.offset.y = 0;
        } else {
          this.offset.set(0, 0, 0);
        }
        // حساب إزاحة القاع بناءً على حدود الكائن.
        const mesh = this.el.getObject3D("mesh");
        if (mesh) {
          const bbox = new AFRAME.THREE.Box3().setFromObject(this.el.object3D);
          this.initialBottomOffset = this.el.object3D.position.y - bbox.min.y;
        } else {
          this.initialBottomOffset = 0;
        }
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", this.onMouseUp);
      },
      onMouseMove: function (evt) {
        if (!this.dragging) return;
        evt.preventDefault();
        const mouse = new AFRAME.THREE.Vector2();
        mouse.x = (evt.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1;
        const camera = this.el.sceneEl.camera;
        const raycaster = new AFRAME.THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);
        let intersectionPoint = null;
        // محاولة التقاطع مع عنصر الأرض (إذا وُجد).
        const floorEl = document.getElementById("floor");
        if (floorEl) {
          const intersects = raycaster.intersectObject(floorEl.object3D, true);
          if (intersects.length > 0) {
            intersectionPoint = intersects[0].point;
          }
        }
        // في حالة عدم وجود أرض، استخدام مستوى أفقي عند y=0.
        if (!intersectionPoint) {
          const plane = new AFRAME.THREE.Plane(new AFRAME.THREE.Vector3(0, 1, 0), 0);
          intersectionPoint = new AFRAME.THREE.Vector3();
          if (raycaster.ray.intersectPlane(plane, intersectionPoint) === null) {
            return;
          }
        }
        const targetPos = intersectionPoint.clone().add(this.offset);
        // تطبيق التقيد إذا كانت حدود الغرفة معرفة.
        if (window.roomBounds) {
          const box = new AFRAME.THREE.Box3().setFromObject(this.el.object3D);
          const halfWidth = (box.max.x - box.min.x) / 2;
          const halfDepth = (box.max.z - box.min.z) / 2;
          const wallThickness = 0.5;
          const backMargin = 0.2;
          targetPos.x = Math.min(
            Math.max(targetPos.x, window.roomBounds.minX + halfWidth),
            window.roomBounds.maxX - halfWidth
          );
          targetPos.z = Math.min(
            Math.max(
              targetPos.z,
              window.roomBounds.minZ + wallThickness + halfDepth + backMargin
            ),
            window.roomBounds.maxZ - halfDepth
          );
        } else {
          const safeBoundary = 3.5;
          targetPos.x = Math.max(-safeBoundary, Math.min(targetPos.x, safeBoundary));
          targetPos.z = Math.max(-safeBoundary, Math.min(targetPos.z, safeBoundary));
        }
        targetPos.y = intersectionPoint.y + this.initialBottomOffset;
        this.el.setAttribute("position", `${targetPos.x} ${targetPos.y} ${targetPos.z}`);
        // إعادة تعيين المقياس.
        this.el.object3D.scale.set(
          this.originalScale.x,
          this.originalScale.y,
          this.originalScale.z
        );
      },
      onMouseUp: function (evt) {
        this.dragging = false;
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
        if (this.cameraEl && this.cameraEl.components["look-controls"]) {
          this.cameraEl.components["look-controls"].play();
        }
      },
      remove: function () {
        this.el.removeEventListener("mousedown", this.onMouseDown);
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
      },
    });
  }

  if (!AFRAME.components["bounding-box-helper"]) {
    AFRAME.registerComponent("bounding-box-helper", {
      schema: {
        color: { type: "color", default: "#ff0000" },
      },
      init: function () {
        this.el.addEventListener("model-loaded", () => {
          this.helper = new THREE.BoxHelper(this.el.object3D, this.data.color);
          this.el.sceneEl.object3D.add(this.helper);
        });
      },
      tick: function () {
        if (this.helper) {
          this.helper.update();
        }
      },
      remove: function () {
        if (this.helper) {
          this.el.sceneEl.object3D.remove(this.helper);
          this.helper = null;
        }
      },
    });
  }
}

const parsePosition = (positionStr) => {
  const [x, y, z] = positionStr.split(" ").map(Number);
  return { x, y, z };
};

const stringifyPosition = (position) => `${position.x} ${position.y} ${position.z}`;

// ----------------------------------------------------------------------
// المكون الرئيسي Home
// ----------------------------------------------------------------------
export default function Home() {
  const [modelSrc, setModelSrc] = useState(null);
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(0);
  const [cursorPos, setCursorPos] = useState("0 1 0");
  const [menuPosition, setMenuPosition] = useState(null);
  const [dimensions, setDimensions] = useState(null);

  // تحميل نموذج من localStorage إن وجد
  useEffect(() => {
    const savedModelSrc = localStorage.getItem("modelSrc");
    console.log("Loaded model:", savedModelSrc);
    if (savedModelSrc) {
      setModelSrc(savedModelSrc);
    }
  }, []);

  const items = [
    { src: "/Corner sofa.glb", thumbnail: "/Blue Sofa.png", name: "Blue Sofa" },
    { src: "/Brown Table.glb", thumbnail: "/Brown Table.png", name: "Brown Table" }
    ,
    { src: "/bed-13.glb", thumbnail: "/bed-13.png", name: "Bed" },
    { src: "/claudia_3_seater_sofa_peacock_blue_velvet.glb", thumbnail: "/Blue Seater.png", name: "Seater" },
    { src: "/designer_chair_01c.glb", thumbnail: "/Green Chair.png", name: "Chair" },
    { src: "/helena_large_corner_sofa_plush_turmeric_velvet.glb", thumbnail: "/Corner Sofa.png", name: "Corner Sofa" },
    { src: "/sofa_chair.glb", thumbnail: "/sofa_chair.png", name: "sofaChair" },
    { src: "/akia_hand_woven_rug_160_x_230cm.glb", thumbnail: "/Hand Rug.png", name: "Cupboard" },
    { src: "/kameko_coffee_table.glb", thumbnail: "/Coffee Table.png", name: "Coffee Table" }
  ];


  // --- Compute room boundaries once and store globally ---
  async function getRoomDimensions() {
    return new Promise((resolve, reject) => {
      const loader = new GLTFLoader();
      loader.load(
        "/white-room1.glb",
        function (gltf) {
          const model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const width = box.max.x - box.min.x;
          const depth = box.max.z - box.min.z;
          const height = box.max.y - box.min.y;
          const wallThickness = 0.5;
          const floorThickness = 0.2;
          const ceilingThickness = 0.2;
          const internalWidth = width - 2 * wallThickness;
          const internalDepth = depth - 2 * wallThickness;
          resolve({
            minX: box.min.x,
            maxX: box.max.x,
            minZ: box.min.z,
            maxZ: box.max.z,
            internalWidth,
            internalDepth,
            internalHeight: height - floorThickness - ceilingThickness,
          });
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function (error) {
          console.error("An error happened:", error);
          reject(error);
        }
      );
    });
  }

  useEffect(() => {
    async function computeRoomBounds() {
      try {
        const bounds = await getRoomDimensions();
        window.roomBounds = bounds;
      } catch (e) {
        console.error("Error computing room dimensions:", e);
      }
    }
    computeRoomBounds();
  }, []);

  const getModelDimensions = (modelId) => {
    const modelEl = document.getElementById(modelId);
    if (modelEl) {
      const mesh = modelEl.getObject3D("mesh");
      if (mesh) {
        const box = new THREE.Box3().setFromObject(mesh);
        const min = box.min;
        const max = box.max;
        return {
          width: max.x - min.x,
          height: max.y - min.y,
          depth: max.z - min.z,
        };
      }
    }
    return null;
  };

  const handleAddItem = (itemSrc) => {
    const model = {
      id: modelId,
      src: itemSrc,
      position: cursorPos,
      scale: "1 1 1",
      rotation: "0 0 0",
    };
    setModels([...models, model]);
    setSelectedModelId(null);
    setMenuPosition(null);
    setModelId(modelId + 1);
  };

  const handleRemoveItem = (id) => {
    const newModels = models.filter((model) => model.id !== id);
    setModels(newModels);
    setSelectedModelId(null);
    setMenuPosition(null);
  };

  const handleRotateItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        // استخدام AFRAME.utils.coordinates لتفكيك وتركيب قيم الدوران
        const currentRotation = AFRAME.utils.coordinates.parse(model.rotation || "0 0 0");
        const newRotation = {
          ...currentRotation,
          y: currentRotation.y + (direction === "left" ? -45 : 45),
        };
        return {
          ...model,
          rotation: AFRAME.utils.coordinates.stringify(newRotation),
        };
      }
      return model;
    });
    setModels(newModels);
  };

  const handleScaleItem = (id, direction) => {
    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentScale = AFRAME.utils.coordinates.parse(model.scale);
        const scaleFactor = direction === "increase" ? 1.1 : 0.9;
        const newScale = {
          x: Math.min(1.8, Math.max(0.8, currentScale.x * scaleFactor)),
          y: currentScale.y,
          z: Math.min(1.8, Math.max(0.8, currentScale.z * scaleFactor)),
        };
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

  // عند النقر على الأرض، حساب موقع المؤشر الجديد.
  const handleFloorClick = (evt) => {
    let point = null;
    if (evt.detail && evt.detail.intersection) {
      point = evt.detail.intersection.point;
    } else {
      const mouse = new AFRAME.THREE.Vector2();
      mouse.x = (evt.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1;
      const sceneEl = document.querySelector("a-scene");
      const camera = sceneEl.camera;
      const raycaster = new AFRAME.THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
      const plane = new AFRAME.THREE.Plane(new AFRAME.THREE.Vector3(0, 1, 0), 0);
      point = new AFRAME.THREE.Vector3();
      raycaster.ray.intersectPlane(plane, point);
    }
    if (point) {
      const newPos = `${point.x.toFixed(2)} ${point.y.toFixed(2)} ${point.z.toFixed(2)}`;
      setCursorPos(newPos);
    }
    setSelectedModelId(null);
    setMenuPosition(null);
  };

  // إضافة مستمع النقر إلى المشهد.
  useEffect(() => {
    const sceneEl = document.querySelector("a-scene");
    if (sceneEl) {
      sceneEl.addEventListener("click", handleFloorClick);
    }
    return () => {
      if (sceneEl) {
        sceneEl.removeEventListener("click", handleFloorClick);
      }
    };
  }, []);

  const handleModelClick = (evt, model) => {
    evt.stopPropagation();
    setSelectedModelId(model.id);
  };

  // تحديث موضع قائمة التحكم لتكون بمحاذاة مركز قاع النموذج
  useEffect(() => {
    const EXTRA_Y_OFFSET = 15;
    let animationFrameId;
    const updateMenuPosition = () => {
      if (selectedModelId !== null) {
        const modelEl = document.getElementById(selectedModelId);
        const cameraEl = document.querySelector("a-camera");
        const cameraObj = cameraEl?.getObject3D("camera");
        if (modelEl && cameraObj) {
          const box = new THREE.Box3().setFromObject(modelEl.object3D);
          let bottomCenter = new THREE.Vector3();
          if (!box.isEmpty() && isFinite(box.min.x)) {
            bottomCenter.set(
              (box.min.x + box.max.x) / 2,
              box.min.y,
              (box.min.z + box.max.z) / 2
            );
          } else {
            modelEl.object3D.getWorldPosition(bottomCenter);
          }
          bottomCenter.project(cameraObj);
          const x = (bottomCenter.x * 0.5 + 0.5) * window.innerWidth;
          let y = (-bottomCenter.y * 0.5 + 0.5) * window.innerHeight;
          y += EXTRA_Y_OFFSET;
          if (!isNaN(x) && !isNaN(y)) {
            setMenuPosition({ left: x, top: y });
          }
        }
      }
      animationFrameId = requestAnimationFrame(updateMenuPosition);
    };
    updateMenuPosition();
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedModelId]);

  useEffect(() => {
    if (selectedModelId !== null) {
      const dims = getModelDimensions(selectedModelId);
      setDimensions(dims);
    } else {
      setDimensions(null);
    }
  }, [selectedModelId]);

  const enforceAboveGround = (modelEl) => {
    if (!modelEl) return;
    const mesh = modelEl.getObject3D("mesh");
    if (!mesh) return;
    const box = new THREE.Box3().setFromObject(mesh);
    let floorY = 0;
    let groundHeight = 0.144896;
    if (!modelEl.dataset.initialized) {
      modelEl.dataset.initialMinY = box.min.y;
      modelEl.dataset.initialScaleY = modelEl.object3D.scale.y;
      modelEl.dataset.initialized = "true";
    }
    const initialMinY = parseFloat(modelEl.dataset.initialMinY);
    const initialScaleY = parseFloat(modelEl.dataset.initialScaleY);
    let scaleFactor = modelEl.object3D.scale.y / initialScaleY;
    let adjustedMinY = initialMinY * scaleFactor;
    modelEl.object3D.position.y += floorY + groundHeight - adjustedMinY;
  };

  useEffect(() => {
    models.forEach((model) => {
      const modelEl = document.getElementById(model.id);
      if (modelEl && !modelEl.getAttribute("position-adjusted")) {
        modelEl.addEventListener("model-loaded", () => {
          enforceAboveGround(modelEl);
          modelEl.setAttribute("position-adjusted", "true");
        });
        modelEl.addEventListener("scale-changed", () => {
          enforceAboveGround(modelEl);
        });
      }
    });
  }, [models]);

  const wallThickness = 0.5;
  const floorThickness = 0.2;
  const ceilingThickness = 0.2;

  const handleMoveItem = async (id, direction) => {
    try {
      const modelEl = document.getElementById(id);
      if (!modelEl || typeof modelEl.getObject3D !== "function") {
        console.error(`Model with id ${id} not found or does not support getObject3D.`);
        return;
      }
      const internalRoomBounds = await getRoomDimensions();
      if (!internalRoomBounds) return;
      if (!modelEl.dataset.initialY) {
        const initialPosition = modelEl.object3D.position.y;
        modelEl.dataset.initialY = initialPosition;
      }
      const newModels = models.map((model) => {
        if (model.id === id) {
          const currentPosition = parsePosition(model.position);
          let newPosition = { ...currentPosition };
          switch (direction) {
            case "forward":
              newPosition.z -= 0.5;
              break;
            case "backward":
              newPosition.z += 0.5;
              break;
            case "left":
              newPosition.x -= 0.5;
              break;
            case "right":
              newPosition.x += 0.5;
              break;
            default:
              break;
          }
          const mesh = modelEl.getObject3D("mesh");
          if (!mesh) {
            console.error(`No mesh found for model with id ${id}`);
            return model;
          }
          const box = new THREE.Box3().setFromObject(mesh);
          const halfWidth = (box.max.x - box.min.x) / 2;
          const halfDepth = (box.max.z - box.min.z) / 2;
          newPosition.x = Math.min(
            Math.max(newPosition.x, internalRoomBounds.minX + halfWidth),
            internalRoomBounds.maxX - halfWidth
          );
          newPosition.z = Math.min(
            Math.max(newPosition.z, internalRoomBounds.minZ + wallThickness + halfDepth),
            internalRoomBounds.maxZ - halfDepth
          );
          newPosition.y = parseFloat(modelEl.dataset.initialY);
          return { ...model, position: stringifyPosition(newPosition) };
        }
        return model;
      });
      setModels(newModels);
    } catch (error) {
      console.error("Error moving item:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen px-5 py-5">
      <SearchBar />
      <div className="flex gap-6 mt-5">
        {/* الشريط الجانبي للعناصر */}
        <div className="grid grid-cols-1 gap-4 w-full md:w-1/4 max-h-[77vh] overflow-y-auto bg-white custom-scrollbar p-4 rounded-lg shadow-lg">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-3 rounded-lg cursor-pointer hover:scale-105 transition transform hover:shadow-md"
              onClick={() => handleAddItem(item.src)}
            >
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-full h-24 object-contain rounded-md"
              />
              <p className="text-center text-gray-800 mt-2 font-medium">{item.name}</p>
            </div>
          ))}
        </div>

        {/* المشهد الرئيسي */}
        <div className="flex-1 relative">
          {!modelSrc ? (
            <img
              src="/main2Home.jpg"
              alt="Main Furniture"
              className="w-full h-[500px] object-cover rounded-lg border border-gray-300"
            />
          ) : (
            <a-scene embedded physics className="w-full h-[600px] rounded-lg shadow-lg">
              <a-entity
                gltf-model={modelSrc}
                position="0 0 0"
                scale="1 1 1"
                static-body
              ></a-entity>
              {models.map((model) => (
                <a-entity
                  drag-drop
                  key={model.id}
                  gltf-model={model.src}
                  position={model.position}
                  rotation={model.rotation}
                  scale={model.scale}
                  id={model.id}
                  className="clickable-item"
                  onClick={(evt) => handleModelClick(evt, model)}
                />
              ))}
              <a-camera position="0 1.6 4">
                <a-cursor
                  raycaster="objects: .clickable-item, .clickable-floor; showLine: true"
                  material="opacity: 0.5"
                ></a-cursor>
              </a-camera>
            </a-scene>
          )}

          {/* لوحة التحكم للنموذج المحدد */}
          {selectedModelId !== null && menuPosition && (
            <div
              className="absolute p-2 bg-white bg-opacity-95 rounded shadow"
              style={{
                left: menuPosition.left,
                top: menuPosition.top,
                transform: "translate(-60%, -50%)",
              }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleRemoveItem(selectedModelId)}
                >
                  <FaTrash className="text-xl" />
                  <span className="text-xs">Delete</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={handleDuplicateItem}
                >
                  <FaCopy className="text-xl" />
                  <span className="text-xs">Copy</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleScaleItem(selectedModelId, "increase")}
                >
                  <FaExpand className="text-xl" />
                  <span className="text-xs">Enlarge</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleScaleItem(selectedModelId, "decrease")}
                >
                  <FaCompress className="text-xl" />
                  <span className="text-xs">Shrink</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleMoveItem(selectedModelId, "forward")}
                >
                  <FaArrowUp className="text-xl" />
                  <span className="text-xs">Up</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleMoveItem(selectedModelId, "backward")}
                >
                  <FaArrowDown className="text-xl" />
                  <span className="text-xs">Down</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleMoveItem(selectedModelId, "left")}
                >
                  <FaArrowLeft className="text-xl" />
                  <span className="text-xs">Left</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleMoveItem(selectedModelId, "right")}
                >
                  <FaArrowRight className="text-xl" />
                  <span className="text-xs">Right</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleRotateItem(selectedModelId, "left")}
                >
                  <FaUndo className="text-xl" />
                  <span className="text-xs">Rotate L</span>
                </button>
                <button
                  className="flex flex-col items-center hover:text-blue-600 focus:outline-none"
                  onClick={() => handleRotateItem(selectedModelId, "right")}
                >
                  <FaRedo className="text-xl" />
                  <span className="text-xs">Rotate R</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}
