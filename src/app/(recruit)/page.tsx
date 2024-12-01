"use client";

import React, { useState } from "react";
import Tag from "@/components/recruit/Tag";
import SearchBar from "@/components/recruit/SearchBar";
import JobPosting from "@/components/recruit/JobPosting";
import OccupationsModal from "@/components/recruit/OccupationsModal";
import { companies } from "@/data/companies";
import useModal from "@/hooks/useModal";
import * as s from "./style.css";

function All() {
  const filters = ["분야 전체", "경력 전체", "지역", "기술 스택"];
  const [isInterested, setIsInterested] = useState<{ [key: number]: boolean }>(
    {},
  );

  const { isOpen, openModal, closeModal } = useModal();
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
          {filters.map((filter) => (
            <div key={filter}>
              <Tag title={filter} onClick={() => openModal(filter)} />
              {isOpen(filter) ?? (
                <OccupationsModal
                  closeModal={() => {
                    closeModal(filter);
                  }}
                />
              )}
            </div>
          ))}
        </div>
        <SearchBar />
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

export default All;
