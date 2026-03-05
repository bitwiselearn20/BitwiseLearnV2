import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

type question = {
  question?: string;
  options?: string[];
  correctOption?: string;
  problem?: string;
  maxMarks: number;
};

export const createQuestion = async (sectionId: string, payload: question) => {
  try {
    const reqBody = {
      question: payload.question || "",
      options: payload.options || "",
      correctOption: payload.correctOption || "",
      problem: payload.problem || "",
      maxMarks: payload.maxMarks,
    };

    const response = await axiosInstance.post(
      `/api/assessments/create-question/${sectionId}`,
      reqBody,
    );

    return response.data.data;
  } catch (error) {
    toast.error("error creating question");
  }
};
