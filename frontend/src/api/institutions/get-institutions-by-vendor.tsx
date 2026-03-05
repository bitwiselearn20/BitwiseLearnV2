import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getVendorInstitutions = async (statefn: any, paramId: string) => {
  try {
    const getInstitution = await axiosInstance.get(
      "/api/institution/vendor-institutions/" + paramId,
    );
    statefn(getInstitution.data);
  } catch (error) {
    toast.error("failed to fetch vendor");
  }
};
