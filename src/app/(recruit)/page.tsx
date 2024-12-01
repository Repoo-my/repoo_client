"use client";

import React, { useState } from "react";
import Tag from "@/components/recruit/Tag";
import SearchBar from "@/components/recruit/SearchBar";
import JobPosting from "@/components/recruit/JobPosting";
import { companyList } from "@/data/comapnyList";
import * as s from "./style.css";

function All() {
  const [isInterested, setIsInterested] = useState<{ [key: number]: boolean }>(
    {},
  );
  const saveToInterests = (id: number) => {
    setIsInterested((posts) => ({
      ...posts,
      [id]: !posts[id],
    }));
  };

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
        {companyList.map((company) => (
          <JobPosting
            key={company.id}
            imgUrl={company.imgUrl}
            postingTitle={company.postingTitle}
            companyName={company.companyName}
            isInterested={!!isInterested[company.id]}
            setIsInterested={() => {
              saveToInterests(company.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default All;
