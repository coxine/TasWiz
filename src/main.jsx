import "./index.css";

import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import ReactDOM from "react-dom/client";
import { green } from "@mui/material/colors";
import useMediaQuery from "@mui/material/useMediaQuery";

const RootComponent = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: green,
          secondary: green,
        },
      }),

    [prefersDarkMode],
  );



  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <App />
      <Footer />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>,
);
