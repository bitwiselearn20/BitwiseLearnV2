import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllBatches = async (stateFn: any, paramId: string) => {
  try {
    const data = await axiosInstance.get(
      "/api/batch/get-batches-for-institution/" + paramId,
    );
    stateFn(data.data);
    return data.data;
  } catch (error) {
    toast.error("failed to get batches");
  }
};
