import axiosInstance from "@/lib/axios";

export const createSection = async (courseId: string, name: string) => {
  const res = await axiosInstance.post(
    `/api/course/create-section/${courseId}`,
    {
      name,
    },
  );
  return res.data;
};
