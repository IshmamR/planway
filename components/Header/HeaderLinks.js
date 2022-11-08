/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import {
  Apps,
  CloudDownload,
  Home,
  Storage,
  GroupWork,
  GroupSharp,
  PermContactCalendar,
  VerifiedUser,
  TrendingUp,
  GpsFixed,
  CastForEducation,
  AccountTree,
  DeveloperBoard,
} from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import styled from "styled-components";
import { Box, Paper, Typography } from "@mui/material";
import { techStacks } from "../../data/techStacks.js";
import { useRouter } from "next/router.js";

const useStyles = makeStyles(styles);

const DropDownMenu = styled(Paper)`
  position: absolute;
  top: 60px;
  right: ${({ right }) => (right ? "0" : undefined)};
  transform: rotate3d(1, 0, 0, -90deg);
  opacity: 0;
  transform-origin: top;
  transition: all 0.2s ease;
`;

const StyledDropDownButton = styled.div`
  position: relative;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: space-evenly;
  height: 100%;
  cursor: pointer;
  color: ${({ active }) => (active ? "#ff8933" : "unset")};
  &:hover {
    ${DropDownMenu} {
      opacity: 1;
      transform: rotate3d(1, 0, 0, 0deg);
      transform-origin: top;
      transition: all 0.2s ease;
    }
  }
  &:not(:hover) {
    ${DropDownMenu} {
      transform: rotate3d(1, 0, 0, -90deg);
      opacity: 0;
      transform-origin: top;
      transition: all 0.2s ease;
    }
  }
`;

const services = [
  {
    title: "Team Augmentation",
    icon: <TrendingUp />,
    link: "/service/team-augmentation",
  },
  {
    title: "Fixed Price Project",
    icon: <GpsFixed />,
    link: "/service/fixed-price-projects",
  },
  {
    title: "Discovery Workshop",
    icon: <CastForEducation />,
    link: "/service/discovery-workshop",
  },
  {
    title: "Project Consulting",
    icon: <AccountTree />,
    link: "/service/project-consulting",
  },
  {
    title: "Support & Maintenance",
    icon: <DeveloperBoard />,
    link: "/service/support-and-maintenance",
  },
];

const expertise = [
  {
    title: "Custom Software Development",
    icon: <TrendingUp />,
    link: "/expertise/custom-software-development",
  },
  {
    title: "Web App Development",
    icon: <TrendingUp />,
    link: "/expertise/web-app-development",
  },
  {
    title: "Mobile App Development",
    icon: <TrendingUp />,
    link: "/expertise/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    icon: <TrendingUp />,
    link: "/expertise/ui-ux-design",
  },
  {
    title: "DEVops",
    icon: <TrendingUp />,
    link: "/expertise/devops",
  },
  {
    title: "QA & Testing",
    icon: <TrendingUp />,
    link: "/expertise/qa-testing",
  },
  {
    title: "Azure & AWS",
    icon: <TrendingUp />,
    link: "/expertise/azure-aws",
  },
  {
    title: "Data Science, A.I. & M.L.",
    icon: <TrendingUp />,
    link: "/expertise/data-science",
  },
];

export default function HeaderLinks(props) {
  const classes = useStyles();

  const router = useRouter();

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/">
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={router.pathname === "/" ? "true" : undefined}
            >
              <Home />
              <Typography variant="caption">Home</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/about">
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={router.pathname === "/about" ? "true" : undefined}
            >
              <Apps />
              <Typography variant="caption">About</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/service">
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={
                router.pathname.startsWith("/service") ? "true" : undefined
              }
            >
              <Storage />
              <Typography variant="caption">Service</Typography>
              <DropDownMenu elevation={5}>
                <Box py={2} px={2}>
                  <Box display="flex">
                    <Box
                      flex={1}
                      p={1}
                      display="flex"
                      flexDirection="column"
                      minWidth={240}
                    >
                      {services.map((item) => (
                        <Link key={item.title} href={item.link}>
                          <a>
                            <Box
                              display="flex"
                              alignItems="center"
                              color="black"
                              gap={2}
                              mb={1}
                            >
                              {item.icon}
                              <Typography
                                variant="caption"
                                fontSize="16px"
                                color="black"
                              >
                                {item.title}
                              </Typography>
                            </Box>
                          </a>
                        </Link>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </DropDownMenu>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/portfolio">
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton>
              <GroupWork />
              <Typography variant="caption">Portfolio</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <StyledDropDownButton>
          <VerifiedUser />
          <Typography variant="caption">Expertise</Typography>
          <DropDownMenu elevation={5} right="true">
            <Box py={2} px={2}>
              <Box display="flex">
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={320}
                >
                  {expertise.map((item) => (
                    <Link key={item.title} href={item.link}>
                      <a>
                        <Box
                          display="flex"
                          alignItems="center"
                          color="black"
                          gap={2}
                          mb={1}
                        >
                          {item.icon}
                          <Typography
                            variant="caption"
                            fontSize="16px"
                            color="black"
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </a>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
          </DropDownMenu>
        </StyledDropDownButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/team">
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={router.pathname === "/team" ? "true" : undefined}
            >
              <GroupSharp />
              <Typography variant="caption">Team</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/contact">
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={router.pathname === "/contact" ? "true" : undefined}
            >
              <PermContactCalendar />
              <Typography variant="caption">Contact</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
    </List>
  );
}
