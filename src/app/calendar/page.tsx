"use client";

import React, { useCallback, useRef, useState } from "react";
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
          <button
            type="button"
            className={s.reverseArrow}
            onClick={() => {
              const calendarApi = calendarRef.current?.getApi();
              if (calendarApi) calendarApi.prev();
            }}
          >
            <DownArrow size="26" color={theme.gray[400]} />
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
            height="100%"
            editable
            locale="ko"
            dayCellContent={handleDayCellContent}
            titleFormat={{ year: "numeric", month: "long" }}
            eventContent={(arg) => {
              return (
                <div className={s.eventWrapper}>
                  <div
                    className={s.eventStick}
                    style={{ background: theme.primary.rose }}
                  />
                  <span
                    className={s.eventTitle}
                    style={{ color: theme.primary.rose }}
                  >
                    {arg.event.title}
                  </span>
                </div>
              );
            }}
            dayMaxEvents={3}
            events={[
              {
                start: "2024-12-11",
                editable: false,
                startEditable: true,
                durationEditable: true,
                backgroundColor: theme.light.rose,
                borderColor: theme.light.rose,
                title: "놀자",
              },
              {
                start: "2024-12-11",
                editable: false,
                startEditable: true,
                durationEditable: true,
                backgroundColor: theme.light.rose,
                borderColor: theme.light.rose,
                title: "놀자",
              },
              {
                start: "2024-12-11",
                editable: false,
                startEditable: true,
                durationEditable: true,
                backgroundColor: theme.light.rose,
                borderColor: theme.light.rose,
                title: "놀자",
              },
              {
                start: "2024-12-11",
                editable: false,
                startEditable: true,
                durationEditable: true,
                backgroundColor: theme.light.rose,
                borderColor: theme.light.rose,
                title: "놀자",
              },
            ]}
            moreLinkText={(num) => `외 ${num}개의 일정`}
          />
        </div>
      </div>
    </div>
  );
}

export default Calendar;
