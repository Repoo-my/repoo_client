import { createGlobalTheme } from "@vanilla-extract/css";

const theme = createGlobalTheme(":root", {
  light: {
    orange: "#FFDCC6",
    rose: "#FFC8B4",
    green: "#D2F1DD",
    blue: "#C8D8FC",
    yellow: "#FFF7CF",
    purple: "#DDCCFB",
    red: "#FBC8C8",
    charcoal: "#9E9E9F",
  },
  primary: {
    orange: "#FFAF77",
    rose: "#FF7C99",
    green: "#95DDAF",
    blue: "#7CA3F7",
    yellow: "#FFE875",
    purple: "#AF87F5",
    red: "#F67C7D",
    charcoal: "#707083",
  },
  gray: {
    50: "#F6F6F8",
    100: "#E5E5E5",
    200: "#D8D8D8",
    300: "#C5C5C5",
    400: "#A2A2A2",
    500: "#787878",
    600: "#5A5A5A",
  },
  white: "#FFFFFF",
  black: "#171719",
  stressRed: "#F73435",
});

export default theme;
