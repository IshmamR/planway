import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection.js";

const useStyles = makeStyles(styles);

export default function ContactPage() {
  const classes = useStyles();
  return (
    <div>
      <Header
        color="transparent"
        brand="Planway IT"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
      />
      <Parallax filter responsive image="/img/landing-bg.jpg">
        <div className={classes.container} style={{ zIndex: 1000 }}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Helping You Solve Your Problems</h1>
              <h4>
                Our mission is to offer a robust technology-powered platform to
                enable a seamless flow of products and services.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
