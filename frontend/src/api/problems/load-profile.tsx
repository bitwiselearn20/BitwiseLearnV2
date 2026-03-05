import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
export const loadProfile = async () => {
  try {
    const res = await axiosInstance.get("/api/problem/profile");
    return res.data;
  } catch (error) {
    toast.error("failed to load profile");
  }
};
