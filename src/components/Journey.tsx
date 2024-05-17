import { AccountBalance, School, Work } from "@mui/icons-material";
import { Avatar, Link, Stack, Typography, useMediaQuery } from "@mui/material";

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
      "I Worked as a Freelance Graphic Designer For Aaliya Tailoring Institute Mumbra, Mumbai. Designed promotional materials and branding elements for Aaliya Tailoring Institute, enhancing their visual identity and market presence",
  },
  {
    icon: <School />,
    color: getRandomLightColor(),
    title: "Graduation at Sahyog College, Thane",
    year: "2022-Present",
    content:
      "I'm Currently Pursing Bachelors in Information Technology with an average of 9.7 CGPA",
  },
  {
    icon: <AccountBalance />,
    color: getRandomLightColor(),
    title: "Higher Education",
    year: "2021",
    content:
      "I have completed my higher education from MatoShree College of Science with major subjects as Physics,Chemistry & Maths in HSC board.",
  },
  {
    icon: <Work />,
    color: getRandomLightColor(),
    title: "Internship",
    year: "",
    content: "Completed Web Development Internships from : ",
    links: [
      { name: "Internpe", url: "https://internpe.in/" },
      { name: "Codesoft", url: "https://www.codsoft.in/" },
      { name: "OctaNet", url: "https://octanet.in/" },
      { name: "TechnoHacks", url: "https://technohacks.co.in/" },
    ],
  },
];

export const Journey = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack gap={2} margin={"50px"}>
        <Typography variant={isMobile ? "body1" : "h6"}>MY JOURNEY</Typography>

        <Stack display={"flex"} flexWrap={"wrap"} direction={"row"} gap={3}>
          {journeydata.map((item, index) => (
            <Stack
              key={index}
              sx={{
                padding: "30px",
                width: "100%",
                backgroundColor: "#F1F2F2",
              }}
            >
              <Stack gap={2}>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  alignItems="center"
                  gap={1.5}
                >
                  <Avatar
                    sx={{
                      backgroundColor: item.color,
                      padding: "5px",
                      "& > *": { color: "black" },
                    }}
                  >
                    {item.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    textAlign={isMobile ? "center" : "left"}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color={"gray"}>
                    {item.year}
                  </Typography>
                </Stack>
                <Typography
                  variant={isMobile ? "body2" : "body1"}
                  textAlign={isMobile ? "center" : "left"}
                >
                  {item.content}
                </Typography>
                {item.links && (
                  <Stack direction={"row"} gap={1} flexWrap={"wrap"}>
                    {item.links.map((link, linkIndex) => (
                      <Typography
                        variant={isMobile ? "body2" : "body1"}
                        textAlign={isMobile ? "center" : "left"}
                      >
                        <Link href={link.url} target="_blank">
                          {link.name}
                        </Link>{" "}
                        {linkIndex < item.links.length - 1 && "|"}
                      </Typography>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
