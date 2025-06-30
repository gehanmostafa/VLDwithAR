// import { IArFile } from "@/types/types";
// import axios from "axios";

// import { useMutation } from "@tanstack/react-query";

// const fetchArFile = async (name :string): Promise<IArFile> => {
//     const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/ar-file-url`,
//         {
//             name
//         }


//     )
//     return response.data
// }

//  const  usePostArFile =()=>{

//  return   useMutation(
//  {mutationFn :fetchArFile}
//  )
// }


// export  default usePostArFile
import { IArFile } from "@/types/types";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

// ✅ This function uploads the model file to the backend
const uploadAndFetchArFile = async (file: File): Promise<IArFile> => {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    throw new Error("❌ NEXT_PUBLIC_BASE_URL is not defined.");
  }

  // 1️⃣ Upload the file to /api/models/upload
  const uploadForm = new FormData();
  uploadForm.append("file", file);

  const uploadResponse = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/models/upload`,
    uploadForm,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  const modelName = uploadResponse.data.modelName;
  if (!modelName) {
    throw new Error("❌ modelName not returned from upload response");
  }

  // 2️⃣ Fetch the AR file URL using /api/model-link/{modelName}
  const linkResponse = await axios.get<IArFile>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/model-link/${modelName}`
  );

  return linkResponse.data;
};

// ✅ Exported hook to use in frontend
const usePostArFile = () => {
  return useMutation({ mutationFn: uploadAndFetchArFile });
};

export default usePostArFile;
