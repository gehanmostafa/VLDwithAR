
// components/aframe/AframeComponents.js
"use client";
import * as THREE from "three";
import "aframe";

if (typeof self === "undefined") global.self = global;

if (typeof AFRAME !== "undefined") {
  if (!AFRAME.components["drag-drop"]) {
    AFRAME.registerComponent("drag-drop", {
      // drag-drop logic
    });
  }

  if (!AFRAME.components["bounding-box-helper"]) {
    AFRAME.registerComponent("bounding-box-helper", {
      // bounding-box-helper logic
    });
  }
}
