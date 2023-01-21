import { Box, Typography, useTheme, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
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
        borderBottom: `1px solid ${colors.primary[600]}`,
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
        <Link to="/">
          <IconButton
            sx={{
              type: "button",
              p: "5px",
            }}
          >
            <Groups2OutlinedIcon
              sx={{
                // fontSize: "40px",
                fontSize: { xs: "30px", sm: "40px" },
                // mr: "6px",
              }}
            />
          </IconButton>
        </Link>
        <Typography
          variant="h2"
          sx={{
            mr: "10px",
            fontWeight: "600",
            display: { xs: "none", sm: "inline" },
          }}
        >
          TeamFinder.com
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
        <Link to="/login">
          <Button
            variant="outlined"
            sx={{
              fontSize: { sx: "13px", sm: "14px", md: "16px" },
              mr: "10px",
            }}
          >
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button
            variant="contained"
            sx={{
              fontSize: { sx: "13px", sm: "14px", md: "16px" },
            }}
          >
            Sign Up
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Topbar;
