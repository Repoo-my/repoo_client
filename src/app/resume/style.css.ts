import { font } from "@/ui/styles/font.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "120px 52px",
  width: "100%",
  height: "100vh",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
});

export const title = style({
  marginBottom: "24px",
});

export const actionContainer = style({
  display: "flex",
  justifyContent: "flex-end",
  marginBottom: "24px",
  gap: "12px",
});

export const uploadButton = style({
  padding: "8px 16px",
  fontSize: "14px",
  border: "1px solid #ddd",
  borderRadius: "4px",
  backgroundColor: "#f9f9f9",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#eee",
  },
});

export const createButton = style({
  padding: "8px 16px",
  fontSize: "14px",
  border: "none",
  borderRadius: "4px",
  backgroundColor: "#333",
  color: "#fff",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#555",
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
  padding: "16px",
  border: "1px solid #eee",
  borderRadius: "8px",
  backgroundColor: "#fafafa",
  ":hover": {
    backgroundColor: "#f4f4f4",
  },
});

export const resumeTitle = style({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
});

export const resumeDate = style({
  fontSize: "12px",
  color: "#888",
});

export const actionLinks = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

export const downloadLink = style({
  fontSize: "14px",
  color: "#007bff",
  cursor: "pointer",
  background: "none",
  border: "none",
  textDecoration: "underline",
  ":hover": {
    textDecoration: "none",
  },
});

export const deleteLink = style({
  fontSize: "14px",
  color: "#ff4d4f",
  cursor: "pointer",
  background: "none",
  border: "none",
});
