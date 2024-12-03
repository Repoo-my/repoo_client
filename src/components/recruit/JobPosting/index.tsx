import React from "react";
import Bookmark from "@/ui/src/icons/Bookmark";
import theme from "@/ui/styles/theme.css";
import { useRouter } from "next/navigation";
import * as s from "./style.css";

interface JobPostingProps {
  imgUrl: string;
  postingTitle: string;
  companyName: string;
  isInterested: boolean;
  setIsInterested: React.Dispatch<React.SetStateAction<boolean>>;
}

function JobPosting({
  imgUrl,
  postingTitle,
  companyName,
  isInterested,
  setIsInterested,
}: JobPostingProps) {
  const router = useRouter();
  return (
    <div
      className={s.container}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(`/`);
        }
      }}
    >
      <div
        className={s.companyImage}
        style={{
          background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div
          role="button"
          tabIndex={0}
          className={s.bookmark}
          onClick={() => {
            setIsInterested(!isInterested);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setIsInterested(!isInterested);
            }
          }}
        >
          <Bookmark color={isInterested ? theme.stressRed : theme.gray[400]} />
        </div>
      </div>
      <div className={s.infos}>
        <p className={s.postingTitle}>{postingTitle}</p>
        <p className={s.companyName}>{companyName}</p>
      </div>
    </div>
  );
}

export default JobPosting;
