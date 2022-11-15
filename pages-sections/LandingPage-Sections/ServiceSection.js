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
import { Box, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { down } from "styled-breakpoints";
import styled from "styled-components";

const StyledImage = styled.img`
  height: 360px;
  width: 360px;

  ${down("md")} {
    height: 280px;
    width: 280px;
  }
`;

const useStyles = makeStyles(styles);

export default function ServiceSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      {/* <h2 className={classes.title}>Here is our team</h2> */}
      <Box>
        <h2 className={classes.title} style={{ textAlign: "left" }}>
          Software Development
        </h2>
        <Box
          display="flex"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          gap={{ xs: 1, md: 2 }}
          justifyContent="space-between"
          mb={2}
        >
          <Box flex={1}>
            <Typography color="gray" textAlign="left" mb={2}>
              We provide a full range of web application services, from
              requirement gathering until the application is successfully
              deployed on the client end. Considering the strategic importance
              of web design, Planway IT engages extensive effort and creativity
              to build you the site that will stand out from the rest and
              contribute to the success of your business.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Core and continuous activity of Designing and Developing
              Applications and Software Solutions since its commencement.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Encompasses in providing a wide range of own products,
              tools, and platforms.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;In-house competency and training centers to apply new
              technologies and innovations.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Follow well-proven and professional working methodologies
              for the implementation of a software solution.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Processes are constantly revised to embrace world-class,
              state-of-the-art techniques.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Project-specific metrics are defined and applied to ensure
              consistent results of high standard.
            </Typography>
          </Box>
          <Box flex={1}>
            <StyledImage src="/img/service/1.jpg" height="360" width="360" />
          </Box>
        </Box>

        <h2 className={classes.title} style={{ textAlign: "right" }}>
          Web Development
        </h2>
        <Box
          display="flex"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          gap={{ xs: 1, md: 2 }}
          justifyContent="space-between"
          mb={2}
        >
          <Box flex={1}>
            <StyledImage src="/img/service/2.jpg" height="360" width="400" />
          </Box>
          <Box flex={1}>
            <Typography color="gray" textAlign="right" mb={2}>
              Well-built software thinks about users and their needs. Web Sites
              require one thing, and that is functionality. Without it most
              websites are useless. We can develop advanced systems that can
              handle mass amounts of data and transactions. It does not matter
              how small or big your company is, we have solutions for any
              budget.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="right">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Our ability to build dynamic, personalized user-centric
              experiences enables your brand to explore innovative opportunities
              to reach audience.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="right">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Our web development includes mobile-responsive website.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="right">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Fully integrated team enables rapid decision making about
              direction and feasibility during planning and design phases.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="right">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;We do more with less; we can build your company a custom web
              application that meets your business need.
            </Typography>
          </Box>
        </Box>

        <h2 className={classes.title} style={{ textAlign: "left" }}>
          Mobile Application Development
        </h2>
        <Box
          display="flex"
          flexDirection={{ xs: "column-reverse", md: "row" }}
          gap={{ xs: 1, md: 2 }}
          justifyContent="space-between"
          mb={2}
        >
          <Box flex={1}>
            <Typography color="gray" textAlign="left" mb={2}>
              We provide unique mobile application development services to
              develop solutions that solve real-life problems. We enable and
              engage our clients with the world-class mobile application
              development. Services developed in PLanway IT helps our clients to
              stay ahead in the business markets.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;We implement the latest trends & technologies in mobile apps
              development and strive to offer rich user experience through our
              services.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Our development team is focused on creativeness and
              innovation along with the technical capability to provide high
              quality, proficient, effective and accessible applications that
              meet our client’s potentials.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Customized business apps allow you to send personalized
              updates related to your products and services to your existing
              customers in real-time.
            </Typography>
            <Typography alignItems="center" color="gray" textAlign="left">
              <DoneAllIcon fontSize="small" color="warning" />
              &nbsp;Planway IT Mobile apps are very convenient for customers, as
              they are usually designed with usability in mind.
            </Typography>
          </Box>
          <Box flex={1}>
            <StyledImage src="/img/service/3.jpg" height="360" width="360" />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
