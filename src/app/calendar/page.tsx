"use client";

import React, { useRef } from "react";
import DownArrow from "@/ui/src/icons/DownArrow";
import theme from "@/ui/styles/theme.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import * as s from "./style.css";

function Calendar() {
  const calendarRef = useRef<FullCalendar | null>(null);

  return (
    <div className={s.container}>
      <div className={s.calendar}>
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
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "title",
            end: "",
          }}
          editable
          selectable
          dayHeaderContent={(args) =>
            ["일", "월", "화", "수", "목", "금", "토"][args.date.getDay()]
          }
        />
      </div>
    </div>
  );
}

export default Calendar;
