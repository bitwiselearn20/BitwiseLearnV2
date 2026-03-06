import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export async function getStudentData(
  pageNumber: number,
  courseId: string,
  batchId: string,
  setStudentData: (data: any) => void,
) {
  try {
    const data = await axiosInstance.post("/api/reports/course-report/", {
      courseId,
      batchId,
      pageNumber,
    });
    setStudentData(data.data.data);

    return data.data.totalCourseTopics;
  } catch (error) {
    toast.error("failed to create problem");
  }
}
