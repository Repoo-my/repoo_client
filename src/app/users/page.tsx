import { Suspense } from "react";
import type { Metadata } from "next";
import OAuth from "./OAuth";

export const metadata: Metadata = {
  title: "로그인",
  description: "레포 로그인페이지입니다.",
};

function Page() {
  return (
    <Suspense>
      <OAuth />
    </Suspense>
  );
}

export default Page;
