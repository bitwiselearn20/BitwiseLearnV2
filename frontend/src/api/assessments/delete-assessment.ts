import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const deleteAssessment = async (assessmentId: string) => {
  try {
    const res = await axiosInstance.delete(
      `/api/assessments/delete-assessment/${assessmentId}`,
    );
    return res.data.data;
  } catch (error) {
    toast.error("error deleting assessment");
  }
};
