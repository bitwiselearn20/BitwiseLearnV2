import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getStudentsByBatch = async (statefn: any, paramId: string) => {
  try {
    const getStudents = await axiosInstance.get(
      "/api/student/get-by-batch/" + paramId,
    );
    // (getStudents.data);
    statefn(getStudents.data);
  } catch (error) {
    toast.error("failed to get students");
  }
};
