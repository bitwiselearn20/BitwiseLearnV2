// /assessment-report/:assessmentId/
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";

export async function getStudentData(
  assessmentId: string,
  pageNumber: number,
  setStudentData: (data: any) => void,
) {
  try {
    const data = await axiosInstance.post("/api/reports/assessment-report/", {
      assessmentId,
      pageNumber,
    });
    setStudentData(data.data.data);
  } catch (error) {
    toast.error("failed to get data");
  }
}
