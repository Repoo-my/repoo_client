/* eslint-disable react/no-unstable-nested-components */

"use client";

import React, { useEffect, useRef, useState } from "react";
import DownArrow from "@/ui/src/icons/DownArrow";
import theme from "@/ui/styles/theme.css";
import Search from "@/ui/src/icons/Search";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { DayCellContentArg } from "@fullcalendar/core";
import Checked from "@/ui/src/icons/Checked";
import * as s from "./style.css";

function Calendar() {
  const [isSelected, setIsSelected] = useState(true);
  const [isAllDay, setIsAllDay] = useState(false);
  const calendarRef = useRef<FullCalendar | null>(null);

  const handleDayCellContent = (arg: DayCellContentArg) => {
    const dayNumber = arg.dayNumberText.replace("일", "");
    return dayNumber;
  };

  const handleOutsideClick = (e: MouseEvent) => {
    const calendarElement = document.querySelector(
      `.fc-scrollgrid-section-body`,
    );
    const addEventTab = document.querySelector(`.${s.right}`);
    const allDayBox = document.querySelector(`.${s.allDayBox}`);
    const checkIcon = allDayBox?.querySelectorAll("svg");

    if (
      calendarElement &&
      !calendarElement.contains(e.target as Node) &&
      addEventTab &&
      !addEventTab.contains(e.target as Node) &&
      !checkIcon
    ) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleAllDay = () => {
    setIsAllDay(!isAllDay);
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
            selectable
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
            ]}
            moreLinkText={(num) => `외 ${num}개의 일정`}
            dateClick={() => {
              setIsSelected(true);
            }}
          />
        </div>
      </div>
      <div className={s.right}>
        {isSelected ? (
          <div className={s.addEventTab}>
            <input className={s.titleInput} placeholder="제목" />
            <div className={s.dates}>
              <div className={s.dateBox}>
                <p className={s.eventText}>시작</p>
                <div className={s.selects}>
                  <input type="date" className={s.selectDate} />
                  {isAllDay ? (
                    <input type="time" className={s.selectTime} />
                  ) : null}
                </div>
              </div>
              <div className={s.dateBox}>
                <p className={s.eventText}>종료</p>
                <div className={s.selects}>
                  <input type="date" className={s.selectDate} />
                  {isAllDay ? (
                    <input type="time" className={s.selectTime} />
                  ) : null}
                </div>
              </div>
            </div>
            <div className={s.allDay}>
              <div
                tabIndex={0}
                aria-label="allDay"
                role="button"
                onClick={handleAllDay}
                onKeyDown={handleAllDay}
                className={s.allDayBox}
                style={{
                  background: isAllDay ? theme.gray[600] : theme.gray[200],
                }}
              >
                {isAllDay ? <Checked /> : null}
              </div>
              <p className={s.eventText}>종일</p>
            </div>
          </div>
        ) : (
          <div className={s.searchTab}>
            <div className={s.searchBar}>
              <Search color={theme.gray[400]} />
              <input placeholder="일정 검색" className={s.searchInput} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
