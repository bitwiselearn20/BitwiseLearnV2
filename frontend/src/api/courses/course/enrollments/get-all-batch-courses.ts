import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export async function allBatchCourses(batchId: string) {
  try {
    const result = await axiosInstance.get(
      "/api/course/get-enrollment-by-batch/" + batchId,
    );
    let dataMap = result.data.data;
    dataMap = result.data.data.map((course: any) => {
      return { ...course.course, id: course.id };
    });

    return dataMap;
  } catch (error) {
    toast.error("failed to get all batches");
  }
}
