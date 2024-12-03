import React, { useState } from "react";
import { IModal } from "@/types/IModal";
import X from "@/ui/src/icons/X";
import Button from "@/components/common/Button";
import * as s from "./style.css";

function CareerYearsModal({ closeModal }: IModal) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  const formatYears = () => {
    if (minValue === 0 && maxValue === 10) {
      return "경력 전체";
    }
    if (maxValue === 10) {
      return `${minValue}년 ~ 10년 이상`;
    }
    if (minValue === 0) {
      return `신입 ~ ${maxValue}년`;
    }
    return `${minValue}년 ~ ${maxValue}년`;
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>경력</p>
        <X onClick={closeModal} size={28} />
      </div>
      <div className={s.content}>
        <div className={s.rangeLabel}>{formatYears()}</div>
        <div className={s.rangeContainer}>
          <div className={s.rangeTrack}>
            <input
              type="range"
              min="0"
              max="10"
              value={minValue}
              onChange={handleMinChange}
              className={s.rangeInput}
            />
            <input
              type="range"
              min="0"
              max="10"
              value={maxValue}
              onChange={handleMaxChange}
              className={s.rangeInput}
            />
            <div
              className={s.rangeProgress}
              style={{
                left: `${(minValue / 10) * 100}%`,
                right: `${100 - (maxValue / 10) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className={s.year}>
          <span className={s.yearText}>신입</span>
          <span className={s.yearText}>10년 이상</span>
        </div>
      </div>
      <div className={s.buttons}>
        <Button type="white">초기화</Button>
        <Button type="black">적용</Button>
      </div>
    </div>
  );
}

export default CareerYearsModal;
