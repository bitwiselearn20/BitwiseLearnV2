import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getVendorDashboard = async (setVendor: any) => {
  try {
    const res = await axiosInstance.get("/api/vendor/dashboard");
    setVendor(res.data.data.vendor);
  } catch (err) {
    toast.error("failed to render dashboard");
  }
};
