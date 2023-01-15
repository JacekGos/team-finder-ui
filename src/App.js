import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline, Typography, Box } from "@mui/material";
import { tokens } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  // const colors = tokens(theme.palette.mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          {/* <div className="app">
          <Box backgroundColor={colors.gray[100]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[200]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[300]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[400]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[500]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[600]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[700]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[800]}>
            <Typography variant="h1">App</Typography>
          </Box>
          <Box backgroundColor={colors.gray[900]}>
            <Typography variant="h1">App</Typography>
          </Box>
        </div> */}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
