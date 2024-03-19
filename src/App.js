import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import LandingPage from "./components/LandingPage";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      background: {
        default: "#161A33",
        dashboardContent: "#262D47",
      },
      text: {
        primary: "#FFFFFF",
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      mode: "light",
      background: {
        default: "#E9E9E9",
        dashboardContent: "#FFFFFF",
      },
      text: {
        primary: "#161A33",
      },
    },
  });

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <LandingPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </ThemeProvider>
  );
};

export default App;
