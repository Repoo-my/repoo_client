import React, { useState } from "react";
import X from "@/ui/src/icons/X";
import Unchcked from "@/ui/src/icons/Unchcked";
import Checked from "@/ui/src/icons/Checked";
import { occupations } from "@/data/occupations";
import { IModal } from "@/types/IModal";
import * as s from "./style.css";

function OccupationsModal({ closeModal }: IModal) {
  const [isSelected, setIsSelected] = useState<{ [key: string]: boolean }>({});
  const filterOccupations = (id: string) => {
    if (id === "모든 직군") {
      const newState = { "모든 직군": !isSelected["모든 직군"] };
      setIsSelected(newState);
    } else {
      setIsSelected((prev) => ({
        ...prev,
        [id]: !prev[id],
        "모든 직군": false,
      }));
    }
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>직군</p>
        <X onClick={closeModal} size={28} />
      </div>
      <div className={s.occupationList}>
        {occupations.map((occupation) => (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              filterOccupations(occupation.title);
            }}
            onClick={() => {
              filterOccupations(occupation.title);
            }}
            key={occupation.title}
            className={s.occupation}
          >
            <p className={s.name}>{occupation.title}</p>
            {isSelected[occupation.title] ? <Checked /> : <Unchcked />}
          </div>
        ))}
      </div>
      <div className={s.buttons}>
        <button
          type="button"
          className={s.reset}
          onClick={() => {
            setIsSelected(() => ({}));
          }}
        >
          초기화
        </button>
        <button type="button" className={s.reply} onClick={closeModal}>
          적용
        </button>
      </div>
    </div>
  );
}

export default OccupationsModal;
