import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getTeacherByInstitute = async (statefn: any, paramId: string) => {
  try {
    const getStudents = await axiosInstance.get(
      "/api/teacher/get-by-institute/" + paramId,
    );
    statefn(getStudents.data);
  } catch (error) {
    toast.error("failed to get teacher by institution");
  }
};
