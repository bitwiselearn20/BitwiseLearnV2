import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const createInstitution = async (data: any) => {
  try {
    const createInstitution = await axiosInstance.post(
      "/api/institution/create-institution/",
      data,
    );

    return createInstitution.data;
  } catch (error) {
    toast.error("failed to create institution");
  }
};
