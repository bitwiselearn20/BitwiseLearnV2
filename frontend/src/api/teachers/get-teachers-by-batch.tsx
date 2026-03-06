import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getTeachersByBatch = async (statefn: any, paramId: string) => {
  try {
    const getTeachers = await axiosInstance.get(
      "/api/teacher/get-by-batch/" + paramId,
    );
    // (getTeachers.data);
    statefn(getTeachers.data);
  } catch (error) {
    toast.error("failed to get teacher by batch");
  }
};
