import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAssessmentById = async (assessmentId: string) => {
  try {
    const res = await axiosInstance.get(
      `/api/assessments/get-assessment-by-id/${assessmentId}`,
    );

    return res.data;
  } catch (error) {
    toast.error("error getting  assessments");
  }
};
