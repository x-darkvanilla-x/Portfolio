import { Email, Favorite, Instagram } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { FC } from "react";

interface SidebarProps {
  size?: number | string;
  pad?: number | string;
}

export const Sidebar: FC<SidebarProps> = ({ size, pad }) => {
  return (
    <>
      <Stack
        alignItems={"center"}
        gap={2}
        sx={{ padding: pad, flex: "0 0 auto", overflowY: "auto", width: size }}
      >
        <Stack alignItems={"center"}>
          <Typography variant="body2">#programmer_life</Typography>
          <Typography variant="body2">#hello_world</Typography>
          <Typography variant="body2">#coding</Typography>
        </Stack>

        <Typography variant="h6">Dipesh Adelkar</Typography>
        <Box
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/122479676?v=4"
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </Box>

        <Typography variant="body2">
          <Email sx={{ verticalAlign: "middle" }} /> dipesh.adelkar@gmail.com
        </Typography>

        <Stack>
          <Button>Projects</Button>
          <Button>About</Button>
          <Button>Interest</Button>
          <Button>Education</Button>
        </Stack>

        <Stack direction={"row"} gap={1}>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
        </Stack>

        <Typography variant="body2" textAlign={"center"}>
          Made with{" "}
          <Favorite
            fontSize="small"
            sx={{ color: "red", verticalAlign: "middle" }}
          />{" "}
          Using React and Material Ui
        </Typography>
      </Stack>
    </>
  );
};
