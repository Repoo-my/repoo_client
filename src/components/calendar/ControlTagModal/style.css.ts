import { font } from "@/ui/styles/font.css";
import theme from "@/ui/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const container = style({
  cursor: "default !important",
  zIndex: "5",
  position: "absolute",
  top: "0",
  left: "70px",
  width: "16vw",
  display: "flex",
  flexDirection: "column",
  borderRadius: "8px",
  minHeight: "72px",
  background: theme.white,
  boxShadow: "0px 4px 20px 0px rgba(111, 111, 111, 0.25)",
});

export const optionSearchBar = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  width: "100%",
  padding: "7px 12px",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  background: theme.gray[50],
});

export const selectedOptionList = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

export const selectedOptionItem = style({
  padding: "2px 8px",
  background: theme.gray[100],
  borderRadius: "4px",
  ...font.caption,
  color: theme.black,
});

export const searchInput = style({
  ...font.p3,
  "::placeholder": {
    color: theme.gray[400],
  },
  background: "none",
});

export const selectOrCreate = style({
  padding: "9px 16px",
  ...font.caption,
  color: theme.gray[500],
});

export const createdOptionList = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "0 8px 16px",
});

export const createdOptionItem = style({
  width: "100%",
  padding: "5px 8px",
  display: "flex",
  justifyContent: "space-between",
  cursor: "pointer",
  ":hover": {
    background: theme.gray[50],
  },
  borderRadius: "4px",
});

export const createdOptionContent = style({
  padding: "2px 8px",
  background: theme.gray[100],
  borderRadius: "4px",
  width: "max-content",
  ...font.caption,
  color: theme.black,
});
