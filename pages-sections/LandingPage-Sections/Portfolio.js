import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import {
  Box,
  Dialog,
  DialogContent,
  ImageList,
  Typography,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Carousel from "nuka-carousel";

const useStyles = makeStyles(styles);

const projects = [
  {
    id: 1,
    img: "https://neemo-react.envytheme.com/images/project/1.jpg",
    title: "Vive education",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    images: [
      "/img/projects/vive_1.jpeg",
      "/img/projects/vive_2.jpeg",
      "/img/projects/vive_3.jpeg",
      "/img/projects/vive_4.jpeg",
      "/img/projects/vive_5.jpeg",
    ],
  },
  {
    id: 2,
    img: "/img/portfolio/tazree.jpeg",
    title: "Tazree",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    images: ["/img/projects/tazree.jpeg"],
    isWeb: true,
  },
  {
    id: 3,
    img: "/img/portfolio/fembula.jpeg",
    title: "Fembula",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    images: ["/img/projects/fembula_1.jpeg", "/img/projects/fembula_2.jpeg"],
    isWeb: true,
  },
  {
    id: 4,
    img: "/img/portfolio/headdos.jpeg",
    title: "Headdos",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    images: [
      "/img/projects/headdos_1.jpeg",
      "/img/projects/headdos_2.jpeg",
      "/img/projects/headdos_3.jpeg",
      "/img/projects/headdos_4.jpeg",
    ],
  },
  {
    id: 5,
    img: "https://neemo-react.envytheme.com/images/project/5.jpg",
    title: "Ride share",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    images: [
      "/img/projects/ride_share_1.jpeg",
      "/img/projects/ride_share_2.jpeg",
    ],
  },
  {
    id: 6,
    img: "/img/portfolio/ula.png",
    title: "ULA LTD.",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    images: [
      "/img/projects/ula_1.jpeg",
      "/img/projects/ula_2.jpeg",
      "/img/projects/ula_3.jpeg",
      "/img/projects/ula_4.jpeg",
    ],
  },
];

export default function PortfolioSection() {
  const [projectModal, setProjectModal] = useState(undefined);

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Some of our recent works</h2>
      <div>
        <ImageList variant="quilted" cols={3} gap={2} sx={{ pb: 4 }}>
          {projects.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                title={item.title}
                loading="lazy"
                style={{ cursor: "pointer" }}
                onClick={() => setProjectModal(item)}
              />
              <ImageListItemBar
                title={<Typography variant="h5">{item.title}</Typography>}
                subtitle={
                  <Typography variant="caption">{item.description}</Typography>
                }
                position="bottom"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>

      <Dialog
        fullWidth
        maxWidth="md"
        open={!!projectModal}
        onClose={() => setProjectModal(undefined)}
      >
        <DialogContent>
          <Box display="flex" flexDirection="row" gap={3}>
            <Box minWidth="50%" maxWidth="50%">
              {projectModal?.images ? (
                <Carousel
                  slidesToShow={projectModal?.isWeb ? 1 : 2}
                  cellSpacing={1}
                  animation="zoom"
                  wrapAround={projectModal.images.length > 1}
                  scrollMode="remainder"
                  style={{ width: "100%" }}
                >
                  {projectModal.images?.map((img) => (
                    <img
                      src={img}
                      key={img}
                      alt="..."
                      height="360"
                      style={{ width: "100%", objectFit: "contain" }}
                    />
                  ))}
                </Carousel>
              ) : null}
            </Box>
            <Box flex={1} py={2} maxWidth="50%">
              <Typography variant="h4">{projectModal?.title}</Typography>
              <Typography variant="body2">
                {projectModal?.description}
              </Typography>
              <Typography variant="body1" mt={1}>
                Tech stack: <strong>Django, React, Next</strong>
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}
