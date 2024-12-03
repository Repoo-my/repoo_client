import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "22px 24px",
  position: "absolute",
  top: "26%",
  width: "25%",
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

export const range = style({
  ...font.H5,
});

export const content = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
});

export const year = style({
  padding: "0 7px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const yearText = style({
  ...font.p3,
  color: "#000",
});

export const rangeContainer = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  width: "100%",
  padding: "0px 20px 0 10px",
});

export const rangeLabel = style({
  ...font.H5,
  marginBottom: "16px",
});

export const rangeTrack = style({
  position: "relative",
  width: "100%",
  height: "6px",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
});

export const rangeInput = style({
  appearance: "none",
  position: "absolute",
  width: "100%",
  height: "6px",
  pointerEvents: "none",
  zIndex: 2,
  WebkitAppearance: "none",
  background: "none",
  "::-webkit-slider-thumb": {
    appearance: "none",
    width: "20px",
    height: "20px",
    background: theme.gray[600],
    border: `2px solid ${theme.white}`,
    borderRadius: "50%",
    pointerEvents: "auto",
    cursor: "pointer",
  },
  "::-moz-range-thumb": {
    width: "20px",
    height: "20px",
    background: theme.gray[600],
    borderRadius: "50%",
    pointerEvents: "auto",
    cursor: "pointer",
  },
});

export const rangeProgress = style({
  position: "absolute",
  height: "6px",
  borderRadius: "3px",
  background: theme.gray[600],
});

export const buttons = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
