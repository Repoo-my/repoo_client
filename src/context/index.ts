import { atom } from "jotai";

export const userContext = atom({
  userEmail: "",
  userName: "",
  userAge: 0,
  isLogin: false,
});
