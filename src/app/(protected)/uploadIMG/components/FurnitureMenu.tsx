
// components/FurnitureMenu.js
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/common/Searchbar";

export default function FurnitureMenu({
  items,
  onAddItem,
  onUploadClick,
  furnitureFileInputRef,
}) {
  return (
    <div>
      <SearchBar />
      <Button onClick={onUploadClick}>Upload Furniture</Button>
      <input
        type="file"
        ref={furnitureFileInputRef}
        style={{ display: "none" }}
        accept=".glb,.gltf"
      />
      <div className="flex flex-wrap">
        {items.map((item, idx) => (
          <div key={idx} onClick={() => onAddItem(item.src)}>
            <img src={item.thumbnail} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
