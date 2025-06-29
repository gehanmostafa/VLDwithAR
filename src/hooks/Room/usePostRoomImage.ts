// hooks/usePostRoomImage.ts
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface I3DResponse {
  modelUrl: string;

}

interface IRequestPayload {
  mode: string; 
  image: string; 
}

const sendRoomImage = async (payload: IRequestPayload): Promise<I3DResponse> => {
  const response = await axios.post(
    "https://runtime.sagemaker.eu-north-1.amazonaws.com/endpoints/hunyuan3d-endpoint-1750943609/invocations",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
        // "Authorization": `Bearer YOUR_TOKEN`, 
      },
    }
  );

  return response.data;
};

const usePostRoomImage = () => {
  return useMutation({
    mutationFn: sendRoomImage,
  });
};

export default usePostRoomImage;
