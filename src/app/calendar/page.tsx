"use client";

import React, { useRef } from "react";
import DownArrow from "@/ui/src/icons/DownArrow";
import theme from "@/ui/styles/theme.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DayCellContentArg } from "@fullcalendar/core";
import * as s from "./style.css";

function Calendar() {
  const calendarRef = useRef<FullCalendar | null>(null);

  const handleDayCellContent = (arg: DayCellContentArg) => {
    const dayNumber = arg.dayNumberText.replace("일", "");
    return dayNumber;
  };

  return (
    <div className={s.container}>
      <div className={s.left}>
        <div className={s.arrows}>
          <button type="button" className={s.reverseArrow}>
            <DownArrow
              size="26"
              color={theme.gray[400]}
              onClick={() => {
                const calendarApi = calendarRef.current?.getApi();
                if (calendarApi) calendarApi.prev();
              }}
            />
          </button>
          <DownArrow
            size="26"
            color={theme.gray[400]}
            onClick={() => {
              const calendarApi = calendarRef.current?.getApi();
              if (calendarApi) calendarApi.next();
            }}
          />
        </div>
        <div className={s.calendarContainer}>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "title",
              end: "",
            }}
            editable
            locale="ko"
            dayCellContent={handleDayCellContent}
            titleFormat={{ year: "numeric", month: "long" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
