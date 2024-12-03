import React, { useState } from "react";
import X from "@/ui/src/icons/X";
import Unchcked from "@/ui/src/icons/Unchcked";
import Checked from "@/ui/src/icons/Checked";
import { IModal } from "@/types/IModal";
import { regions } from "@/data/regions";
import Button from "@/components/common/Button";
import * as s from "./style.css";

function RegionsModal({ closeModal }: IModal) {
  const [isSelected, setIsSelected] = useState<{ [key: string]: boolean }>({});
  const filterRegions = (id: string) => {
    setIsSelected((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className={s.container}>
      <div className={s.header}>
        <p className={s.title}>지역</p>
        <X onClick={closeModal} size={28} />
      </div>
      <div className={s.regionList}>
        {regions.map((occupation) => (
          <div
            role="button"
            tabIndex={0}
            onKeyDown={() => {
              filterRegions(occupation.title);
            }}
            onClick={() => {
              filterRegions(occupation.title);
            }}
            key={occupation.title}
            className={s.region}
          >
            <p className={s.name}>{occupation.title}</p>
            {isSelected[occupation.title] ? <Checked /> : <Unchcked />}
          </div>
        ))}
      </div>
      <div className={s.buttons}>
        <Button type="white">초기화</Button>
        <Button type="black">적용</Button>
      </div>
    </div>
  );
}

export default RegionsModal;
