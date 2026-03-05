import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getVendorData = async (statefn: any, paramId: string) => {
  try {
    const getVendor = await axiosInstance.get("/api/vendor/" + paramId);
    statefn(getVendor.data);
  } catch (error) {
    toast.error("failed to get all vendors");
  }
};
