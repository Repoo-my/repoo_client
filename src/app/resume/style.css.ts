import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "120px 52px",
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  ...font.H2,
  marginBottom: "24px",
});

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
});

export const actionContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "12px",
  gap: "12px",
});

export const uploadButton = style({
  ...font.btn2,
  padding: "8px 16px",
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: "8px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  ":hover": {
    backgroundColor: theme.gray[50],
  },
});

export const createButton = style({
  ...font.btn2,
  padding: "8px 16px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: theme.gray[600],
  color: "#fff",
  cursor: "pointer",
  ":hover": {
    backgroundColor: theme.gray[500],
  },
});

export const resumeList = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const resumeItem = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 24px",
  border: `1px solid ${theme.gray[100]}`,
  borderRadius: "8px",
  position: "relative",
});

export const resumeTitle = style({
  ...font.H4,
  color: theme.black,
});

export const resumeDate = style({
  ...font.p2,
  color: theme.gray[400],
});

export const actionLinks = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  opacity: 0,
  transition: "opacity 0.2s ease",
  ":hover": {
    cursor: "pointer",
  },
  selectors: {
    [`${resumeItem}:hover &`]: {
      opacity: 1,
    },
  },
});

export const downloadLink = style({
  fontSize: "14px",
  color: theme.black,
  cursor: "pointer",
  background: "none",
  border: "none",
});

export const deleteLink = style({
  fontSize: "14px",
  color: theme.stressRed,
  cursor: "pointer",
  background: "none",
  border: "none",
});
