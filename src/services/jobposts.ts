import { http } from "@/apis";

export const getJobposts = async () => {
  const { data } = await http.get("/api/jobposts");
  return data;
};
