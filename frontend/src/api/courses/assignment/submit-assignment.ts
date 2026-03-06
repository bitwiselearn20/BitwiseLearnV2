import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const submitAssignment = async (id: string, payload: any) => {
  try {
    await axiosInstance.post(`/api/course/assignment/submit/${id}`, payload);
  } catch (error: any) {
    toast.error(error.message);
  }
};
