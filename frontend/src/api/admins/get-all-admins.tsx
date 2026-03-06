import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllAdmins = async (stateFn: any) => {
  try {
    const data = await axiosInstance.get("/api/admin");
    stateFn(data.data);
  } catch (error) {
    toast.error("error fetching admins");
  }
};
