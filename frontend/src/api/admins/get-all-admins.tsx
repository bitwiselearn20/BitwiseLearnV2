import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllAdmins = async (stateFn: any) => {
  try {
    const data = await axiosInstance.get("/api/v1/admins/get-all-admin");
    stateFn(data.data.data);
  } catch (error) {
    toast.error("error fetching admins");
  }
};
