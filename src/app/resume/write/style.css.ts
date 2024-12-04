import { style } from "@vanilla-extract/css";
import theme from "@/ui/styles/theme.css";
import { font } from "@/ui/styles/font.css";

export const layout = style({
  padding: "120px 52px",
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
});

export const title = style({
  ...font.H1,
  color: theme.black,
  "::placeholder": {
    color: theme.gray[300],
  },
});
