import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import LinkIcon from "@mui/icons-material/Link";

const projects = [
  {
    websiteURL: "",
    id: 1,
    image:
      "https://assets-global.website-files.com/5b5729421aca332c60585f78/616f2d81cb0e87db7f361a15_realtor.com-real-estate-landing-page-example.png",
    title: "LivSpace Landing Page",
    description: "React + Material Ui + AOS",
    shortDescription: "Short description 1",
    color: getRandomLightColor(),
  },
  {
    websiteURL: "https://github.com/x-darkvanilla-x/Weather-App",
    id: 2,
    image:
      "https://github.com/x-darkvanilla-x/Weather-App/raw/main/src/Videos/WeatherApp.png",
    title: "Website 2",
    description: "WeatherComponent is a React component that allows users to display current weather information based on their geolocation or a specific location.",
    shortDescription: "Short description 2",
    color: getRandomLightColor(),
  },
  {
    websiteURL: "",
    id: 3,
    image:
      "https://neilpatel.com/wp-content/uploads/2023/06/Best_landing_pages3-700x397.jpg",
    title: "Website 3",
    description: "Another description here.",
    shortDescription: "Short description 3",
    color: getRandomLightColor(),
  },
  {
    websiteURL: "",
    id: 4,
    image: "https://themewagon.com/wp-content/uploads/2020/03/tropika-1.jpg",
    title: "Website 4",
    description: "Another description here.",
    shortDescription: "Short description 4",
    color: getRandomLightColor(),
  },
];

const moreprojects = [
  {
    websiteURL: "",
    id: 1,
    image:
      "https://code.visualstudio.com/assets/docs/java/java-project/projectmanager-overview.png",
    title: "Java Project",
    description: "desc1",
    color: getRandomLightColor(),
  },
  {
    websiteURL: "",
    id: 2,
    image:
      "https://ahradwani1.files.wordpress.com/2021/11/screenshot_20211101-093018_qpython-3l.jpg",
    title: "Python Project",
    description: "Another description here.",
    color: getRandomLightColor(),
  },
  {
    websiteURL: "",
    id: 3,
    image:
      "https://uploads-ssl.webflow.com/5e74f831dbb70bf312ac9fac/5f52627429452b05949e0595_hero.png",
    title: "CPP Project",
    description: "Another description here.",
    color: getRandomLightColor(),
  },
  {
    websiteURL: "",
    id: 4,
    image:
      "https://femaletechentrepreneur.com/wp-content/uploads/2020/04/New_flutter_project.png",
    title: "Flutter Project",
    description: "Another description here.",
    color: getRandomLightColor(),
  },
];

function getRandomLightColor() {
  const hue = Math.floor(Math.random() * 360);
  const saturation = Math.floor(Math.random() * 21) + 80;
  const lightness = Math.floor(Math.random() * 21) + 70;
  const opacity = 0.5;
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${opacity})`;
}

export const Work = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div id="projects">

      <Stack gap={2} margin={"50px"}>
        <Typography variant={isMobile ? "body1" : "h6"}>MY WORK</Typography>
        <Typography variant={isMobile ? "h5" : "h4"}>
          WEB DEVELOPMENT PROJECTS
        </Typography>

        <Stack direction={"row"} flexWrap={"wrap"} gap={3} margin={"20px 0px"}>
          {projects.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: "400px",
                borderRadius: isMobile ? "5px" : "10px",
                marginBottom: "20px",
                bgcolor: item.color,
              }}
            >
              <CardActionArea>
                <a
                  href={item.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      aspectRatio: isMobile ? "4/2" : "16/9",
                    }}
                    image={item.image}
                  />
                </a>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={isMobile ? "body1" : "h6"}
                    fontWeight={isMobile ? "bold" : "none"}
                    component="div"
                  >
                    {item.title}{" "}
                    <LinkIcon
                      sx={{ verticalAlign: "middle", float: "right" }}
                    />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Stack>

      <Stack gap={2} margin={"50px"}>
        <Typography variant={isMobile ? "h5" : "h4"}>
          PROGRAMMING PROJECTS
        </Typography>
        <Stack direction={"row"} flexWrap={"wrap"} gap={3} margin={"20px 0px"}>
          {moreprojects.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: "400px",
                borderRadius: isMobile ? "5px" : "10px",
                marginBottom: "20px",
                bgcolor: item.color,
              }}
            >
              <CardActionArea>
                <a
                  href={item.websiteURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      aspectRatio: isMobile ? "4/2" : "16/9",
                    }}
                    image={item.image}
                  />
                </a>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant={isMobile ? "body1" : "h6"}
                    fontWeight={isMobile ? "bold" : "none"}
                    component="div"
                  >
                    {item.title}{" "}
                    <LinkIcon
                      sx={{ verticalAlign: "middle", float: "right" }}
                    />
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};
