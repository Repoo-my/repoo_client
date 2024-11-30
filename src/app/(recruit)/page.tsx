"use client";

import React, { useState } from "react";
import Tag from "@/components/common/Tag";
import SearchBar from "@/components/common/SearchBar";
import JobPosting from "@/components/common/JobPosting";
import * as s from "./style.css";

function All() {
  const [isInterested, setIsInterested] = useState(false);
  return (
    <div className={s.container}>
      <p className={s.title}>지금 뜨고 있는 공고들을 확인해보세요</p>
      <div className={s.filterBar}>
        <div className={s.tagList}>
          <Tag title="분야 전체" />
          <Tag title="경력 전체" />
          <Tag title="지역" />
          <Tag title="기술 스택" />
        </div>
        <SearchBar />
      </div>
      <div className={s.postingList}>
        <JobPosting
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0mo1-1RPPCSd54lH3fcOeOWM1wRHxEZ3C1A&s"
          postingTitle="제목입니다"
          companyName="삼성전자"
          isInterested={isInterested}
          setIsInterested={setIsInterested}
        />
      </div>
    </div>
  );
}

export default All;
