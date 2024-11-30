import { font } from "@/ui/styles/font.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "120px 52px",
  width: "100%",
  height: "max-content",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  ...font.H2,
  color: "#0A0A0A",
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
