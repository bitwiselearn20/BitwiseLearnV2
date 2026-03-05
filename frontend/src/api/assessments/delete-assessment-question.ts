import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const deleteAssessmentQuestion = async (questionId: string) => {
  try {
    const res = await axiosInstance.delete(
      `/api/assessments/delete-assessment-question/${questionId}`,
    );

    return res.data.data;
  } catch (error) {
    toast.error("error deleting question");
  }
};
