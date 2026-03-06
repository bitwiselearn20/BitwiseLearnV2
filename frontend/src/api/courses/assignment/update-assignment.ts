import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

type UpdateAssignmentPayload = {
  description?: string;
  marksPerQuestion?: number;
  instruction?: string;
};

export const updateAssignment = async (
  assignmentId: string,
  data: UpdateAssignmentPayload,
) => {
  try {
    const res = await axiosInstance.put(
      `/api/course/assignment/update-assignment/${assignmentId}`,
      data,
    );

    return res.data;
  } catch (error: any) {
    toast.error("failed to update assignment");
  }
};
