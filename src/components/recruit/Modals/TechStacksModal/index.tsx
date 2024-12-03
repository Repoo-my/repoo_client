import React from "react";
import { IModal } from "@/types/IModal";
import X from "@/ui/src/icons/X";
import * as s from "./style.css";
import SearchBar from "../../SearchBar";

function TechStacksModal({ closeModal }: IModal) {
  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>기술 스택</p>
        <X onClick={closeModal} size={28} />
      </div>
      <SearchBar placeholder="보유 기술스택을 입력해주세요" width="100%" />
      <div className={s.stackList}>
        <div className={s.stack}>
          React <X onClick={closeModal} size={20} />
        </div>
      </div>
    </div>
  );
}

export default TechStacksModal;
