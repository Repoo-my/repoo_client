import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "120px 52px",
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  ...font.H2,
  color: theme.black,
});

export const filterBar = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "12px",
});

export const tagList = style({
  display: "flex",
  gap: "8px",
});

export const postingList = style({
  width: "100%",
  marginTop: "15px",
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
});
