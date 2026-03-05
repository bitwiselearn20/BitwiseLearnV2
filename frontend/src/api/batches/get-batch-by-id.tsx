import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getBatchData = async (statefn: any, paramId: string) => {
  try {
    const getBatch = await axiosInstance.get("/api/batch/" + paramId);
    statefn(getBatch.data);
  } catch (error) {
    toast.error("failed to get batch");
  }
};
