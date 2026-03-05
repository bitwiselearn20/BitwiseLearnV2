import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

type AddAssignmentQuestionPayload = {
  assignmentId: string;
  question: string;
  options: any[];
  correctAnswer: string | string[];
};

export const addAssignmentQuestion = async (
  assignmentId: string,
  payload: AddAssignmentQuestionPayload,
) => {
  try {
    const res = await axiosInstance.post(
      `/api/course/assignment-question/add/${assignmentId}`,
      payload,
    );

    return res.data;
  } catch (error) {
    toast.error("failed to add question");
  }
};
