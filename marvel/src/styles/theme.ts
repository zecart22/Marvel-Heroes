import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      main: "#FFFF",
      main1: "#0A0404",
    },
    secondary: {
      main: "#EC1D24",
      main1: "#730000",
    },
    gray: {
      0: "#f5f5f5",
      10: "#F2ECEC",
      50: "#999999",
      100: "#e0e0e0",
      300: "#828282",
      600: "#333333",
    },
    green: {
      100: "#19F59A",
    },
    negative: {
      main: "#e60000",
    },
    warning: {
      main: "#ffcd07",
    },
    success: {
      main: "#168821",
    },
    information: {
      main: "#155BCB",
    },
  },
  textStyles: {
    h1: {
      fontSize: "26px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "bold",
    },
    headline: {
      fontSize: "16px",
      fontWeight: "regular",
    },
    body: {
      fontSize: "14px",
      fontWeight: "regular",
    },
    body600: {
      fontSize: "14px",
      fontWeight: "semibold",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "regular",
    },
  },
  fonts: {
    heading: "Monoton",
    body: "Roboto",
    bodySecondary: "Bungee",
  },
  styles: {
    global: {
      body: {
        bg: "primary.main",
        color: "gray.600",
      },
    },
  },
});

export default theme;
