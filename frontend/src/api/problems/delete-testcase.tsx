import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
// POST
export const deleteTestCase = async (id: string) => {
  try {
    const result = await axiosInstance.post("/api/admin/delete-testcase/" + id);
    return result;
  } catch (error) {
    toast.error("failed to delete testcase");
  }
};
