import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const createProblem = async (data: any) => {
  try {
    const createProblem = await axiosInstance.post(
      "/api/admin/create-problem/",
      data,
    );
  } catch (error) {
    toast.error("failed to create problem");
  }
};
