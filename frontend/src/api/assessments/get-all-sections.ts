import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAssessmentSections = async (assessmentId: string) => {
  try {
    if (!assessmentId) return [];

    const res = await axiosInstance.get(
      `/api/assessments/get-all-sections/${assessmentId}`,
    );

    return res.data?.data ?? [];
  } catch (error) {
    toast.error("error creating section");
    return [];
  }
};
