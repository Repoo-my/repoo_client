import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "absolute",
  padding: "22px 20px",
  width: "26.25%",
  background: theme.white,
  zIndex: "3",
  borderRadius: "16px",
  boxShadow: `0px 4px 30px 10px rgba(0, 0, 0, 0.06)`,
});

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  ...font.H4,
  color: "#000",
});

export const occupationList = style({
  margin: "20px 0",
  display: "flex",
  flexDirection: "column",
  height: "280px",
  overflowY: "auto",
});

export const occupation = style({
  padding: "15px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const name = style({
  ...font.H5,
  color: "#000",
});

export const checkBox = style({
  cursor: "pointer",
});
