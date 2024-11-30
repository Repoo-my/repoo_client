import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "204px",
  cursor: "pointer",
});

export const companyImage = style({
  position: "relative",
  borderRadius: "12px",
  border: `1px solid ${theme.gray[50]}`,
  width: "100%",
  height: "152px",
});

export const infos = style({
  marginTop: "14px",
  display: "flex",
  flexDirection: "column",
});

export const postingTitle = style({
  ...font.H5,
  color: "#0A0A0A",
});

export const companyName = style({
  ...font.caption,
  color: theme.gray[500],
});

export const bookmark = style({
  position: "absolute",
  right: "12px",
  bottom: "12px",
});
