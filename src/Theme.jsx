import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
  palette: {
    mode: "dark",
    // text: {
    //   secondary: "red",
    // },
  },
  typography: {
    h1: {
      fontSize: "12px",
    },
  },
});

export default Theme;
