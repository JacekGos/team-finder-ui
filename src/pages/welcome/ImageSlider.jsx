import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

const ImageSlider = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        gridColumn="span 6"
        gridRow="span 4"
        display="grid"
        gridTemplateColumns="repeat(6, 1fr)"
        gridAutoRows="60px"
        gap="10px"
      >
        <Box gridColumn="span 1" gridRow="span 8"></Box>
        <Box
          gridColumn="span 4"
          display="grid"
          gridTemplateColumns="repeat(1, 1fr)"
          gridAutoRows="80px"
          gap="10px"
        >
          <Box
            gridColumn="span 1"
            gridRow="span 5"
            sx={{
              borderRadius: "10px",
              border: `2px solid ${colors.primary[100]}`,
            }}
          >
            <img
              className="welcome-img"
              src="../../../images/welcome-img-3.jpg"
              alt="welcome-page"
            />
          </Box>
          <Box
            gridColumn="span 1"
            gridRow="span 1"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                m: "0 5px 0 5px",
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                m: "0 5px 0 5px",
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                m: "0 5px 0 5px",
              }}
            />
          </Box>
        </Box>
        <Box gridColumn="span 1" gridRow="span 8"></Box>
      </Box>
      <Box gridColumn="span 6"></Box>
    </>
  );
};

export default ImageSlider;
