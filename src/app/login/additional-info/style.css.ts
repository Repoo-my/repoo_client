import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "100px",
});

export const inputs = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "400px",
  marginTop: "26px",
});

export const inputContainer = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "4px",
});

export const label = style({
  color: `${theme.gray[600]}`,
  ...font.p3,
});

export const inputBox = style({
  width: "100%",
  border: `1px solid ${theme.gray[200]}`,
  padding: "9px 16px",
  borderRadius: "8px",
  ...font.p2,
  "::placeholder": {
    color: theme.gray[300],
  },
  color: theme.black,
});

globalStyle(`${inputBox}::-webkit-outer-spin-button`, {
  WebkitAppearance: "none",
  margin: "0",
});

globalStyle(`${inputBox}::-webkit-inner-spin-button`, {
  WebkitAppearance: "none",
  margin: "0",
});

export const readonly = style({
  background: theme.gray[50],
  color: theme.gray[300],
});

export const inputWithUnit = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  width: "100%",
});

export const inputWithUnitInput = style({
  paddingRight: "30px",
});

export const unit = style({
  position: "absolute",
  right: "16px",
  color: theme.gray[400],
  ...font.p2,
});

export const genderContainer = style({
  display: "flex",
  gap: "36px",
  padding: "9px 16px",
  alignItems: "center",
});

export const genderBox = style({
  display: "flex",
  gap: "4px",
  alignItems: "center",
});

export const genderRadio = style({
  width: "20px",
  height: "20px",
  cursor: "pointer",
  border: `1.5px solid ${theme.gray[200]}`,
  outline: "none",
  appearance: "none",
  borderRadius: "50%",
  position: "relative",
  backgroundColor: "white",
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      transform: "translate(-50%, -50%) scale(0)",
      backgroundColor: "transparent",
    },
    "&:checked": {
      border: `1.5px solid ${theme.gray[600]}`,
    },
    "&:checked::before": {
      transform: "translate(-50%, -50%) scale(1)",
      backgroundColor: theme.gray[600],
    },
  },
});

export const genderText = style({
  color: theme.black,
  ...font.p2,
});

export const registerButton = style({
  width: "100%",
  padding: "13px",
  borderRadius: "8px",
  ...font.context,
});

export const isNotDisabled = style({
  color: theme.white,
  background: theme.gray[600],
});

export const isDisabled = style({
  color: theme.gray[200],
  background: theme.gray[50],
});
