import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const updateProblemTestcase = async (id: string, data: any) => {
  try {
    const res = await axiosInstance.post(
      "/api/admin/update-testcase/" + id,
      data,
    );
  } catch (error) {
    toast.error("failed to update testcase");
  }
};
