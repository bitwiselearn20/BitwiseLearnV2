import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllAssessments = async () => {
  try {
    const res = await axiosInstance.get("/api/assessments/get-all-assessments");
    return res.data;
  } catch (error) {
    toast.error("error getting assessments");
  }
};
export const getAllStudentAssessment = async (id: string) => {
  try {
    if (!id) return;
    const res = await axiosInstance.get(
      "/api/assessments/get-all-batch-assessments/" + id,
    );
    return res.data;
  } catch (error) {
    toast.error("error getting assessments");
  }
};

export const getAllInstituteAssessment = async (id: string) => {
  try {
    const res = await axiosInstance.get(
      "/api/assessments/get-institute-assessments/" + id,
    );
    return res.data;
  } catch (error) {
    toast.error("error getting assessments");
  }
};
