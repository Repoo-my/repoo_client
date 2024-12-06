import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "57vw",
  height: "100vh",
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

export const currentDate = style({
  padding: "60px 20px",
  color: "#000",
  fontSize: "28px",
});

export const month = style({
  ...font.H2,
  color: "#000",
});
