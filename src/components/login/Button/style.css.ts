import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const loginButton = style({
  padding: "11px 12px",
  width: "360px",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  borderRadius: "4px",
  background: theme.white,
  cursor: "pointer",
});

export const loginText = style({
  ...font.btn2,
  color: theme.black,
  width: "100%",
  textAlign: "center",
});
