import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllProblemCount = async (statefn: any) => {
  try {
    const getProblem = await axiosInstance.get("/api/get-problem/count/");
    statefn(getProblem.data.data);
  } catch (error) {
    toast.error("failed to get all problem count");
  }
};
