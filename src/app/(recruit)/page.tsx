"use client";

import React, { useState } from "react";
import Tag from "@/components/recruit/Tag";
import SearchBar from "@/components/recruit/SearchBar";
import JobPosting from "@/components/recruit/JobPosting";
import OccupationsModal from "@/components/recruit/Modals/OccupationsModal";
import { companies } from "@/data/companies";
import useModal from "@/hooks/useModal";
import CareerYearsModal from "@/components/recruit/Modals/CareerYearsModal";
import RegionsModal from "@/components/recruit/Modals/RegionsModal";
import TechStacksModal from "@/components/recruit/Modals/TechStacksModal";
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

  const renderModal = (filter: string) => {
    switch (filter) {
      case "분야 전체":
        return (
          <OccupationsModal
            closeModal={() => {
              closeModal(filter);
            }}
          />
        );
      case "경력 전체":
        return (
          <CareerYearsModal
            closeModal={() => {
              closeModal(filter);
            }}
          />
        );
      case "지역":
        return (
          <RegionsModal
            closeModal={() => {
              closeModal(filter);
            }}
          />
        );

      case "기술 스택":
        return (
          <TechStacksModal
            closeModal={() => {
              closeModal(filter);
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className={s.container}>
      <p className={s.title}>지금 뜨고 있는 공고들을 확인해보세요</p>
      <div className={s.filterBar}>
        <div className={s.tagList}>
          {filters.map((filter) => (
            <div key={filter}>
              <Tag
                title={filter}
                onClick={() => {
                  if (isOpen(filter)) {
                    closeModal(filter);
                  } else {
                    openModal(filter);
                  }
                }}
              />
              {isOpen(filter) && renderModal(filter)}
            </div>
          ))}
        </div>
        <SearchBar placeholder="검색어를 입력해 주세요" />
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
