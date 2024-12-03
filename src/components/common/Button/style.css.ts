import { style } from "@vanilla-extract/css";
import theme from "@/ui/styles/theme.css";
import { font } from "@/ui/styles/font.css";

export const baseButton = style({
  padding: "8px 16px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  gap: "8px",
});

export const whiteButton = style({
  backgroundColor: theme.white,
  ...font.btn2,
  color: theme.black,
  border: `1px solid ${theme.gray[100]}`,
  ":hover": {
    backgroundColor: theme.gray[50],
  },
});

export const blackButton = style({
  backgroundColor: theme.gray[600],
  border: "none",
  ...font.btn2,
  color: theme.white,
  ":hover": {
    backgroundColor: theme.gray[500],
  },
});
