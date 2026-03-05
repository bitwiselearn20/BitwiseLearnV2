import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

type AssessmentSectionPayload = {
  name: string;
  marksPerQuestion: number;
  assessmentType: "CODE" | "NO_CODE";
  assessmentId: string;
};

export const createAssessmentSection = async (
  payload: AssessmentSectionPayload,
) => {
  try {
    const res = await axiosInstance.post(
      "/api/assessments/create-assessment-section",
      payload,
    );

    return res.data.data;
  } catch (error) {
    toast.error("error creating section");
  }
};
