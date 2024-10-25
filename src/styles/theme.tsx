import { createTheme, colors } from "@mui/material";
// import { red } from "@mui/material/colors";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  cssVariables: true,
  typography: {
    fontFamily: "Open Sans",
  },
  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

export default theme;
