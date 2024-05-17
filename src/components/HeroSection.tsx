import { Assignment } from "@mui/icons-material";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";

const bgimage =
  "https://images.unsplash.com/photo-1518655048521-f130df041f66?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D";

export const HeroSection = () => {
  const isMobile = useMediaQuery("(max-width:750px)");
  
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100svh",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-aos="fade"
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        src={bgimage}
        alt=""
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: isMobile? "center": "left",
        }}
      >
        <Stack gap={3} sx={{alignItems: isMobile? "center": "left",}} color={"black"}>
          <Typography variant="h2" sx={{ fontWeight: "bold", fontFamily: "cursive"}}>
            Dipesh Adelkar
          </Typography>
          <Typography variant="h6">
            Creating innovative web solutions with React and Material UI
          </Typography>
          <Button
            variant="contained"
            startIcon={<Assignment />}
            sx={{ borderRadius: "50px", width: "200px" }}
          >
            Check Cv
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
