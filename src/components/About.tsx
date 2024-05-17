import { Stack, Typography, useMediaQuery } from "@mui/material";

export const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack gap={2} margin={"50px"}>
        <Typography variant={isMobile ? "body1" : "h6"}>ABOUT ME</Typography>
        <Typography variant={isMobile ? "h5" : "h4"}>WHO AM I?</Typography>
        <Stack gap={3}>
          <Typography variant={isMobile ? "body2" : "body1"}>
            Greetings, everyone! I am Dipesh Mahesh Adelkar, I was born in
            Ratnagiri and brought up in Thane, Maharashtra. Currently, I am
            studying at Sahyog College in Thane, pursuing BSC in Information
            Technology. My passion lies in the realms of coding and web
            development, thanks to my family's unique blend of business and IT
            expertise that has provided me with a fertile ground for skill
            development.
          </Typography>

          <Typography variant={isMobile ? "body2" : "body1"}>
            Beyond the confines of academia, I find solace and inspiration in my
            hobbies. One of my greatest pastimes is indulging in video games, a
            pursuit that not only entertains but also sharpens my strategic
            thinking abilities. Additionally, coding serves as both a hobby and
            a creative outlet for me, fostering my critical thinking skills and
            enabling me to explore innovative solutions to complex problems.
          </Typography>

          <Typography variant={isMobile ? "body2" : "body1"}>
            In essence, I am a Mumbai native transplanted to Thane, on a quest
            to expand my horizons in the world of Information Technology. My
            academic journey is driven by a passion for coding, web development,
            and a rich family background that fuels my enthusiasm for these
            fields. Outside of the academic sphere, I find joy in the strategic
            challenges of video games and the intellectual stimulation that
            coding offers.
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};
