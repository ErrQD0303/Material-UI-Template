import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.status.danger,
}));

const StyledPalletBox = styled(Box)(({ theme }) => ({
  height: "300px",
  width: "300px",
  backgroundColor: theme.palette.neutral?.main,
}));

function MuiResponsiveness() {
  return (
    <>
      <Box
        component="div"
        sx={{
          height: "300px",
          width: {
            xs: 100, // 0
            sm: 200, // 600
            md: 300, // 900
            lg: 400, // 1200
            xl: 500, // 1536
          },
          backgroundColor: "secondary.main", // Your custom "neutral.main" is valid, but not "neutral.dark", "neutral.light"
        }}
      ></Box>
      <StyledBox />
      <StyledPalletBox />
    </>
  );
}

export default MuiResponsiveness;
