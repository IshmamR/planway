import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "/components/Grid/GridContainer.js";
import GridItem from "/components/Grid/GridItem.js";
import InfoArea from "../../components/InfoArea/InfoArea.js";

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import { Box } from "@mui/material";

const useStyles = makeStyles(styles);

export default function AboutSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>Who We Are!!</h2>
          <h5 className={classes.description}>
            We are a technology company that has been developing quality
            software solutions for more than 2 years. Our clients include top
            executives, business leaders and entrepreneurs from North America,
            Malaysia. We solve all technology related problems and provide
            insightful solutions with detailed analysis to help you in producing
            better results.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <h2 className={classes.title}>Services We Offer</h2>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <InfoArea
            title="DISCOVERY WORKSHOP!"
            description="Our discovery workshop will help you understand your short and long term goals, KPI’s, financial and any technological challenges that may come along with a clickable prototype."
            icon={Chat}
            image="http://consultar-react.wpocean.com/static/media/document.8a4de5f9.svg"
            iconColor="info"
            vertical
          />
          <InfoArea
            title="DATA SCIENCE"
            description="We produce elaborate data insights and automated reporting to help your company in making informed decisions through data mining, big data processing, machine learning, AI development and data analytics."
            icon={VerifiedUser}
            image="http://consultar-react.wpocean.com/static/media/bar-graph.75e8d96e.svg"
            iconColor="success"
            vertical
          />
          <InfoArea
            title="CUSTOM SOFTWARE DEVELOPMENT"
            description="We develop custom software based on our clients needs. Whether you have a start up, a small business or an enterprise, our skilled professionals would integrate seamlessly with your business."
            icon={Fingerprint}
            image="http://consultar-react.wpocean.com/static/media/handshake.77042259.svg"
            iconColor="danger"
            vertical
          />
        </Box>
      </div>
    </div>
  );
}
