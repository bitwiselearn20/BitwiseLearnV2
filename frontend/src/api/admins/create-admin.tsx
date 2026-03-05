import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const createAdmin = async (data: any) => {
  try {
    const createAdmin = await axiosInstance.post(
      "/api/admin/admins/create-admin/",
      data,
    );
  } catch (error) {
    toast.error("error creating admin");
  }
};
