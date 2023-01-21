import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";

const ImageSlider = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        sx={{
          gridColumn: "span 6",
          gridRow: "span 4",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridAutoRows: "60px",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            gridColumn: {
              xs: "span 1",
              sm: "span 2",
              md: "span 2",
              lg: "span 2",
              xl: "span 1",
            },
            gridRow: "span 8",
          }}
        ></Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 4",
              sm: "span 2",
              md: "span 2",
              lg: "span 2",
              xl: "span 4",
            },
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridAutoRows: "80px",
            gap: "10px",
          }}
        >
          <Box
            sx={{
              gridRow: {
                xs: "span 2",
                sm: "span 3",
                md: "span 4",
                lg: "span 4",
                xl: "span 4",
              },
              gridColumn: "span 1",
              borderRadius: "10px",
              border: `2px solid ${colors.primary[100]}`,
            }}
          >
            <img
              className="welcome-img"
              src="../../../images/welcome-img-2.jpg"
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
            {/* SLIDER DOTS */}
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "15px",
                },
                aspectRatio: "1/1",
                m: "0 5px 0 5px",
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "15px",
                },
                aspectRatio: "1/1",
                m: "0 5px 0 5px",
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: {
                  xs: "10px",
                  sm: "12px",
                  md: "14px",
                  lg: "14px",
                  xl: "15px",
                },
                aspectRatio: "1/1",
                m: "0 5px 0 5px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: {
              xs: "span 1",
              sm: "span 2",
              md: "span 2",
              lg: "span 2",
              xl: "span 1",
            },
            gridRow: "span 8",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          gridColumn: "span 6",
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "inline",
          },
        }}
      ></Box>
    </>
  );
};

export default ImageSlider;
