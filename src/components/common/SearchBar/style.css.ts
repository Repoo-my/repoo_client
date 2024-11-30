import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const searchBar = style({
  padding: "8px 16px",
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  border: `1px solid ${theme.gray[100]}`,
  background: theme.white,
  gap: "8px",
  width: "320px",
});

export const input = style({
  ...font.p3,
  width: "100%",
  "::placeholder": {
    color: theme.gray[300],
  },
});
