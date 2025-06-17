
// utils/positionUtils.js
import * as THREE from "three";

export const parsePosition = (positionStr) => {
  const [x, y, z] = positionStr.split(" ").map(Number);
  return { x, y, z };
};

export const stringifyPosition = (position) =>
  `${position.x} ${position.y} ${position.z}`;

export function projectToScreen(vec, camera) {
  const projected = vec.clone().project(camera);
  const x = (projected.x * 0.5 + 0.5) * window.innerWidth;
  const y = (-projected.y * 0.5 + 0.5) * window.innerHeight;
  return { x, y };
}
