
// components/ControlMenu.js
import {
    FaTrash,
    FaCopy,
    FaArrowLeft,
    FaArrowRight,
    FaExpand,
    FaCompress,
  } from "react-icons/fa";
  
  export default function ControlMenu({
    onRotate,
    onScale,
    onDuplicate,
    onDelete,
    position,
  }) {
    if (!position) return null;
  
    return (
      <div style={{ position: "absolute", top: position.y, left: position.x }}>
        <button onClick={() => onRotate("left")}><FaArrowLeft /></button>
        <button onClick={() => onRotate("right")}><FaArrowRight /></button>
        <button onClick={() => onScale("increase")}><FaExpand /></button>
        <button onClick={() => onScale("decrease")}><FaCompress /></button>
        <button onClick={onDuplicate}><FaCopy /></button>
        <button onClick={onDelete}><FaTrash /></button>
      </div>
    );
  }
  