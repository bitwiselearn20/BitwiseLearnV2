import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export interface UpdateAssessmentSection {
  name?: string;
  marksPerQuestion?: number;
}

export const updateAssessmentSection = async (
  sectionId: string,
  data: UpdateAssessmentSection,
) => {
  try {
    const res = await axiosInstance.put(
      `/api/assessments/update-assessment-section/${sectionId}`,
      data,
    );
    return res.data.data;
  } catch (error) {
    toast.error("error updating section");
  }
};
