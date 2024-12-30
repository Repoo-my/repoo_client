import { Storage } from "@/storage";

export const authorization = () => ({
  headers: {
    Authorization: Storage.getItem("accessToken"),
  },
});

export const refreshToken = () => ({
  headers: {
    RefreshToken: Storage.getItem("refreshToken"),
  },
});
