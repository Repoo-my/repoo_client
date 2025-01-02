import { Storage } from "@/storage";

export const accessToken = () => ({
  headers: {
    accessToken: Storage.getItem("accessToken"),
  },
});

export const refreshToken = () => ({
  headers: {
    refreshToken: Storage.getItem("refreshToken"),
  },
});

export const accessTokenAndRefreshToken = () => ({
  headers: {
    accessToken: Storage.getItem("accessToken"),
    refreshToken: Storage.getItem("refreshToken"),
  },
});
