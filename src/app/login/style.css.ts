import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "120px",
});

export const title = style({
  ...font.H1,
  color: theme.black,
});

export const explains = style({
  marginTop: "4px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const explain = style({
  ...font.H5,
  color: theme.gray[600],
});

export const oAuthList = style({
  marginTop: "56px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const loginButton = style({
  padding: "11px 12px",
  width: "360px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  borderRadius: "4px",
  background: theme.white,
  cursor: "pointer",
});

export const loginText = style({
  ...font.btn2,
  color: theme.black,
  width: "100%",
  textAlign: "center",
});
