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
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="120px"
      gap="20px"
    >
      {/* ROW 1 */}
      <Box gridColumn="span 12"></Box>

      {/* ROW2 */}
      <Description />

      {/* IMAGE SLIDER */}
      <ImageSlider />
    </Box>
  );
};

export default Welcome;
