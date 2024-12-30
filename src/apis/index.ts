import axios from "axios";
import { Storage } from "@/storage";
import { refreshToken } from "./header";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeout: 10000,
});

const refresh = async () => {
  const { data } = await http.put("/reissue", null, refreshToken());
  Storage.setItem("accessToken", data.accessToken);
  return data.accessToken;
};

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const request = error.config;
    const { code } = error.response.data;
    const isAccessTokenExpiredError = code === "token_expired";

    if (isAccessTokenExpiredError && !request.sent) {
      request.sent = true;
      request.headers.Authorization = await refresh();
      return http(request);
    }
    return Promise.reject(error);
  },
);
