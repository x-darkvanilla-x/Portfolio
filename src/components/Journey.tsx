import { AccountBalance, School, Work } from "@mui/icons-material";
import { Avatar, Stack, Typography, useMediaQuery } from "@mui/material";

function getRandomLightColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 21) + 80;
  const lightness = Math.floor(Math.random() * 21) + 70;
  const opacity = 1;
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
}

const journeydata = [
  {
    icon: <Work />,
    color: getRandomLightColor(),
    title: "Experience",
    year: "2022-2023",
    content:
      "Completed one month Internship in React Js with Internity Foundation",
  },
  {
    icon: <School />,
    color: getRandomLightColor(),
    title: "Graduation at Sahyog College, Thane",
    year: "2022-Present",
    content:
      "Completed one month Internship in React Js with Internity Foundation",
  },
  {
    icon: <AccountBalance />,
    color: getRandomLightColor(),
    title: "Higher Education",
    year: "2021",
    content:
      "I have completed my higher education from HKIS with major subjects as Physics,Chemistry & Maths with 85% merit in CBSE board.",
  },
  {
    icon: <Work />,
    color: getRandomLightColor(),
    title: "Internship",
    year: "",
    content:
      "Completed one month Internship in React Js with Internity Foundation",
  },
];

export const Journey = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack gap={2} margin={"50px"}>
        <Typography variant={isMobile ? "body1" : "h6"}>MY JOURNEY</Typography>

        <Stack display={"flex"} flexWrap={"wrap"} direction={"row"} gap={3}>
          {journeydata.map((item) => (
            <Stack sx={{ padding: "30px", width: "100%", backgroundColor: "#F1F2F2"}}>
                <Stack gap={2}>
                  <Stack direction={isMobile? "column" : "row"} alignItems="center" gap={1.5}>
                    <Avatar sx={{backgroundColor: item.color, padding: "5px", '& > *': { color: 'black' }}}>
                      {item.icon}
                    </Avatar>
                    <Typography variant="h6" textAlign={isMobile? "center" : "left"}>{item.title}</Typography>
                    <Typography variant="body2"  color={"gray"}>{item.year}</Typography>
                  </Stack>

                  <Typography variant={isMobile? "body2": "body1"}  textAlign={isMobile? "center" : "left"}>{item.content}</Typography>
                </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
