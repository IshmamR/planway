import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import Card from "/components/Card/Card.js";
import CardBody from "/components/Card/CardBody.js";
import CardFooter from "/components/Card/CardFooter.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Avatar, CardMedia, Typography } from "@material-ui/core";
import {
  Dialog,
  DialogContent,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

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
  },
  {
    id: 2,
    img: "/img/portfolio/tazree.jpeg",
    title: "Tazree",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    id: 3,
    img: "/img/portfolio/fembula.jpeg",
    title: "Fembula",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    id: 4,
    img: "/img/portfolio/headdos.jpeg",
    title: "Headdos",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    id: 5,
    img: "https://neemo-react.envytheme.com/images/project/5.jpg",
    title: "Demo project",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    id: 6,
    img: "/img/portfolio/ula.png",
    title: "ULA",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
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
        <DialogContent>{projectModal?.title}</DialogContent>
      </Dialog>
    </div>
  );
}
