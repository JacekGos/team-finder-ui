import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';

const Description = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
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
              m: "0 5px 0 5px"
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
              m: "0 5px 0 5px"
            }}
          >
            <Typography variant="h3" mr="5px">
              Volleyball
            </Typography>
            <SportsVolleyballOutlinedIcon
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
              m: "0 5px 0 5px"
            }}
          >
            <Typography variant="h3" mr="5px">
              Basketball
            </Typography>
            <SportsBasketballOutlinedIcon
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
              m: "0 5px 0 5px"
            }}
          >
            <Typography variant="h3" mr="5px">
              Jogging
            </Typography>
            <DirectionsRunOutlinedIcon
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
              m: "0 5px 0 5px"
            }}
          >
            <Typography variant="h3" mr="5px">
              More...
            </Typography>
            <GroupsOutlinedIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: "24px",
              mr: "10px",
              width: "150px",
            }}
          >
            START
            <ArrowForwardIosOutlinedIcon sx={{
               ml: "15px"
            }} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Description;
