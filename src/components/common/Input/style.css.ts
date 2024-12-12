import { style } from "@vanilla-extract/css";
import theme from "@/ui/styles/theme.css";
import { font } from "@/ui/styles/font.css";

export const layout = style({
  display: "flex",
  flexDirection: "column",
});

export const label = style({
  ...font.p2,
  color: theme.black,
  marginBottom: "5px",
});

export const input = style({
  ...font.p1,
  color: theme.black,
  padding: "12px 20px",
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: "8px",
  width: "100%",
  "::placeholder": {
    color: theme.gray[400],
  },
});
