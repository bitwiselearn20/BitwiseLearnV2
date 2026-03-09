import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllStats = async (stateFn: any) => {
  try {
    const data = await axiosInstance.get("/api/v1/reports/get-stats-count");
    stateFn(data.data.data);
  } catch (error) {
    toast.error("error getting stats");
  }
};
