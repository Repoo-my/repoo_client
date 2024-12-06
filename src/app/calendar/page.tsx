import React from "react";
import DownArrow from "@/ui/src/icons/DownArrow";
import theme from "@/ui/styles/theme.css";
import * as s from "./style.css";

function Calendar() {
  return (
    <div className={s.container}>
      <div className={s.arrows}>
        <div className={s.reverseArrow}>
          <DownArrow size="26" color={theme.gray[400]} />
        </div>
        <DownArrow size="26" color={theme.gray[400]} />
      </div>
      <p className={s.currentDate}>
        2024년 <span className={s.month}>11월</span>
      </p>
    </div>
  );
}

export default Calendar;
