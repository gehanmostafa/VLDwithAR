"use client"
import React, { useState, useEffect } from "react";
import "aframe";
import "aframe-event-set-component";
import "aframe-physics-system";
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
// Drag-Drop Component (fallback to horizontal plane y=0 if no floor)
// ----------------------------------------------------------------------
if (typeof AFRAME !== "undefined") {
  if (!AFRAME.components["drag-drop"]) {
    AFRAME.registerComponent("drag-drop", {
      schema: {},
      init: function () {
        this.dragging = false;
        this.offset = new AFRAME.THREE.Vector3();
        this.cameraEl = null;
        // Save the object's original scale.
        this.originalScale = {
          x: this.el.object3D.scale.x,
          y: this.el.object3D.scale.y,
          z: this.el.object3D.scale.z,
        };
        // Determine the model’s bottom offset.
        this.initialBottomOffset = 0;
        // Bind event handlers.
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.el.addEventListener("mousedown", this.onMouseDown);
      },
      onMouseDown: function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        this.dragging = true;
        // Update the scale.
        this.originalScale = {
          x: this.el.object3D.scale.x,
          y: this.el.object3D.scale.y,
          z: this.el.object3D.scale.z,
        };
        // Pause camera look-controls.
        this.cameraEl = this.el.sceneEl.querySelector("[camera]");
        if (this.cameraEl && this.cameraEl.components["look-controls"]) {
          this.cameraEl.components["look-controls"].pause();
        }
        // Compute the offset.
        if (evt.detail && evt.detail.intersection) {
          this.offset.copy(this.el.object3D.position).sub(evt.detail.intersection.point);
          this.offset.y = 0;
        } else {
          this.offset.set(0, 0, 0);
        }
        // Calculate initial bottom offset using the model’s bounding box.
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
        // First, try to intersect with a floor element (if one exists).
        const floorEl = document.getElementById("floor");
        if (floorEl) {
          const intersects = raycaster.intersectObject(floorEl.object3D, true);
          if (intersects.length > 0) {
            intersectionPoint = intersects[0].point;
          }
        }
        // Fallback: use a horizontal plane at y=0.
        if (!intersectionPoint) {
          const plane = new AFRAME.THREE.Plane(new AFRAME.THREE.Vector3(0, 1, 0), 0);
          intersectionPoint = new AFRAME.THREE.Vector3();
          if (raycaster.ray.intersectPlane(plane, intersectionPoint) === null) {
            return;
          }
        }
        const targetPos = intersectionPoint.clone().add(this.offset);
        // Apply clamping if room boundaries are defined.
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
        // Reset scale (in case it was altered).
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
}

// ----------------------------------------------------------------------
// Bounding Box Helper Component
// ----------------------------------------------------------------------
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

const parsePosition = (positionStr) => {
  const [x, y, z] = positionStr.split(" ").map(Number);
  return { x, y, z };
};

const stringifyPosition = (position) => `${position.x} ${position.y} ${position.z}`;

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
    { src: "/julianne_3_seater_sofa_petrol_cotton.glb", thumbnail: "/storage.webp", name: "Sofa" },
    { src: "/quentin_2_seater_sofa_lemongrass_green.glb", thumbnail: "/Chair.avif", name: "sofa" },
    { src: "/akia_hand_woven_rug_160_x_230cm.glb", thumbnail: "/storage.webp", name: "carpet" },
  ];

  // --- Compute room boundaries once and store globally ---
  async function getRoomDimensions() {
    return new Promise((resolve, reject) => {
      const loader = new THREE.GLTFLoader();
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
    };
    setModels([...models, model]);
    // Removed auto-selection to prevent the menu from showing immediately
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

  // When the floor is clicked, compute a new cursor position.
  // Since the floor element is removed, the click is attached to the scene.
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

  // Attach the click listener to the scene.
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

  // ---------------------------------------------------------------
  // Enhanced Menu Positioning (menu aligned to the object's bottom center)
  // ---------------------------------------------------------------
  useEffect(() => {
    const EXTRA_Y_OFFSET = 15; // Adjust to nudge the menu downward
    let animationFrameId;
    const updateMenuPosition = () => {
      if (selectedModelId !== null) {
        const modelEl = document.getElementById(selectedModelId);
        const cameraEl = document.querySelector("a-camera");
        const cameraObj = cameraEl?.getObject3D("camera");
        if (modelEl && cameraObj) {
          // Compute the bounding box of the entire object.
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
          {/* The built floor element has been removed.
              Drag & drop and floor click interactions now use a horizontal plane at y=0 */}
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

        {selectedModelId !== null && menuPosition && (
          <div
            className="absolute p-2 bg-white bg-opacity-95 rounded shadow"
            style={{
              left: menuPosition.left,
              top: menuPosition.top,
              transform: "translate(-50%, 0%)",
            }}
          >
            <div className="flex flex-row items-center space-x-2">
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
  );
}
