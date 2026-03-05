import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllStats = async (stateFn: any) => {
  try {
    const data = await axiosInstance.post("/api/admin/get-admin-stats", {
      role: "admin",
    });
    stateFn(data.data.overview);
  } catch (error) {
    toast.error("error getting stats");
  }
};
