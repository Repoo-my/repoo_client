import React, { useState } from "react";
import * as s from "./style.css";
import KebabIcon from "@/ui/src/icons/KebabIcon";

function ControlTagModal() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={s.container}>
      <div className={s.optionSearchBar}>
        <div className={s.selectedOptionList}>
          <div className={s.selectedOptionItem}>옵션</div>
        </div>
        <input placeholder="옵션 검색" className={s.searchInput} />
      </div>
      <p className={s.selectOrCreate}>옵션 선택 또는 생성</p>
      <div className={s.createdOptionList}>
        <div
          className={s.createdOptionItem}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={s.createdOptionContent}>옵션 예시입니다</div>
          {isHovered ? <KebabIcon /> : null}
        </div>
      </div>
    </div>
  );
}

export default ControlTagModal;
