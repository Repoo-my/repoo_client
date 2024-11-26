import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  position: "fixed",
  display: "flex",
  maxWidth: "320px",
  height: "100vh",
  borderRight: `1px solid ${theme.gray[100]}`,
  background: `${theme.white}`,
  flexDirection: "column",
  userSelect: "none",
});

export const logoBox = style({
  padding: "56px 88px 55px",
  display: "flex",
  justifyContent: "center",
  height: "max-content",
  borderBottom: `1px solid ${theme.gray[100]}`,
});

export const categoryList = style({
  padding: "20px",
});

export const category = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

export const header = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const bigText = style({
  ...font.H4,
  color: "#0A0A0A",
});

export const line = style({
  width: "120px",
  border: `0.5px solid ${theme.gray[100]}`,
});

export const menuList = style({
  width: "100%",
  marginTop: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const menu = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: "11px 12px",
  borderRadius: "8px",
  ":hover": {
    background: `${theme.gray[50]}`,
  },
  cursor: "pointer",
});

export const smallText = style({
  ...font.p1,
  color: `${theme.black}`,
});
