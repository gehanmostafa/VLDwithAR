
"use client";
import useGetProducts from '@/hooks/useGetProducts'
import usePostArFile from'@/hooks/usePostArFile'
import React, { useState, useEffect, useRef } from "react";
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
    FaQrcode,
} from "react-icons/fa";
// Using MdStraighten as a substitute for GiRuler.
import { MdStraighten } from "react-icons/md";
import SearchBar from "@/components/common/Searchbar";
import { Button } from "@/components/ui/button";

if (typeof self === "undefined") {
    global.self = global;
}

// ----------------------------------------------------------------------
// Register A-Frame components: drag-drop and bounding-box-helper
// ----------------------------------------------------------------------
if (typeof AFRAME !== "undefined") {
    if (!AFRAME.components["drag-drop"]) {
        AFRAME.registerComponent("drag-drop", {
            schema: {},
            init: function () {
                this.dragging = false;
                this.offset = new AFRAME.THREE.Vector3();
                this.cameraEl = null;
                // Save original scale of the object.
                this.originalScale = {
                    x: this.el.object3D.scale.x,
                    y: this.el.object3D.scale.y,
                    z: this.el.object3D.scale.z,
                };
                // Set initial bottom offset.
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
                // Update scale.
                this.originalScale = {
                    x: this.el.object3D.scale.x,
                    y: this.el.object3D.scale.y,
                    z: this.el.object3D.scale.z,
                };
                // Pause camera controls.
                this.cameraEl = this.el.sceneEl.querySelector("[camera]");
                if (this.cameraEl && this.cameraEl.components["look-controls"]) {
                    this.cameraEl.components["look-controls"].pause();
                }
                // Calculate offset.
                if (evt.detail && evt.detail.intersection) {
                    this.offset.copy(this.el.object3D.position).sub(evt.detail.intersection.point);
                    this.offset.y = 0;
                } else {
                    this.offset.set(0, 0, 0);
                }
                // Calculate initial bottom offset based on object's bounding box.
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
                // Try to intersect with the floor.
                const floorEl = document.getElementById("floor");
                if (floorEl) {
                    const intersects = raycaster.intersectObject(floorEl.object3D, true);
                    if (intersects.length > 0) {
                        intersectionPoint = intersects[0].point;
                    }
                }
                // If no floor, use a horizontal plane at y=0.
                if (!intersectionPoint) {
                    const plane = new AFRAME.THREE.Plane(new AFRAME.THREE.Vector3(0, 1, 0), 0);
                    intersectionPoint = new AFRAME.THREE.Vector3();
                    if (raycaster.ray.intersectPlane(plane, intersectionPoint) === null) {
                        return;
                    }
                }
                const targetPos = intersectionPoint.clone().add(this.offset);
                // Apply room boundaries if defined.
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
                // Maintain the original y position.
                targetPos.y = this.el.object3D.position.y;
                this.el.setAttribute("position", `${targetPos.x} ${targetPos.y} ${targetPos.z}`);
                // Reset scale.
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

    // Updated bounding-box-helper using THREE.Box3Helper
    if (!AFRAME.components["bounding-box-helper"]) {
        AFRAME.registerComponent("bounding-box-helper", {
            schema: {
                // Default color set to bastel green.
                color: { type: "color", default: "#4CAF50" },
            },
            init: function () {
                // Create a Box3 to compute the object's bounding box.
                this.box = new THREE.Box3();
                // Create a Box3Helper that visualizes the computed box.
                this.helper = new THREE.Box3Helper(this.box, this.data.color);
                this.el.sceneEl.object3D.add(this.helper);
            },
            tick: function () {
                if (this.helper) {
                    // Ensure the object's world matrices are up-to-date.
                    this.el.object3D.updateMatrixWorld(true);
                    // Recompute the bounding box.
                    this.box.setFromObject(this.el.object3D);
                    // Display helper as long as the box is not empty.
                    this.helper.visible = !this.box.isEmpty();
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

// Utility functions to parse and stringify positions.
const parsePosition = (positionStr) => {
    const [x, y, z] = positionStr.split(" ").map(Number);
    return { x, y, z };
};
const stringifyPosition = (position) =>
    `${position.x} ${position.y} ${position.z}`;

// Helper: Project a 3D vector to screen coordinates.
function projectToScreen(vec, camera) {
    const projected = vec.clone().project(camera);
    const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
    return { x, y };
}

// ----------------------------------------------------------------------
// Main component Home
// ----------------------------------------------------------------------

export default function Home() {

    const [modelSrc, setModelSrc] = useState(null);
    const [selectedModelId, setSelectedModelId] = useState(null);
    const [models, setModels] = useState([]);
    const [modelId, setModelId] = useState(0);
    const [cursorPos, setCursorPos] = useState("0 1 0");
    const [menuPosition, setMenuPosition] = useState(null);
    const { data, isLoading, error } = useGetProducts()
     const {mutate}= usePostArFile()
    console.log(data)
  

    // State for the dimensions popup container and text.
    const [dimContainerPos, setDimContainerPos] = useState(null);
    const [dimensionsText, setDimensionsText] = useState({
        width: "",
        height: "",
        depth: "",
    });
    const [showDimensionPopup, setShowDimensionPopup] = useState(false);

    const menuRef = useRef(null);
    const furnitureFileInputRef = useRef(null);

    useEffect(() => {
        const savedModelSrc = localStorage.getItem("modelSrc");
        console.log("Loaded model:", savedModelSrc);
        if (savedModelSrc) {
            setModelSrc(savedModelSrc);
        }
    }, []);

    // Handler for uploading custom furniture.
    const handleFurnitureUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            const model = {
                id: modelId.toString(),
                src: url,
                position: cursorPos,
                scale: "1 1 1",
                rotation: "0 0 0",
            };
            setModels([...models, model]);
            setModelId(modelId + 1);
        }
    };

    const handleFurnitureButtonClick = () => {
        if (furnitureFileInputRef.current) {
            furnitureFileInputRef.current.click();
        }
    };

    const items = [
        { src: "/Corner sofa.glb", thumbnail: "/Blue Sofa.png", name: "Blue Sofa" },
        { src: "/Brown Table.glb", thumbnail: "/Brown Table.png", name: "Brown Table" },
        { src: "/bed-13.glb", thumbnail: "/bed-13.png", name: "Bed" },
        { src: "/claudia_3_seater_sofa_peacock_blue_velvet.glb", thumbnail: "/Blue Seater.png", name: "Seater" },
        { src: "/designer_chair_01c.glb", thumbnail: "/Green Chair.png", name: "Chair" },
        { src: "/helena_large_corner_sofa_plush_turmeric_velvet.glb", thumbnail: "/Corner Sofa.png", name: "Corner Sofa" },
        { src: "/sofa_chair.glb", thumbnail: "/sofa_chair.png", name: "sofaChair" },
        { src: "/akia_hand_woven_rug_160_x_230cm.glb", thumbnail: "/Hand Rug.png", name: "Cupboard" },
        { src: "/kameko_coffee_table.glb", thumbnail: "/Coffee Table.png", name: "Coffee Table" },
    ];

    // --- Compute room boundaries ---
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
                (xhr) => {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                (error) => {
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

    const handleAddItem = (itemSrc) => {
        const model = {
            id: modelId.toString(),
            src: itemSrc,
            position: cursorPos,
            scale: "1 1 1",
            rotation: "0 0 0",
        };
        setModels([...models, model]);
        setSelectedModelId(null);
        setMenuPosition(null);
        setShowDimensionPopup(false);
        setModelId(modelId + 1);
    };

    const handleRemoveItem = (id) => {
        const newModels = models.filter((model) => model.id !== id);
        setModels(newModels);
        setSelectedModelId(null);
        setMenuPosition(null);
        setShowDimensionPopup(false);
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
            const newModel = { ...selectedItem, id: modelId.toString() };
            const currentPosition = selectedItem.position.split(" ").map(Number);
            const newPosition = `${currentPosition[0] + 1} ${currentPosition[1]} ${currentPosition[2]}`;
            newModel.position = newPosition;
            setModels([...models, newModel]);
            setSelectedModelId(newModel.id);
            setModelId(modelId + 1);
        }
    };

    const handleFloorClick = (evt) => {
        let point = null;
        if (evt.detail && evt.detail.intersection) {
            point = evt.detail.intersection.point;
        } else {
            const mouse = new THREE.Vector2();
            mouse.x = (evt.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1;
            const sceneEl = document.querySelector("a-scene");
            const camera = sceneEl.camera;
            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);
            const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
            point = new THREE.Vector3();
            raycaster.ray.intersectPlane(plane, point);
        }
        if (point) {
            const newPos = `${point.x.toFixed(2)} ${point.y.toFixed(2)} ${point.z.toFixed(2)}`;
            setCursorPos(newPos);
        }
        setSelectedModelId(null);
        setMenuPosition(null);
        setShowDimensionPopup(false);
    };

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

    // Clear existing bounding boxes from all models.
    const clearAllBoundingBoxes = () => {
        models.forEach((model) => {
            const modelEl = document.getElementById(model.id);
            if (modelEl && modelEl.hasAttribute("bounding-box-helper")) {
                modelEl.removeAttribute("bounding-box-helper");
            }
        });
    };

    // When clicking a model, clear any active dimension popup and bounding boxes.
    const handleModelClick = (evt, model) => {
        evt.stopPropagation();
        clearAllBoundingBoxes();
        setSelectedModelId(model.id);
        setShowDimensionPopup(false);
    };

    // ------------------------------
    // Update control menu position based on the model’s bounding box center.
    useEffect(() => {
        let animationFrameId;
        const updateMenuPosition = () => {
            if (selectedModelId !== null) {
                const modelEl = document.getElementById(selectedModelId);
                const cameraEl = document.querySelector("a-camera");
                const cameraObj = cameraEl && cameraEl.getObject3D("camera");
                if (modelEl && cameraObj) {
                    const box = new THREE.Box3().setFromObject(modelEl.object3D);
                    const center = new THREE.Vector3();
                    box.getCenter(center);
                    center.project(cameraObj);
                    let x = (center.x * 0.5 + 0.5) * window.innerWidth;
                    let y = (-center.y * 0.5 + 0.5) * window.innerHeight;
                    const margin = 20;
                    x = Math.max(margin, Math.min(x, window.innerWidth - margin));
                    y = Math.max(margin, Math.min(y, window.innerHeight - margin));
                    if (menuRef.current) {
                        const { offsetWidth: menuWidth, offsetHeight: menuHeight } = menuRef.current;
                        if (x + menuWidth / 2 > window.innerWidth - margin) {
                            x = window.innerWidth - margin - menuWidth / 2;
                        }
                        if (x - menuWidth / 2 < margin) {
                            x = margin + menuWidth / 2;
                        }
                        if (y + menuHeight / 2 > window.innerHeight - margin) {
                            y = window.innerHeight - margin - menuHeight / 2;
                        }
                        if (y - menuHeight / 2 < margin) {
                            y = margin + menuHeight / 2;
                        }
                    }
                    setMenuPosition({ left: x, top: y });
                }
            }
            animationFrameId = requestAnimationFrame(updateMenuPosition);
        };
        updateMenuPosition();
        return () => cancelAnimationFrame(animationFrameId);
    }, [selectedModelId]);

    // ------------------------------
    // Update dimension popup container to follow the model.
    useEffect(() => {
        let animId;
        const updateDimPopupPosition = () => {
            if (showDimensionPopup && selectedModelId) {
                const modelEl = document.getElementById(selectedModelId);
                const cameraEl = document.querySelector("a-camera");
                const cameraObj = cameraEl && cameraEl.getObject3D("camera");
                if (modelEl && cameraObj) {
                    // Compute the top-center of the model's bounding box.
                    const box = new THREE.Box3().setFromObject(modelEl.object3D);
                    const topCenter = new THREE.Vector3(
                        (box.min.x + box.max.x) / 2,
                        box.max.y,
                        (box.min.z + box.max.z) / 2
                    );
                    const proj = projectToScreen(topCenter, cameraObj);
                    // Position the container slightly above the top-center.
                    setDimContainerPos({ left: proj.x, top: proj.y - 40 });
                    // Update dimensions text using the mesh bounding box.
                    const mesh = modelEl.getObject3D("mesh");
                    if (mesh) {
                        const meshBox = new THREE.Box3().setFromObject(mesh);
                        const min = meshBox.min;
                        const max = meshBox.max;
                        setDimensionsText({
                            width: `Width: ${(max.x - min.x).toFixed(2)}`,
                            height: `Height: ${(max.y - min.y).toFixed(2)}`,
                            depth: `Length: ${(max.z - min.z).toFixed(2)}`,
                        });
                    }
                }
            }
            animId = requestAnimationFrame(updateDimPopupPosition);
        };
        updateDimPopupPosition();
        return () => cancelAnimationFrame(animId);
    }, [showDimensionPopup, selectedModelId, models]);

    // When the Dimensions button is clicked, activate the popup and add the bounding-box-helper.
    const handleShowDimensions = (id) => {
        setShowDimensionPopup(true);
        clearAllBoundingBoxes();
        const modelEl = document.getElementById(id);
        if (modelEl && !modelEl.hasAttribute("bounding-box-helper")) {
            // Add the bounding box helper to the model.
            modelEl.setAttribute("bounding-box-helper", "");
        }
    };

    // Ensure that the model is positioned above the ground.
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
                modelEl.dataset.initialY = modelEl.object3D.position.y;
            }
            const newModels = models.map((model) => {
                if (model.id === id) {
                    const currentPosition = model.position.split(" ").map(Number);
                    let newPosition = { x: currentPosition[0], y: currentPosition[1], z: currentPosition[2] };
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
                    if (!mesh) return model;
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
                    return { ...model, position: `${newPosition.x} ${newPosition.y} ${newPosition.z}` };
                }
                return model;
            });
            setModels(newModels);
        } catch (error) {
            console.error("Error moving item:", error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen px-5 py-5 relative">
            <SearchBar />
            <div className="flex gap-6 mt-5">
                {/* Sidebar for items */}
                <div className="grid grid-cols-1 gap-4 w-full md:w-1/4 max-h-[77vh] overflow-y-auto bg-white custom-scrollbar p-4 rounded-lg shadow-lg">
                    <div className="my-3">
                        <Button
                            onClick={handleFurnitureButtonClick}
                            className="bg-mainbackground text-white px-28 py-3 rounded hover:bg-mainbackground/10 transition"
                        >
                            Upload Custom Furniture
                        </Button>
                        <input
                            type="file"
                            accept=".glb,.gltf"
                            onChange={handleFurnitureUpload}
                            ref={furnitureFileInputRef}
                            style={{ display: "none" }}
                        />
                    </div>
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-200 p-3 rounded-lg cursor-pointer hover:scale-105 transition transform hover:shadow-md"
                            onClick={() => mutate(item.name, {
                                onSuccess: (data) => {
                                  handleAddItem(data.arFileUrl); 
                                },
                              })}
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="w-full h-24 object-contain rounded-md"
                            />
                            <p className="text-center text-gray-800 mt-2 font-medium">{item.name}</p>
                        </div>
                    ))}
                </div>

                {/* Main 3D scene */}
                <div className="flex-1 relative">
                    {!modelSrc ? (
                        <img
                            src="/main2Home.jpg"
                            alt="Main Furniture"
                            className="w-full h-[500px] object-cover rounded-lg border border-gray-300"
                        />
                    ) : (
                        <a-scene embedded physics className="w-full h-[600px] rounded-lg shadow-lg">
                            <a-entity gltf-model={modelSrc} position="0 0 0" scale="1 1 1" static-body></a-entity>
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
                                    scale="2.5 2.5 2.5"
                                ></a-cursor>
                            </a-camera>
                        </a-scene>
                    )}

                    {/* Control Menu for selected model */}
                    {selectedModelId !== null && menuPosition && (
                        <div
                            ref={menuRef}
                            className="absolute bg-white bg-opacity-85 rounded shadow grid grid-cols-6 gap-2 p-2"
                            style={{
                                width: "310px",
                                height: "100px",
                                left: menuPosition.left,
                                top: menuPosition.top,
                                transform: "translate(-80%, -100%)",
                            }}
                        >
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleRemoveItem(selectedModelId)}
                            >
                                <FaTrash className="text-xs" />
                                <span className="text-xs">Delete</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={handleDuplicateItem}
                            >
                                <FaCopy className="text-xs" />
                                <span className="text-xs">Copy</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleScaleItem(selectedModelId, "increase")}
                            >
                                <FaExpand className="text-xs" />
                                <span className="text-xs">Enlarge</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleScaleItem(selectedModelId, "decrease")}
                            >
                                <FaCompress className="text-xs" />
                                <span className="text-xs">Shrink</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleMoveItem(selectedModelId, "forward")}
                            >
                                <FaArrowUp className="text-xs" />
                                <span className="text-xs">Up</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleMoveItem(selectedModelId, "backward")}
                            >
                                <FaArrowDown className="text-xs" />
                                <span className="text-xs">Down</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleMoveItem(selectedModelId, "left")}
                            >
                                <FaArrowLeft className="text-xs" />
                                <span className="text-xs">Left</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleMoveItem(selectedModelId, "right")}
                            >
                                <FaArrowRight className="text-xs" />
                                <span className="text-xs">Right</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleRotateItem(selectedModelId, "left")}
                            >
                                <FaUndo className="text-xs" />
                                <span className="text-xs">Rotate L</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleRotateItem(selectedModelId, "right")}
                            >
                                <FaRedo className="text-xs" />
                                <span className="text-xs">Rotate R</span>
                            </button>
                            <button
                                className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none"
                                onClick={() => handleShowDimensions(selectedModelId)}
                            >
                                <MdStraighten className="text-xs" />
                                <span className="text-xs">Dimensions</span>
                            </button>
                            <button className="flex flex-col items-center justify-center hover:text-blue-600 focus:outline-none">
                                <span className="text-xs">AR View</span>
                            </button>
                        </div>
                    )}

                    {/* Dimension Popup Container */}
                    {showDimensionPopup && dimContainerPos && (
                        <div
                            style={{
                                position: "absolute",
                                left: dimContainerPos.left,
                                top: dimContainerPos.top,
                                transform: "translate(-500%, -50%)",
                                background: "#f5f5f5",


                                padding: "3px 6px",
                                borderRadius: "6px",
                                boxShadow: "0px 2px 4px rgba(0,0,0,0.2)",
                                textAlign: "left",
                                opacity: ".9",
                            }}
                        >
                            <div
                                style={{
                                    borderBottom: "1px solid #ccc",
                                    paddingBottom: "4px",
                                    marginBottom: "4px",
                                }}
                            >
                                <span style={{ fontSize: "0.6rem", color: "#696969" }}>
                                    {dimensionsText.width}
                                </span>
                            </div>
                            <div
                                style={{
                                    borderBottom: "1px solid #ccc",
                                    paddingBottom: "4px",
                                    marginBottom: "4px",
                                }}
                            >
                                <span style={{ fontSize: "0.6rem", color: "#696969" }}>
                                    {dimensionsText.height}
                                </span>
                            </div>
                            <div>
                                <span style={{ fontSize: "0.6rem", color: "#696969" }}>
                                    {dimensionsText.depth}
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Optionally, add your QR Code overlay for AR view here */}
        </div>
    );
}
