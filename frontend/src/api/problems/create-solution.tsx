import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export async function createSolution(id: string, data: any) {
  try {
    await axiosInstance.post("/api/admin/create-solution/" + id, data);
  } catch (error) {
    toast.error("failed to create solution");
  }
}
