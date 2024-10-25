import { Button, Theme, useTheme } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function CustomButton({ children }: Props) {
  const theme: Theme = useTheme();
  const defaultPadding = parseFloat(theme.spacing(1));
  const hoverPadding = defaultPadding - 1;
  return (
    <Button
      variant="contained"
      color="secondary"
      sx={{
        padding: `${defaultPadding}px`, // Set initial padding
        transition: "300ms color shadow",
        ":hover": {
          backgroundColor: theme.palette.secondary.contrastText, // Hover background
          color: theme.palette.secondary.main, // Hover text color
          border: "1px solid", // Set transparent border initially
          borderColor: theme.palette.secondary.main, // Border color on hover
          padding: `${hoverPadding}px`, // Decrease padding on hover
        },
      }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
