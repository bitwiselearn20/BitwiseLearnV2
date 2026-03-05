import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const createTopic = async (id: string, data: any) => {
  try {
    await axiosInstance.post("/api/admin/create-topic/" + id, data);
  } catch (error) {
    toast.error("failed to create topic");
  }
};
