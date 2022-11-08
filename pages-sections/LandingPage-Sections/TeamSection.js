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

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>OUR HARDWORKING TEAM</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/img/team/KHANDAKAR_ABU_SAIFE.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="600">
                  Khandakar Abu Saife
                </Typography>
                <Typography variant="caption">
                  Founder &amp; Managing Director
                </Typography>
              </CardContent>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image="/img/team/Mozahidur_Rahman.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="600">
                  Mozahidur Rahman
                </Typography>
                <Typography variant="caption">Project Manager</Typography>
              </CardContent>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
