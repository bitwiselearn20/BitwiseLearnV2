import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const deleteAssessmentSection = async (sectionId: string) => {
  try {
    const res = await axiosInstance.delete(
      `/api/assessments/delete-assessment-section/${sectionId}`,
    );
    return res.data.data;
  } catch (error) {
    toast.error("error deleting section");
  }
};
