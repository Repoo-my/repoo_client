import { style } from "@vanilla-extract/css";
import theme from "@/ui/styles/theme.css";
import { font } from "@/ui/styles/font.css";

export const layout = style({
  display: "flex",
  width: "100%",
  padding: "20px",
  flexDirection: "column",
  gap: "16px",
  borderRadius: "8px",
  border: `1px solid ${theme.gray[100]}`,
});

export const companyName = style({
  ...font.H4,
  color: theme.black,
  "::placeholder": {
    color: theme.gray[400],
  },
});

export const Detail = style({
  ...font.p1,
  color: theme.black,
  "::placeholder": {
    color: theme.gray[400],
  },
});

export const companyBox = style({
  display: "flex",
  padding: "16px",
  flexDirection: "column",
  gap: "4px",
  backgroundColor:theme.gray[50],
  borderRadius:"8px",

});

export const title = style({
  ...font.H5,
  color: theme.black,
});

export const content = style({
  ...font.p2,
  color: theme.black,
  backgroundColor: "transparent",
  resize: "none",
  outline: "none",
  height:"auto",
  "::placeholder": {
    color: theme.gray[400],
  },
});