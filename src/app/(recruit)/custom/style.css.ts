import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "120px 52px 10px",
  width: "100%",
  height: "100vh",
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

export const addButton = style({
  padding: "8px 12px",
  borderRadius: "8px",
  border: `0.8px solid ${theme.gray[100]}`,
  background: theme.white,
  cursor: "pointer",
});

export const postingList = style({
  width: "100%",
  marginTop: "15px",
  display: "flex",
  gap: "24px",
  flexWrap: "wrap",
  overflowY: "auto",
});
