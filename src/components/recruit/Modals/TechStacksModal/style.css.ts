import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  padding: "22px 20px",
  width: "25%",
  background: theme.white,
  top: "26%",
  zIndex: "3",
  borderRadius: "16px",
  boxShadow: `0px 4px 30px 10px rgba(0, 0, 0, 0.06)`,
  gap: "20px",
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

export const stackList = style({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
});

export const stack = style({
  padding: "8px 12px",
  background: theme.gray[50],
  display: "flex",
  alignItems: "center",
  gap: "4px",
  ...font.p3,
  color: theme.gray[600],
  borderRadius: "4px",
});

export const buttons = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const reset = style({
  padding: "8px 14px",
  background: theme.white,
  color: theme.black,
  borderRadius: "8px",
  border: `1px solid ${theme.gray[100]}`,
});

export const reply = style({
  padding: "8px 16px",
  background: theme.gray[600],
  borderRadius: "8px",
  color: theme.white,
  ...font.btn2,
});
