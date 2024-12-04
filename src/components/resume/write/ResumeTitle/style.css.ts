import { style } from "@vanilla-extract/css";
import theme from "@/ui/styles/theme.css";
import { font } from "@/ui/styles/font.css";

export const title = style({
  ...font.H3,
  display: "flex",
  paddingBottom: "10px",
  borderBottom: `1px solid ${theme.gray[500]}`,
  width: "100%",
});
