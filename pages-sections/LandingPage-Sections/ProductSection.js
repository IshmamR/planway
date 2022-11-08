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

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <h2 className={classes.title}>
            Professional And Dedicated Software Solutions
          </h2>
          <h5 className={classes.description}>
            Planway IT is a next-generation global technology company that helps
            enterprises reimagine their businesses for the digital age. Our
            technology products and services are built on four decades of
            innovation, with a world-renowned management philosophy, a strong
            culture of invention and risk-taking, and a relentless focus on
            customer relationships. HCL also takes pride in its many diversity,
            social responsibility, sustainability, and education initiatives.
            Through its worldwide network of R&D facilities and co-innovation
            labs, global delivery capabilities, and over 168,000+ ‘Ideapreneurs’
            across 50 countries, HCL delivers holistic services across industry
            verticals to leading enterprises, including 250 of the Fortune 500
            and 650 of the Global 2000.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        {/* <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Mobile app development"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              image="http://consultar-react.wpocean.com/static/media/document.8a4de5f9.svg"
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Customized Website development"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              image="http://consultar-react.wpocean.com/static/media/bar-graph.75e8d96e.svg"
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="E-Commerce/Multi-vendor"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              image="http://consultar-react.wpocean.com/static/media/clipboard.0cef2a23.svg"
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer> */}

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
        >
          <InfoArea
            title="MOBILE APP DEVELOPMENT"
            description="We provide unique mobile application development services to develop solutions that solve real-life problems."
            icon={Chat}
            image="http://consultar-react.wpocean.com/static/media/document.8a4de5f9.svg"
            iconColor="info"
            vertical
          />
          <InfoArea
            title="CUSTOMIZED WEB DEVELOPMENT"
            description="Well-built software thinks about users and their needs. Websites require one thing, and that is functionality. Without it most websites are useless."
            icon={VerifiedUser}
            image="http://consultar-react.wpocean.com/static/media/bar-graph.75e8d96e.svg"
            iconColor="success"
            vertical
          />
          <InfoArea
            title="SOFTWARE TESTING & QA"
            description="We provide a full range of web application services, from requirement gathering until the application is successfully deployed on the client end."
            icon={Fingerprint}
            image="http://consultar-react.wpocean.com/static/media/handshake.77042259.svg"
            iconColor="danger"
            vertical
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={{ xs: 0, md: 12 }}
        >
          <InfoArea
            title="IT CONSULTANT"
            description="We provide unique mobile application development services to develop solutions that solve real-life problems."
            icon={Fingerprint}
            image="http://consultar-react.wpocean.com/static/media/clipboard.0cef2a23.svg"
            iconColor="danger"
            vertical
          />
          <InfoArea
            title="CUSTOMIZED ERP"
            description="Planway IT ERP Solution is a suite of applications that manages core business process such as sales, purchasing, human resources, customer support, CRM and inventory"
            icon={Fingerprint}
            image="http://consultar-react.wpocean.com/static/media/briefcase.5b197508.svg"
            iconColor="danger"
            vertical
          />
        </Box>
      </div>
    </div>
  );
}
