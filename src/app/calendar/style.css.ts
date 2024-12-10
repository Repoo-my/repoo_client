import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100vh",
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  width: "57vw",
  height: "100%",
  borderLeft: `1px solid ${theme.gray[100]}`,
  borderRight: `1px solid ${theme.gray[100]}`,
});

export const arrows = style({
  width: "100%",
  justifyContent: "flex-end",
  display: "flex",
  alignItems: "center",
  padding: "8px 8px 0",
  cursor: "pointer",
});

export const reverseArrow = style({
  display: "flex",
  alignItems: "center",
  transform: "rotate(-180deg)",
});

globalStyle(".fc-toolbar-title", {
  paddingLeft: "20px",
  color: theme.black,
  fontWeight: "400",
  fontSize: "28px",
});

export const calendarContainer = style({
  width: "100%",
  height: "100%",
  paddingTop: "44.5px",
  "@media": {
    "screen and (max-width: 1440px)": {
      paddingTop: "50px",
    },
    "screen and (max-width: 1026px)": {
      paddingTop: "55.5px",
    },
    "screen and (max-width: 1024px)": {
      paddingTop: "44.5px",
    },
    "screen and (max-width: 768px)": {
      paddingTop: "62px",
    },
  },
});

globalStyle(".fc-theme-standard .fc-scrollgrid", {
  border: "none",
});

globalStyle(".fc-theme-standard th", {
  border: "none",
});

globalStyle(".fc-col-header", {
  borderBottom: `1px solid ${theme.gray[100]}`,
});

globalStyle(".fc-theme-standard td", {
  border: `1px solid ${theme.gray[100]}`,
});

globalStyle(".fc .fc-highlight", {
  background: theme.gray[50],
});

globalStyle(".fc-theme-standard td:last-child", {
  borderRight: "none",
});

globalStyle(".fc-col-header-cell", {
  color: theme.gray[500],
  ...font.caption,
});

globalStyle(".fc-col-header-cell.fc-day-sun", {
  color: theme.stressRed,
});

globalStyle(".fc .fc-daygrid-day-number ", {
  padding: "2px 8px",
  color: theme.black,
  ...font.caption,
});

globalStyle(".fc .fc-daygrid-day.fc-day-today", {
  backgroundColor: theme.white,
});
