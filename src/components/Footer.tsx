import { Copyright, Favorite } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Stack gap={2} margin={"50px"}>
      <Typography variant="body2" textAlign={"center"}>
        <Copyright fontSize="small" sx={{ verticalAlign: "middle" }} /> Dipesh
        Adelkar, 2024 All rights reserved
      </Typography>
    </Stack>
  );
};
