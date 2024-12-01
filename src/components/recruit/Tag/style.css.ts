import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "8px 12px",
  background: theme.white,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
  borderRadius: "8px",
  border: `0.8px solid var(--Gray-Gray100, ${theme.gray[100]})`,
  cursor: "pointer",
});

export const title = style({
  ...font.p2,
  color: "#000",
});
