import { useState } from "react";
import { Stack, useMediaQuery, IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Sidebar } from "./Sidebar";
import { Mainpage } from "./Mainpage";

export const Portfolio = () => {
  const isMobile = useMediaQuery("(max-width:750px)");
  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <Stack direction={isMobile ? "column" : "row"} sx={{ height: "100vh" }}>
        {isMobile && (
          <Stack direction="row" justifyContent="flex-end" p={1}>
            <IconButton onClick={toggleSidebar}>
              <Menu />
            </IconButton>
          </Stack>
        )}
        {isMobile && openSidebar && <Sidebar size={"100%"} pad={"50px 0px"} />}
        {!isMobile && <Sidebar size={250}  pad={"50px"}/>}
        <Mainpage />
      </Stack>
    </>
  );
};
