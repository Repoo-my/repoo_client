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

export const section = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
});

export const flexContainer = style({
  width: "100%",
  display: "flex",
  gap: "50px",
});

export const profileImgContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
});

export const profileImg = style({
  height: "240px",
  width: "200px",
  backgroundColor: "#555",
  borderRadius: "12px",
  border: `1px solid ${theme.gray[200]}`,
});

export const label = style({
  ...font.p2,
  color: theme.black,
});

export const addressFlex = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const essential = style({
  ...font.p2,
  color: theme.gray[400],
});

export const addressGap = style({
  display: "flex",
  gap: "8px",
  flexDirection: "column",
});
