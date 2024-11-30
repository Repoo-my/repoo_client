import React from "react";
import * as s from "./style.css";
import Bookmark from "@/ui/src/icons/BookMark";
import theme from "@/ui/styles/theme.css";

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
  return (
    <div className={s.container}>
      <div
        className={s.companyImage}
        style={{
          background: `url(${imgUrl}) lightgray 50% / cover no-repeat`,
        }}
      >
        <div
          className={s.bookmark}
          onClick={() => {
            setIsInterested(!isInterested);
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
