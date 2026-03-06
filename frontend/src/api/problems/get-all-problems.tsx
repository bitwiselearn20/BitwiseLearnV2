import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllProblemData = async (
  statefn: any,
  admin: boolean = false,
) => {
  try {
    const getProblem = await axiosInstance.get(
      "/api/get-problem" + (admin ? "?q=valid" : ""),
    );
    statefn(getProblem.data);
  } catch (error) {
    toast.error("failed to get problem");
  }
};
