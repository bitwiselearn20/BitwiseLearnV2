import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllStudents = async (statefn: any) => {
  try {
    const getAllStudents = await axiosInstance.get("/api/student/");
    statefn(getAllStudents.data);
  } catch (error) {
    toast.error("failed to get all students");
  }
};
