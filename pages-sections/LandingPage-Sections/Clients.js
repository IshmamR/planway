import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Avatar, CardMedia, Typography } from "@material-ui/core";
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Carousel from "nuka-carousel";

const useStyles = makeStyles(styles);

const projects = [
  {
    title: "Minsitry of education",
    img: "/img/essentials/ministry-of-education.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    title: "Demo project",
    img: "/img/essentials/ministry-of-home-affairs.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    title: "Demo project",
    img: "/img/essentials/ministry-of-local-government-and-rural-development.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    title: "Demo project",
    img: "/img/essentials/doposen.jpeg",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    rows: 2,
    // cols: 2,
  },
  {
    title: "Headdos",
    img: "/img/essentials/headdos.jpeg",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    rows: 2,
    // cols: 2,
  },
  {
    title: "Headdos",
    img: "/img/essentials/fembula.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    // rows: 2,
    cols: 2,
  },
  {
    title: "Headdos",
    img: "/img/essentials/tazree.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    // rows: 1,
    // cols: 2,
  },

  {
    title: "Headdos",
    img: "/img/essentials/learner_school.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    // rows: 1,
    // cols: 2,
  },
  {
    title: "Headdos",
    img: "/img/essentials/wellness_republic.png",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
    // rows: 2,
    // cols: 2,
  },
];

export default function ClientsSection() {
  const classes = useStyles();

  const theme = useTheme();
  const isDownSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.section}>
      <h3 className={classes.title} style={{ textAlign: "left" }}>
        Clients We have Worked With
      </h3>
      <div>
        <Carousel
          wrapAround
          slidesToShow={4}
          autoplay
          autoplayInterval={2000}
          cellAlign="center"
          defaultControlsConfig={{
            pagingDotsStyle: { display: "none" },
            nextButtonStyle: { display: "none" },
            prevButtonStyle: { display: "none" },
          }}
        >
          {projects.map((item) => (
            <img
              key={item.img}
              src={item.img}
              height="120"
              width="240"
              alt={item.title}
              title={item.title}
              loading="lazy"
              draggable={false}
              style={{
                border: "1px solid #dadada",
                objectFit: "contain",
              }}
            />
          ))}
        </Carousel>
        {/* <ImageList
          sx={{ width: "100%" }}
          variant="quilted"
          cols={isDownSm ? 1 : 4}
          rowHeight={120}
          gap={isDownSm ? 4 : 2}
        >
          {projects.map((item) => (
            <ImageListItem
              key={item.img}
              cols={isDownSm ? 1 : item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 120, item.rows, item.cols)}
                alt={item.title}
                title={item.title}
                loading="lazy"
                style={{
                  border: "1px solid #dadada",
                  objectFit: "contain",
                }}
              />
            </ImageListItem>
          ))}
        </ImageList> */}
      </div>
    </div>
  );
}

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
