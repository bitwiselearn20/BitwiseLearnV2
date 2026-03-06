import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const createCourse = async (
  payload: {
    name: string;
    description: string;
    level: string;
    duration: string;
    instructorName: string;
  },
  stateFn?: any,
) => {
  try {
    const res = await axiosInstance.post("/api/course/create-course", payload);

    if (stateFn) {
      stateFn(res.data);
    }

    return res.data;
  } catch (error) {
    toast.error("failed to get create course");
  }
};
