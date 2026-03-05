import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

interface UpdateAssessmentQuestionBody {
  question?: string;
  options?: string[];
  correctOption?: string;
  maxMarks?: number;
}

export const updateAssessmentQuestion = async (
  questionId: string,
  data: UpdateAssessmentQuestionBody,
) => {
  try {
    const res = await axiosInstance.put(
      `/api/assessments/update-assessment-question/${questionId}`,
      data,
    );

    return res.data.data;
  } catch (error) {
    toast.error("error updating question");
  }
};
