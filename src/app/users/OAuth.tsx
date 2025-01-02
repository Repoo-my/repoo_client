"use client";

import { Storage } from "@/storage";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import * as s from "./style.css";

function OAuth() {
  const router = useRouter();
  const accessToken = useSearchParams().get("accessToken") || "";
  const refreshToken = useSearchParams().get("refreshToken") || "";
  const newUser = useSearchParams().get("newUser") || "";

  useEffect(() => {
    Storage.setItem("accessToken", accessToken);
    Storage.setItem("refreshToken", refreshToken);
    router.replace(newUser === "1" ? "/login/additional-info" : "/");
  }, [accessToken, refreshToken, router, newUser]);

  return (
    <div className={s.container}>
      <span className={s.loadingText}>로그인 중...</span>
    </div>
  );
}

export default OAuth;
