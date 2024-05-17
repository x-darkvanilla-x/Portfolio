import { Card, Stack, Typography, useMediaQuery } from "@mui/material";

const data = [
  {
    id: 1,
    title: "React",
    color: "#61DAFB", // Blue
    description:
      "React is a JavaScript library for building user interfaces, developed by Facebook.",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  },
  {
    id: 2,
    title: "Angular",
    color: "#DD0031", // Red
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript.",
    imageUrl: "https://dac.digital/wp-content/uploads/2023/05/angular-logo-1-optimized.png",
  },
  {
    id: 4,
    title: "HTML",
    color: "#E34F26", // Orange
    description:
      "HTML is the standard markup language for documents designed to be displayed in a web browser.",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png",
  },
  {
    id: 5,
    title: "CSS",
    color: "#264DE4", // Blue
    description:
      "CSS is a style sheet language used for describing the presentation of a document written in HTML.",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  },
  {
    id: 6,
    title: "Python",
    color: "#3776AB", // Blue
    description:
      "Python is an interpreted, high-level and general-purpose programming language.",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
  },
  {
    id: 7,
    title: "Java",
    color: "#007396", // Blue
    description:
      "Java is a high-level, class-based, object-oriented programming language.",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/226/226777.png",
  },
  {
    id: 8,
    title: "C++",
    color: "#00599C", // Blue
    description:
      "C++ is a general-purpose programming language created as an extension of the C programming language.",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png",
  },
];

export const Services = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <Stack gap={2} margin={"50px"}>
        <Typography variant={isMobile ? "body1" : "h6"}>WHAT I DO?</Typography>
        <Typography variant={isMobile ? "h5" : "h4"}>HERE ARE SOME OF MY EXPERTISE</Typography>

        {/* 
        <Stack gap={3} direction={"row"} flexWrap={"wrap"}>
          {skills.map((skill, index) => (
            <Card
              key={index}
              sx={{
                borderBottomStyle: "solid",
                borderBottomWidth: "3px",
                borderBottomColor: getRandomLightColor(),
              }}
            >
              <CardContent>
                {skill.icon}
                <Typography variant="h6">{skill.title}</Typography>
                <Typography variant="body2" sx={{ textTransform: "uppercase" }}>
                  {skill.skillsList}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        */}

        <Stack
          gap={3}
          sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {data.map((item) => (
            <Card
              key={item.id}
              sx={{
                width: "280px",
                borderRadius: "10px",
              }}
            >
              <Stack>
                <Stack display={"flex"} flexDirection={"row"} gap={1}>
                  <Stack
                    sx={{
                      width: "80px",
                      minHeight: "150px",
                      backgroundColor: "black",
                      borderRightWidth: "5px",
                      borderRightStyle: "solid",
                      borderRightColor: item.color,
                      display: "flex",
                      alignItems: "center", 
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.imageUrl}
                      alt=""
                      style={{
                        width: "50px",
                        padding: "10px",
                      }}
                    />
                  </Stack>
                  <Stack gap={0.5} sx={{ padding: "10px" }}>
                    <Typography variant="h6" sx={{ color: item.color }}>
                      {item.title}
                    </Typography>
                    <Typography variant="caption">
                      {item.description}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Card>
          ))}
        </Stack>
      </Stack>
    </>
  );
};
