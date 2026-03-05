import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export const getAssignmentById = async (
  assignmentId: string,
  stateFn?: any,
) => {
  try {
    if (!assignmentId) throw new Error("Assignment ID is required");

    const res = await axiosInstance.get(
      `/api/course/assignment/get/${assignmentId}`,
    );

    if (stateFn) {
      stateFn(res.data);
    }

    return res.data;
  } catch (error: any) {
    toast.error(error.message || "failed to get assignment");
  }
};
