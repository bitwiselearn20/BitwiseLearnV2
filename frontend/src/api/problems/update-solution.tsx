import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export async function updateSolution(id: string, data: any) {
  try {
    await axiosInstance.post("/api/admin/update-solution/" + id, data);
  } catch (error) {
    toast.error("failed to udpate problem solution");
  }
}
