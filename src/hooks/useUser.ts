"use client";

import { Storage } from "@/storage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { IUser } from "@/types";
import { userContext } from "@/context";
import { useAtom } from "jotai";
import { getMyInformation } from "@/services/users";

const useUser = () => {
  const [user, setUser] = useAtom(userContext);

  const { data: userInfo } = useQuery<IUser>({
    queryKey: ["user"],
    queryFn: getMyInformation,
    enabled: !!Storage.getItem("accessToken"),
  });

  useEffect(() => {
    if (userInfo) setUser(userInfo);
  }, [setUser, userInfo]);

  return {
    user,
    isLoggedIn: !!userInfo,
  };
};

export default useUser;
