import { style } from "@vanilla-extract/css";
import { font } from "@ui/styles/font.css.ts";
import theme from "@ui/styles/theme.css.ts";

export const container = style({
  padding: "120px 52px 10px",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const contentLayout = style({
  width: "100%",
  overflow: "visible",
});

export const companyImgLayout = style({
  width: "100%",
  height: "264px",
  borderRadius: "8px",
  position: "relative",
  overflow: "hidden",
});

export const companyImg = style({
  position: "absolute",
  width: "100%",
  height: "100%",
  zIndex: "-1",
  objectFit: "cover",
});

export const backgroundBlur = style({
  background: "rgba(0, 0, 0, 0.60)",
  backdropFilter: "blur(4px)",
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: "-1",
});

export const textsLayoutContainer = style({
  width: "100%",
  height: "100%",
  padding: "20px 28px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "end",
});

export const textsLayout = style({
  display: "flex",
  width: "100%",
  flexDirection: "column",
});

export const companyName = style({
  ...font.H4,
  color: theme.gray["50"],
});

export const infoLayout = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
});

export const title = style({
  color: theme.white,
  ...font.H1,
});

export const subInfoLayout = style({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "12px",
  whiteSpace: "nowrap",
});

export const subInfo = style({
  color: theme.white,
  ...font.p3,
});

export const jobDetailWrapper = style({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "space-between",
  gap: "40px",
  position: "relative",
});

export const jobContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  paddingTop: "20px",
  height: "100%",
});

export const jobDescription = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});

export const topic = style({
  color: theme.black,
  ...font.H4,
});

export const explain = style({
  alignSelf: "stretch",
  color: theme.gray[600],
  ...font.p2,
});

export const applyContainer = style({
  position: "sticky",
  paddingTop: "20px",
  height: "100%",
  top: "20px",
  right: "0",
});

export const applyButton = style({
  display: "flex",
  padding: "8px 92px",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  backgroundColor: theme.primary.rose,
  color: theme.white,
  border: "none",
  whiteSpace: "nowrap",
  ...font.btn2,
});
