import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getCourseById = async (courseId: string) => {
  try {
    const res = await axiosInstance.get(
      `/api/course/get-course-by-id/${courseId}`,
    );

    return res.data;
  } catch (error) {
    toast.error("failed to get course ");
  }
};
