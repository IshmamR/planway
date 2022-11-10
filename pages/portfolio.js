import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../components/Header/Header.js";
import Footer from "../components/Footer/Footer.js";
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import HeaderLinks from "../components/Header/HeaderLinks.js";
import Parallax from "/components/Parallax/Parallax.js";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPage.js";
import PortfolioSection from "../pages-sections/LandingPage-Sections/Portfolio";

const useStyles = makeStyles(styles);

export default function PortfolioPage() {
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
              <h2 className={classes.title}>
                Ultimate Partner For Future Proof Digital Transformation
              </h2>
              <h4>
                Solving technology problems for startups, enterprises and
                corporate's
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <PortfolioSection />
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
