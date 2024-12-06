import { style } from "@vanilla-extract/css";
import theme from "@/ui/styles/theme.css";
import { font } from "@/ui/styles/font.css";

export const layout = style({
  padding: "12px 20px 12px 20px",
  width: "100%",
  alignItems: "center",
  overflowY: "auto",
  borderRadius: "8px",
  border: `1px solid ${theme.gray[100]}`,
  display: "flex",
  justifyContent: "space-between",
});

export const input = style({
  ...font.p1,
  color: theme.black,
  width: "30%",
  border: "none",
  outline: "none",
  "::placeholder": {
    color: theme.gray[400],
  },
});
