import { Box, Typography, useTheme, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleMode = () => {
    colorMode.toggleColorMode();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: "20px",
        backgroundColor: colors.primary[800],
        borderBottom: `1px solid ${colors.primary[700]}`,
      }}
    >
      {/* LOGO */}
      <Box
        sx={{
          display: "flex",
          p: "5px",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            type: "button",
            p: "5px",
          }}
        >
          <Groups2OutlinedIcon
            sx={{
              fontSize: "40px",
              // mr: "6px",
            }}
          />
        </IconButton>
        <Typography
          variant="h2"
          sx={{
            mr: "10px",
            fontWeight: "600",
          }}
        >
          team-finder.com
        </Typography>
        <Switch onChange={handleMode} />
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </Box>

      {/* BUTTONS */}
      <Box>
        <Button
          variant="outlined"
          sx={{
            fontSize: "16px",
            mr: "10px",
          }}
        >
          Sign In
        </Button>
        <Button
          variant="contained"
          sx={{
            fontSize: "16px",
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
