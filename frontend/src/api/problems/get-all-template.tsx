import axiosInstance from "@/lib/axios";
import React from "react";
import toast from "react-hot-toast";

export const getAllProblemTemplate = async (statefn: any, id: string) => {
  try {
    const getProblem = await axiosInstance.get(
      "/api/get-problem/template/" + id,
    );
    statefn(getProblem.data);
  } catch (error) {
    toast.error("failed to get all template");
  }
};
