import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const publishCourse = async (courseId: string, stateFn?: any) => {
  try {
    const res = await axiosInstance.put(
      `/api/course/publish-course/${courseId}`,
    );

    if (stateFn) {
      stateFn(res.data);
    }

    return res.data;
  } catch (error) {
    toast.error("failed to publish course");
  }
};
