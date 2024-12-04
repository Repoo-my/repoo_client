"use client";

import React, { useState } from "react";
import Tag from "@/components/recruit/Tag";
import SearchBar from "@/components/recruit/SearchBar";
import JobPosting from "@/components/recruit/JobPosting";
import { companies } from "@/data/companies";
import Plus from "@/ui/src/icons/Plus";
import * as s from "./style.css";

function Custom() {
  const filters = ["태그"];
  const [isInterested, setIsInterested] = useState<{ [key: number]: boolean }>(
    {},
  );
  const [inputValue, setInputValue] = useState<string>("");

  const saveToInterests = (id: number) => {
    setIsInterested((posts) => ({
      ...posts,
      [id]: !posts[id],
    }));
  };

  return (
    <div className={s.container}>
      <p className={s.title}>맞춤형 공고를 추천받아보세요</p>
      <div className={s.filterBar}>
        <div className={s.tagList}>
          {filters.map((filter) => (
            <Tag
              key={filter}
              title={filter}
              onClick={() => {
                return 0;
              }}
            />
          ))}
          <div
            role="button"
            tabIndex={0}
            className={s.addButton}
            onClick={() => {
              return 0;
            }}
            onKeyDown={() => {
              return 0;
            }}
          >
            <Plus />
          </div>
        </div>
        <SearchBar
          placeholder="검색어를 입력해 주세요"
          width="320px"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter"}
        />
      </div>
      <div className={s.postingList}>
        {companies.map((company) => (
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

export default Custom;
