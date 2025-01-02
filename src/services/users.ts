import { http } from "@/apis";
import { accessToken, accessTokenAndRefreshToken } from "@/apis/header";

export const getEmail = async () => {
  const { data } = await http.get("/api/users/info/email", accessToken());
  return data;
};

export const requestPostInfo = async (infos: {
  userName: string;
  userGender: string;
  userAge: number;
}) => {
  const { data } = await http.post(
    "/api/users",
    infos,
    accessTokenAndRefreshToken(),
  );
  return data;
};
