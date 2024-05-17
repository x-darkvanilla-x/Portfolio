import { Stack } from "@mui/material"
import { HeroSection } from "./HeroSection"
import { Work } from "./Work"
import { About } from "./About"
import { Services } from "./Services"
import { Journey } from "./Journey"

export const Mainpage = () => {
  
  return (
    <> 
        <Stack width={"100%"} sx={{ flex: "1 1 auto", overflowY: "auto" }}>
            <HeroSection />
            <Work />
            <About />
            <Services />
            <Journey />
        </Stack>
    </>
  )
}
