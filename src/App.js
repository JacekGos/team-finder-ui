import { ColorModeContext, useMode } from "./theme";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, CssBaseline, Typography, Box } from "@mui/material";
import Topbar from './pages/global/Topbar';
import { tokens } from "./theme";
import Welcome from './pages/welcome/Welcome'
import SignIn from "./pages/sign-in/SignIn";

function App() {
  const [theme, colorMode] = useMode();
  // const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/login" element={<SignIn />}/>
              </Routes>
            </main>

          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
