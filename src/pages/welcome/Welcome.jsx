import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";

const Welcome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="120px"
      gap="20px"
    >
      {/* ROW 1 */}
      <Box gridColumn="span 12"></Box>

      {/* ROW2 */}
      <Box
        gridColumn="span 6"
        gridRow="span 3"
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gridAutoRows="60px"
        gap="10px"
      >
        {/* DESCRIPTION */}
        <Box gridColumn="span 4"></Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography fontSize="50px" fontWeight="600">
            Don't wait. Start looking!
          </Typography>
        </Box>

        {/* ICONS ROW 1 */}
        <Box></Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box
            sx={{
              border: `1px solid ${colors.gray[200]}`,
              borderRadius: "10px",
              p: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" mr="5px">
              Football
            </Typography>
            <SportsSoccerOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
          <Box
            sx={{
              border: `1px solid ${colors.gray[200]}`,
              borderRadius: "10px",
              p: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" mr="5px">
              Football
            </Typography>
            <SportsSoccerOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
          <Box
            sx={{
              border: `1px solid ${colors.gray[200]}`,
              borderRadius: "10px",
              p: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" mr="5px">
              Football
            </Typography>
            <SportsSoccerOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
        </Box>
        <Box></Box>
        {/* ICONS ROW 2 */}
        <Box></Box>
        <Box
          gridColumn="span 2"
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Box
            sx={{
              border: `1px solid ${colors.gray[200]}`,
              borderRadius: "10px",
              p: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" mr="5px">
              Football
            </Typography>
            <SportsSoccerOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
          <Box
            sx={{
              border: `1px solid ${colors.gray[200]}`,
              borderRadius: "10px",
              p: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h3" mr="5px">
              Football
            </Typography>
            <SportsSoccerOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
        </Box>
        <Box></Box>
      </Box>

      {/* IMAGE SLIDER */}
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
              backgroundColor: colors.gray[100],
            }}
          ></Box>
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
                m: "0 5px 0 5px"
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                m: "0 5px 0 5px"
              }}
            />
            <Box
              sx={{
                backgroundColor: colors.primary[100],
                borderRadius: "50%",
                width: "15px",
                height: "15px",
                m: "0 5px 0 5px"
              }}
            />
          </Box>
        </Box>
        <Box gridColumn="span 1" gridRow="span 8"></Box>
      </Box>
      <Box gridColumn="span 6"></Box>
    </Box>
  );
};

export default Welcome;
