import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";

const SignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            height: "50vh",
            border: `1px solid ${colors.primary[700]}`,
            borderRadius: "10px",
            mt: "100px",
            width: "50vh",
            backgroundColor: `${colors.primary[800]}`
          }}
        >
          SingIn
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
