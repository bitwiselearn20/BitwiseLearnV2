import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const updateProblemTemplate = async (
  id: string,
  data: any,
  templateMap: any,
) => {
  try {
    const res = await axiosInstance.post(
      "/api/admin/update-template/" + id,
      data,
    );
    templateMap[data.currentLanguage] = res.data;
  } catch (error) {
    toast.error("failed to update problem template");
  }
};
