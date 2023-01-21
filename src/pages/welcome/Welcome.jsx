import { tokens } from "../../theme";
import { Box, Typography, useTheme } from "@mui/material";
import SportsSoccerOutlinedIcon from "@mui/icons-material/SportsSoccerOutlined";
import Description from "./Descpription";
import ImageSlider from "./ImageSlider";

const Welcome = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        display: "grid",
        gap: "20px",
        gridAutoRows: "120px",
        gridTemplateColumns: {lg: "repeat(6, 1fr)", xl: "repeat(12, 1fr)"}
      }}
    >
      {/* ROW 1 */}
      <Box 
        sx={{
          gridColumn: {lg: "span 6", xl: "span 12"},
        }}

      ></Box>

      {/* ROW2 */}
      <Description />

      {/* IMAGE SLIDER */}
      <ImageSlider />
    </Box>
  );
};

export default Welcome;
