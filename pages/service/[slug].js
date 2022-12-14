import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import Button from "/components/CustomButtons/Button.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "../../pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "../../pages-sections/LandingPage-Sections/TeamSection.js";
import PortfolioSection from "../../pages-sections/LandingPage-Sections/Portfolio";
import ClientsSection from "../../pages-sections/LandingPage-Sections/Clients";
import WorkSection from "../../pages-sections/LandingPage-Sections/WorkSection.js";
import ServiceSection from "../../pages-sections/LandingPage-Sections/ServiceSection.js";
import { Typography } from "@mui/material";
import ServiceSluggedSection from "../../pages-sections/LandingPage-Sections/ServiceSluggedSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ServicesPage(props, c, b) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Planway IT"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container} style={{ zIndex: 1000 }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Helping You Solve Your Problems</h1>
              <Typography color="white">
                Our mission is to offer a robust technology-powered platform to
                enable a seamless flow of products and services.
              </Typography>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ServiceSluggedSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
