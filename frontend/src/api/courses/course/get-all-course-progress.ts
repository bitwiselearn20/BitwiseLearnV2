import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAllCourseProgress = async () => {
  try {
    const res = await axiosInstance.get("/api/course/get-all-course-progress");
    return res.data.data;
  } catch (error) {
    toast.error("failed to get all course progress");
  }
};
