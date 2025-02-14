
import React, { useState, useEffect } from "react"; 
import "aframe";
import "aframe-event-set-component";
import "aframe-physics-system";
import { 
  FaTrash, FaCopy, FaExpand, FaCompress, 
  FaArrowUp, FaArrowDown, FaArrowLeft, FaArrowRight, 
  FaUndo, FaRedo 
} from "react-icons/fa";

// تعريف مكوّن bounding-box-helper
AFRAME.registerComponent("bounding-box-helper", {
  schema: {
    color: { type: "color", default: "#ff0000" } // اللون الافتراضي أحمر
  },
  init: function () {
    // التأكد من تحميل الموديل أولاً
    this.el.addEventListener("model-loaded", () => {
      // إنشاء BoxHelper بناءً على object3D للعنصر
      this.helper = new THREE.BoxHelper(this.el.object3D, this.data.color);
      // إضافته إلى مشهد A-Frame
      this.el.sceneEl.object3D.add(this.helper);
    });
  },
  tick: function () {
    // تحديث الـ BoxHelper في كل إطار
    if (this.helper) {
      this.helper.update();
    }
  },
  remove: function () {
    // إزالة الـ helper عند حذف المكوّن
    if (this.helper) {
      this.el.sceneEl.object3D.remove(this.helper);
      this.helper = null;
    }
  }
});

const parsePosition = (positionStr) => {
  const [x, y, z] = positionStr.split(" ").map(Number);
  return { x, y, z };
};

const stringifyPosition = (position) => {
  return `${position.x} ${position.y} ${position.z}`;
};

export default function RoomEditor() {
  const [selectedModelId, setSelectedModelId] = useState(null);
  const [models, setModels] = useState([]);
  const [modelId, setModelId] = useState(0);
  const [cursorPos, setCursorPos] = useState("0 1 0");
  const [menuPosition, setMenuPosition] = useState(null);
  const [dimensions, setDimensions] = useState(null);

  const items = [
    { src: "/untitled.glb", thumbnail: "/storage.webp", name: "cornar" },
    { src: "/sofa_chair.glb", thumbnail: "/Chair.avif", name: "chair" },
    { src: "/kameko_coffee_table.glb", thumbnail: "/storage.webp", name: "Table" },
    { src: "/moby_2_seater_sofa_blue_velvet.glb", thumbnail: "/storage.webp", name: "sofa" },
    { src: "/julianne_3_seater_sofa_petrol_cotton.glb", thumbnail: "/storage.webp", name: "Sofa" }, // ليها ارضيه
    { src: "/quentin_2_seater_sofa_lemongrass_green.glb", thumbnail: "/Chair.avif", name: "sofa" },
    { src: "/akia_hand_woven_rug_160_x_230cm.glb", thumbnail: "/storage.webp", name: "carpet" },
  ];
  
  const getModelDimensions = (modelId) => {
    const modelEl = document.getElementById(modelId);
    if (modelEl) {
      const mesh = modelEl.getObject3D("mesh");
      if (mesh) {
        const box = new AFRAME.THREE.Box3().setFromObject(mesh);
        const min = box.min;
        const max = box.max;
        const width = max.x - min.x;
        const height = max.y - min.y;
        const depth = max.z - min.z;
        return { width, height, depth };
      }
    }
    return null;
  };
  // دالة إضافة عنصر جديد
  const handleAddItem = (itemSrc) => {
    const model = {
      id: modelId,
      src: itemSrc,
      position: cursorPos,
      scale: "1 1 1"
    };
    setModels([...models, model]);
    setSelectedModelId(model.id);
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
        const currentRotation = AFRAME.utils.coordinates.parse(model.rotation || "0 0 0");
        const newRotation = { 
          ...currentRotation, 
          y: currentRotation.y + (direction === 'left' ? -45 : 45)
        };
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
        
        // حدد القيمة الجديدة لكل محور مع المحافظة على y ثابتة
        const newScale = { 
          x: Math.min(1.8, Math.max(0.8, currentScale.x * scaleFactor)), 
          y: currentScale.y,  // ثابتة مش هتتغير
          z: Math.min(1.8, Math.max(0.8, currentScale.z * scaleFactor))   
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

  const handleFloorClick = (evt) => {
    if (evt.detail && evt.detail.intersection) {
      const point = evt.detail.intersection.point;
      const newPos = `${point.x.toFixed(2)} ${point.y.toFixed(2)} ${point.z.toFixed(2)}`;
      setCursorPos(newPos);
    }
    setSelectedModelId(null);
    setMenuPosition(null);
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

  // عند النقر على عنصر من العناصر، تحديده
  const handleModelClick = (evt, model) => {
    evt.stopPropagation();
    setSelectedModelId(model.id);
  };

  // تحديث موقع قائمة الأدوات بناءً على العنصر المحدد
  useEffect(() => {
    let animationFrameId;
    const updateMenuPosition = () => {
      if (selectedModelId !== null) {
        const modelEl = document.getElementById(selectedModelId);
        const cameraEl = document.querySelector("a-camera");
        const cameraObj = cameraEl?.getObject3D("camera");
        if (modelEl && cameraObj) {
          const posAttr = modelEl.getAttribute("position");
          const vector = new AFRAME.THREE.Vector3(posAttr.x, posAttr.y, posAttr.z);
          vector.project(cameraObj);
          const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
          const y = (-vector.y * 0.5 + 0.5) * window.innerHeight;
          setMenuPosition({ left: x, top: y });
        }
      }
      animationFrameId = requestAnimationFrame(updateMenuPosition);
    };
    updateMenuPosition();
    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedModelId]);

  // تحديث أبعاد العنصر عند تحديده
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
  
    const box = new AFRAME.THREE.Box3().setFromObject(mesh);
    
    let floorY = 0; // مستوى الأرض
    let groundHeight = 0.144896; // سمك الأرضية (يمكن تعديله)

    if (!modelEl.dataset.initialized) {
      modelEl.dataset.initialMinY = box.min.y;
      modelEl.dataset.initialScaleY = modelEl.object3D.scale.y; // حفظ مقياس Y الأصلي
      modelEl.dataset.initialized = "true";
    }
    const initialMinY = parseFloat(modelEl.dataset.initialMinY);
    const initialScaleY = parseFloat(modelEl.dataset.initialScaleY);
    let scaleFactor = modelEl.object3D.scale.y / initialScaleY;
    let adjustedMinY = initialMinY * scaleFactor;
    modelEl.object3D.position.y += (floorY + groundHeight - adjustedMinY);
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

  const wallThickness =0.5;
  const floorThickness = 0.2;
  const ceilingThickness =0.2;
  
  function getRoomDimensions() {
    return new Promise((resolve, reject) => {
      const loader = new THREE.GLTFLoader();
  
      loader.load(
        '/white-room1.glb',
        function (gltf) {
          const model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const width = box.max.x - box.min.x;
          const depth = box.max.z - box.min.z;
          const height = box.max.y - box.min.y;
  
          const internalWidth = width - 2 * wallThickness;
          const internalDepth = depth - 2 * wallThickness;
          const internalHeight = height - floorThickness - ceilingThickness;
  
          resolve({
            minX: box.min.x,
            maxX: box.max.x,
            minZ: box.min.z,
            maxZ: box.max.z,
            internalWidth,
            internalDepth,
            internalHeight,
          });
        },
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
          reject(error);
          console.log('An error happened:', error);
        }
      );
    });
  }
const handleMoveItem = async (id, direction) => {
  try {
    // الحصول على عنصر A-Frame الحقيقي باستخدام document.getElementById
    const modelEl = document.getElementById(id);
    if (!modelEl || typeof modelEl.getObject3D !== 'function') {
      console.error(`العنصر بالـ id ${id} غير موجود أو لا يدعم getObject3D.`);
      return;
    }

    const internalRoomBounds = await getRoomDimensions();
    if (!internalRoomBounds) return;

    // التأكد من أن الـ Y تم حفظها بالفعل
    if (!modelEl.dataset.initialY) {
      // حفظ الـ Y الأولية للعنصر
      const initialPosition = modelEl.object3D.position.y;
      modelEl.dataset.initialY = initialPosition; // حفظ القيمة
    }

    const newModels = models.map((model) => {
      if (model.id === id) {
        const currentPosition = parsePosition(model.position);
        let newPosition = { ...currentPosition };

        // تعديل الإحداثيات بناءً على الاتجاه
        switch (direction) {
          case 'forward':
            newPosition.z -= 0.5;
            break;
          case 'backward':
            newPosition.z += 0.5;
            break;
          case 'left':
            newPosition.x -= 0.5;
            break;
          case 'right':
            newPosition.x += 0.5;
            break;
          default:
            break;
        }

        // الحصول على الـ mesh من عنصر A-Frame
        const mesh = modelEl.getObject3D("mesh");
        if (!mesh) {
          console.error(`لا يوجد mesh للعنصر بالـ id ${id}`);
          return model;
        }

        // حساب الـ Bounding Box
        const box = new AFRAME.THREE.Box3().setFromObject(mesh);
        const halfWidth = (box.max.x - box.min.x) / 2;
        const halfDepth = (box.max.z - box.min.z) / 2;

        // تقييد حركة x و z داخل حدود الغرفة
        newPosition.x = Math.min(
          Math.max(newPosition.x, internalRoomBounds.minX + halfWidth),
          internalRoomBounds.maxX - halfWidth
        );
        newPosition.z = Math.min(
          Math.max(newPosition.z, internalRoomBounds.minZ + wallThickness + halfDepth),
          internalRoomBounds.maxZ - halfDepth
        );

        // الحفاظ على الـ Y كما هي أول ما تم إضافته
        newPosition.y = parseFloat(modelEl.dataset.initialY);

        return { ...model, position: stringifyPosition(newPosition) };
      }
      return model;
    });

    setModels(newModels);
  } catch (error) {
    console.error('Error handling item move:', error);
  }
};

  
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
          <a-entity 
            gltf-model="/white-room1.glb" 
            position="0 0 0" 
            scale="1 1 1" 
            static-body
          ></a-entity>
          {models.map((model) => (
            <a-entity
              key={model.id}
              gltf-model={model.src}
              position={model.position}
              rotation={model.rotation}
              scale={model.scale}
              id={model.id}
              className="clickable-item"
              onClick={(evt) => handleModelClick(evt, model)}
              // bounding-box-helper="color: #00ff00"  // إظهار الـ bounding box باللون الأخضر
            />
          ))}

          <a-camera position="0 1.6 4">
            <a-cursor 
              raycaster="objects: .clickable-item, .clickable-floor; showLine: true" 
              material="opacity: 0.5"
            ></a-cursor>
          </a-camera>
        </a-scene>

        {selectedModelId !== null && menuPosition && (
          <div 
            className="absolute flex flex-col space-y-2 bg-gray-800 bg-opacity-70 p-2 rounded-lg"
            style={{
              left: menuPosition.left,
              top: menuPosition.top,
              transform: "translate(-50%, -150%)"
            }}
          >
            <div className="flex space-x-2">
              <FaTrash 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleRemoveItem(selectedModelId)} 
              />
              <FaCopy 
                className="text-white text-2xl cursor-pointer" 
                onClick={handleDuplicateItem} 
              />
              <FaExpand 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleScaleItem(selectedModelId, "increase")} 
              />
              <FaCompress 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleScaleItem(selectedModelId, "decrease")} 
              />
              <FaArrowUp 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleMoveItem(selectedModelId, "forward")} 
              />
              <FaArrowDown 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleMoveItem(selectedModelId, "backward")} 
              />
              <FaArrowLeft 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleMoveItem(selectedModelId, "left")} 
              />
              <FaArrowRight 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleMoveItem(selectedModelId, "right")} 
              />
              <FaUndo 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleRotateItem(selectedModelId, "left")} 
              />
              <FaRedo 
                className="text-white text-2xl cursor-pointer" 
                onClick={() => handleRotateItem(selectedModelId, "right")} 
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

