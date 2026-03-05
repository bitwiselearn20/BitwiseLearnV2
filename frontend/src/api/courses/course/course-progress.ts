import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const markAsDone = async (id: string) => {
  try {
    const res = await axiosInstance.post("/api/course/change-status/" + id, {
      currentStatus: "DONE",
    });

    return res.data;
  } catch (error) {
    toast.error("failed to mark progress");
  }
};
export const markAsUnDone = async (id: string) => {
  try {
    const res = await axiosInstance.post("/api/course/change-status/" + id, {
      currentStatus: "UN_DONE",
    });

    return res.data;
  } catch (error) {
    toast.error("failed to mark progress");
  }
};
