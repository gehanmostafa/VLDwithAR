
// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import FurnitureItem from "@/components/common/FurnitureItem"


// export default function FurnitureMenu({
//   items,
//   onAddItem,
//   onUploadClick,
//   furnitureFileInputRef,
//   mutate,
//   handleFurnitureUpload,
//   setMenuPosition,
//   setSelectedItem,
// }) {
//   const [filterText, setFilterText] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
 

//   const handleItemClick = (item) => {
//     mutate(item.name, {
//       onSuccess: (data) => {
//         onAddItem(data.arFileUrl);
//         setMenuPosition({ x: 0, y: 0 });
//         setSelectedItem({
//           ...item,
//           arFileUrl: data?.arFileUrl,
//         });

//         console.log("✅ Item selected and AR URL set:", {
//           ...item,
//           arFileUrl: data?.arFileUrl,
//         });
//       },
//     });
//   };

//   // فلترة وترتيب
//   const filteredItems = items
//     .filter((item) =>
//       item.name.toLowerCase().includes(filterText.toLowerCase())
//     )
//     .sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//   return (
//     <div className="px-2">
//       {/* Search + Sort */}
//       <div className="flex flex-col items-center gap-6 max-w-[400px] mx-auto">
//         <input
//           type="text"
//           placeholder="Search furniture..."
//           value={filterText}
//           onChange={(e) => setFilterText(e.target.value)}
//           className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 text-sm"
//         />
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm"
//         >
//           <option value="asc">Sort: A to Z</option>
//           <option value="desc">Sort: Z to A</option>
//         </select>
//       </div>

//       <div className="max-h-[77vh] overflow-y-auto bg-white custom-scrollbar  p-6 sm:p-8 rounded-2xl shadow-xl">
//         {/* زر الرفع */}
//         <div className="my-3 flex justify-center">
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Button
//               onClick={onUploadClick}
//               className="bg-mainbackground text-white px-6 sm:px-16 md:px-14 py-3 rounded hover:bg-mainbackground/10 transition text-sm sm:text-base"
//             >
//               Upload Furniture
//             </Button>
//           </motion.div>
//           <input
//             type="file"
//             accept=".glb,.gltf"
//             onChange={handleFurnitureUpload}
//             ref={furnitureFileInputRef}
//             style={{ display: "none" }}
//           />
//         </div>

//         {/* العناصر */}
//         <div className="flex flex-col items-center gap-6  p-9 ">
//           {filteredItems.map((item, index) => (
//             <FurnitureItem
//               key={item._id}
//               item={item}
//               index={index}
//               onClick={handleItemClick}
              
//             />
//           ))}


//         </div>
//       </div>
//     </div>

//   );
// }
// "use client";
// import { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import FurnitureItem from "@/components/common/FurnitureItem";

// export default function FurnitureMenu({
//   items,
//   onAddItem,
//   mutate,
//   setMenuPosition,
//   setSelectedItem,
// }) {
//   const [filterText, setFilterText] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const furnitureFileInputRef = useRef(null);

//   const handleUploadClick = () => {
//     furnitureFileInputRef.current?.click();
//   };

//   const handleFurnitureUpload = async (event) => {
//     const file = event.target.files?.[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);

//     try {
//       const response = await fetch(
//         "https://api.virtualinteriordesign.click/api/models/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );

//       if (!response.ok) {
//         console.error("❌ Upload failed with status", response.status);
//         return;
//       }

//       const result = await response.json();
//       console.log("✅ Uploaded:", result);

//       if (result.arFile) {
//         const proxyUrl = `/api/proxy?url=${encodeURIComponent(result.arFile)}`;
//         onAddItem(proxyUrl); // Load in scene via proxy to avoid CORS
//         if (mutate) await mutate(); // Optional: refresh menu list
//       }
//     } catch (err) {
//       console.error("❌ Upload error:", err.message);
//     }
//   };

//   const handleItemClick = (item) => {
//     mutate(item.name, {
//       onSuccess: (data) => {
//         const proxyUrl = `/api/proxy?url=${encodeURIComponent(data?.arFileUrl)}`;
//         onAddItem(proxyUrl);
//         setMenuPosition({ x: 0, y: 0 });
//         setSelectedItem({
//           ...item,
//           arFileUrl: data?.arFileUrl,
//         });
//         console.log("✅ Selected item:", item.name);
//       },
//     });
//   };

//   const filteredItems = items
//     .filter((item) => item.name.toLowerCase().includes(filterText.toLowerCase()))
//     .sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//   return (
//     <div className="px-2">
//       {/* Filter + Sort */}
//       <div className="flex flex-col items-center gap-6 max-w-[400px] mx-auto">
//         <input
//           type="text"
//           placeholder="Search furniture..."
//           value={filterText}
//           onChange={(e) => setFilterText(e.target.value)}
//           className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md text-sm"
//         />
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm"
//         >
//           <option value="asc">Sort: A to Z</option>
//           <option value="desc">Sort: Z to A</option>
//         </select>
//       </div>

//       {/* Upload Button */}
//       <div className="my-3 flex justify-center">
//         <motion.div whileHover={{ scale: 1.1 }}>
//           <Button
//             onClick={handleUploadClick}
//             className="bg-mainbackground text-white px-6 sm:px-16 md:px-14 py-3 rounded hover:bg-mainbackground/10 transition text-sm sm:text-base"
//           >
//             Upload Furniture
//           </Button>
//         </motion.div>
//         <input
//           type="file"
//           accept=".glb,.gltf"
//           onChange={handleFurnitureUpload}
//           ref={furnitureFileInputRef}
//           style={{ display: "none" }}
//         />
//       </div>

//       {/* Furniture List */}
//       <div className="max-h-[77vh] overflow-y-auto bg-white custom-scrollbar p-6 sm:p-8 rounded-2xl shadow-xl">
//         <div className="flex flex-col items-center gap-6 p-9">
//           {filteredItems.map((item, index) => (
//             <FurnitureItem
//               key={item._id}
//               item={item}
//               index={index}
//               onClick={handleItemClick}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client";
// import { useState, useRef } from "react";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import FurnitureItem from "@/components/common/FurnitureItem";

// export default function FurnitureMenu({
//   items,
//   onAddItem,
//   mutate,
//   setSelectedItem,
// }) {
//   const [filterText, setFilterText] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const fileInputRef = useRef(null);

//   const handleUploadClick = () => {
//     fileInputRef.current?.click();
//   };

//   const handleFurnitureUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     try {
//       const formData = new FormData();
//       formData.append("file", file);

//       // Step 1: Upload model
//       const uploadRes = await fetch("https://api.virtualinteriordesign.click/api/models/upload", {
//         method: "POST",
//         body: formData,
//       });

//       const uploadData = await uploadRes.json();
//       const modelName = uploadData?.modelName;

//       if (!modelName) throw new Error("No model name returned from upload");

//       // Step 2: Get AR URL
//       const linkRes = await fetch(`https://api.virtualinteriordesign.click/api/model-link/${modelName}`);
//       const linkData = await linkRes.json();

//       let arFileUrl = linkData?.arFile;
//       if (!arFileUrl) throw new Error("No AR file URL returned");

//       // Always use https to avoid CORS
//       arFileUrl = arFileUrl.replace("http://", "https://");

//       const uploadedItem = {
//         _id: Date.now().toString(),
//         name: file.name,
//         arFileUrl,
//       };

//       // Add model to scene
//       onAddItem(arFileUrl);
//       setSelectedItem(uploadedItem);

//       console.log("✅ Uploaded item added:", uploadedItem);
//     } catch (err) {
//       console.error("❌ Upload failed:", err);
//       alert("Upload failed: " + err.message);
//     }
//   };

//   const handleItemClick = (item) => {
//     mutate(item.name, {
//       onSuccess: (data) => {
//         const arFileUrl = data?.arFileUrl?.replace("http://", "https://");
//         onAddItem(arFileUrl);
//         setSelectedItem({ ...item, arFileUrl });
//         console.log("✅ Selected:", item);
//       },
//     });
//   };

//   const filteredItems = items
//     .filter((item) =>
//       item.name.toLowerCase().includes(filterText.toLowerCase())
//     )
//     .sort((a, b) =>
//       sortOrder === "asc"
//         ? a.name.localeCompare(b.name)
//         : b.name.localeCompare(a.name)
//     );

//   return (
//     <div className="px-2">
//       {/* Search & Sort */}
//       <div className="flex flex-col items-center gap-6 max-w-[400px] mx-auto">
//         <input
//           type="text"
//           placeholder="Search furniture..."
//           value={filterText}
//           onChange={(e) => setFilterText(e.target.value)}
//           className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
//         />
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm"
//         >
//           <option value="asc">Sort: A to Z</option>
//           <option value="desc">Sort: Z to A</option>
//         </select>
//       </div>

//       {/* Upload */}
//       <div className="my-4 flex justify-center">
//         <motion.div whileHover={{ scale: 1.1 }}>
//           <Button
//             onClick={handleUploadClick}
//             className="bg-mainbackground text-white px-6 sm:px-16 py-3 rounded hover:bg-mainbackground/80 transition text-sm sm:text-base"
//           >
//             Upload Furniture
//           </Button>
//         </motion.div>
//         <input
//           type="file"
//           accept=".glb,.gltf"
//           onChange={handleFurnitureUpload}
//           ref={fileInputRef}
//           style={{ display: "none" }}
//         />
//       </div>

//       {/* Furniture List */}
//       <div className="max-h-[77vh] overflow-y-auto bg-white custom-scrollbar p-6 sm:p-8 rounded-2xl shadow-xl">
//         <div className="flex flex-col items-center gap-6 p-9">
//           {filteredItems.map((item, index) => (
//             <FurnitureItem
//               key={item._id}
//               item={item}
//               index={index}
//               onClick={handleItemClick}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import FurnitureItem from "@/components/common/FurnitureItem";
import usePostArFile from "@/hooks/usePostArFile";

export default function FurnitureMenu({
  items,
  onAddItem,
  setSelectedItem,
}) {
  const [filterText, setFilterText] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const fileInputRef = useRef(null);
  const { mutate } = usePostArFile();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFurnitureUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    mutate(file, {
      onSuccess: (data) => {
        let arFileUrl = data?.arFile?.replace("http://", "https://");
        if (!arFileUrl) {
          console.error("❌ No AR URL returned from backend");
          return;
        }
        const uploadedItem = {
          _id: Date.now().toString(),
          name: file.name,
          arFileUrl,
        };

        // Add to scene & select
        onAddItem(arFileUrl);
        setSelectedItem(uploadedItem);
        console.log("✅ Uploaded and added:", uploadedItem);
      },
      onError: (err) => {
        console.error("❌ Upload failed:", err);
      },
    });
  };

  const handleItemClick = (item) => {
    mutate(item.name, {
      onSuccess: (data) => {
        const arFileUrl = data?.arFileUrl?.replace("http://", "https://");
        if (!arFileUrl) {
          console.error("❌ Backend returned no AR URL");
          return;
        }
        onAddItem(arFileUrl);
        setSelectedItem({ ...item, arFileUrl });
        console.log("✅ Added existing item to scene:", item);
      },
      onError: (err) => {
        console.error("❌ Fetch AR URL failed:", err);
      },
    });
  };

  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(filterText.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="px-2">
      {/* Search & Sort */}
      <div className="flex flex-col items-center gap-6 max-w-[400px] mx-auto">
        <input
          type="text"
          placeholder="Search furniture..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full sm:w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="asc">Sort: A to Z</option>
          <option value="desc">Sort: Z to A</option>
        </select>
      </div>

      {/* Upload Button */}
      <div className="my-4 flex justify-center">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Button
            onClick={handleUploadClick}
            className="bg-mainbackground text-white px-6 sm:px-16 py-3 rounded hover:bg-mainbackground/80 transition text-sm sm:text-base"
          >
            Upload Furniture
          </Button>
        </motion.div>
        <input
          type="file"
          accept=".glb,.gltf"
          onChange={handleFurnitureUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
      </div>

      {/* Furniture List */}
      <div className="max-h-[77vh] overflow-y-auto bg-white custom-scrollbar p-6 sm:p-8 rounded-2xl shadow-xl">
        <div className="flex flex-col items-center gap-6 p-9">
          {filteredItems.map((item, index) => (
            <FurnitureItem
              key={item._id}
              item={item}
              index={index}
              onClick={handleItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
