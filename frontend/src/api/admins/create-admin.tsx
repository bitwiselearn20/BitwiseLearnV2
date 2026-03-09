import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const createAdmin = async (data: any) => {
  const response = await axiosInstance.post(
    "/api/v1/admins/create-admin",
    data,
  );
  return response.data;
};
