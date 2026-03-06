import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getSectionQuestions = async (sectionId: string) => {
  try {
    const res = await axiosInstance.get(
      `/api/assessments/get-section-questions/${sectionId}`,
    );

    return res.data.data;
  } catch (error) {
    toast.error("error getting section questions");
  }
};
