import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";

import AboutSection from "../pages-sections/LandingPage-Sections/AboutSection.js";
import Carousel from "nuka-carousel";
import { Box, Typography } from "@mui/material";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function AboutPage(props) {
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
          <Carousel
            slidesToShow={1}
            wrapAround
            animation="zoom"
            autoplay
            autoplayInterval={5000}
            defaultControlsConfig={{
              prevButtonStyle: { display: "none" },
              nextButtonStyle: { display: "none" },
              pagingDotsStyle: { display: "none" },
            }}
          >
            <Box width={{ xs: "100%", md: "60%" }}>
              <h1 className={classes.title}>Helping You Solve Your Problems</h1>
              <Typography color="white">
                Our mission is to offer a robust technology-powered platform to
                enable a seamless flow of products and services.
              </Typography>
              <br />
            </Box>
            <Box width={{ xs: "100%", md: "60%" }}>
              <h1 className={classes.title}>Welcome to Planway IT</h1>
              <Typography color="white">
                Our mission is to offer a robust technology-powered platform to
                enable a seamless flow of products and services.
              </Typography>
              <br />
            </Box>
          </Carousel>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <AboutSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
