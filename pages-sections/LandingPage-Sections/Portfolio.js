import React from "react";
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

const useStyles = makeStyles(styles);

const projects = [
  {
    img: "/img/faces/avatar.jpg",
    title: "Demo project",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    img: "/img/faces/avatar.jpg",
    title: "Demo project",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
  {
    img: "/img/faces/avatar.jpg",
    title: "Demo project",
    description:
      "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site..",
    stack: "Django, React, Flutter",
    live: "https://google.com",
  },
];

export default function PortfolioSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Some of our recent works</h2>
      <div>
        <GridContainer>
          {projects.map((project) => (
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <CardMedia>
                  <img
                    variant="square"
                    src={project.img}
                    alt="..."
                    style={{
                      width: "80%",
                      objectFit: "contain",
                      margin: "auto",
                    }}
                    // className={imageClasses}
                  />
                </CardMedia>
                <h3 className={classes.cardTitle}>
                  {project.title}
                  <br />
                  <small className={classes.smallTitle}>{project.stack}</small>
                </h3>
                <CardBody style={{ paddingBottom: 0 }}>
                  <p className={classes.description}>{project.description}</p>
                </CardBody>
                <CardFooter
                  className={classes.justifyCenter}
                  style={{ paddingTop: 0 }}
                >
                  <Button
                    justIcon
                    color="transparent"
                    href={project.live}
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fa fa-globe"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
