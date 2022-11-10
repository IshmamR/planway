/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {
  Apps,
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

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router.js";
import { down } from "styled-breakpoints";

const useStyles = makeStyles(styles);

const DropDownMenu = styled.span`
  display: flex;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: absolute;
  top: 60px;
  right: ${({ right }) => (right ? "0" : undefined)};
  transform: rotate3d(1, 0, 0, -90deg);
  opacity: 0;
  transform-origin: top;
  transition: all 0.2s ease;
  background-color: white;

  flex: 1;
  padding: 1.5rem;
  flex-direction: column;
  min-width: 340px;
  border-radius: 10px;

  ${down("md")} {
    top: 0px;
    right: 120px;
    z-index: 999;
    padding: 0.5rem;
    min-width: 240px;
  }
`;

const StyledDropDownButton = styled.span`
  padding: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  justify-content: space-evenly;
  height: 100%;
  cursor: pointer;
  color: unset;
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

const SubLink = styled.a`
  display: flex;
  align-items: center;
  color: black;
  gap: 0.5rem;
  margin-bottom: 1rem;

  color: ${({ active }) => (active ? "#ff8933" : "#424242")};

  &:visited {
    color: "#424242";
  }
  &:hover,
  &:active {
    color: #ff8933;
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
    logo: "/img/Arch-Category_48/Arch-Category_Compute_48.svg",
    link: "/expertise/custom-software-development",
  },
  {
    title: "Web App Development",
    logo: "/img/Arch-Category_48/Arch-Category_End-User-Computing_48.svg",
    link: "/expertise/web-app-development",
  },
  {
    title: "Mobile App Development",
    logo: "/img/Arch-Category_48/Arch-Category_Front-End-Web-Mobile_48.svg",
    link: "/expertise/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    logo: "/img/Arch-Category_48/Arch-Category_Application-Integration_48.svg",
    link: "/expertise/ui-ux-design",
  },
  {
    title: "DEVops",
    logo: "/img/Arch-Category_48/Arch-Category_Developer-Tools_48.svg",
    link: "/expertise/devops",
  },
  {
    title: "QA & Testing",
    logo: "/img/Arch-Category_48/Arch-Category_Robotics_48.svg",
    link: "/expertise/qa-testing",
  },
  {
    title: "Azure & AWS",
    logo: "/img/Arch-Category_48/Arch-Category_Serverless_48.svg",
    link: "/expertise/azure-aws",
  },
  {
    title: "Data Science, A.I. & M.L.",
    logo: "/img/Arch-Category_48/Arch-Category_Machine-Learning_48.svg",
    link: "/expertise/data-science",
  },
];

export default function HeaderLinks() {
  const classes = useStyles();

  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState("/");

  useEffect(() => setActiveRoute(router.pathname), [router]);

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/" passHref>
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={activeRoute === "/" ? "true" : undefined}
            >
              <Home />
              <Typography variant="caption">Home</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/about" passHref>
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={activeRoute === "/about" ? "true" : undefined}
            >
              <Apps />
              <Typography variant="caption">About</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/service">
          {/* <a style={{ color: "inherit" }}> */}
          <StyledDropDownButton
            active={activeRoute.startsWith("/service") ? "true" : undefined}
          >
            <Storage />
            <Typography variant="caption">Service</Typography>
            <DropDownMenu>
              {services.map((item) => (
                <Link key={item.link} href={item.link} passHref>
                  <SubLink
                    active={router.asPath === item.link ? "true" : undefined}
                  >
                    {item.icon}
                    <Typography variant="caption" fontSize="16px">
                      {item.title}
                    </Typography>
                  </SubLink>
                </Link>
              ))}
            </DropDownMenu>
          </StyledDropDownButton>
          {/* </a> */}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/portfolio" passHref>
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={activeRoute === "/portfolio" ? "true" : undefined}
            >
              <GroupWork />
              <Typography variant="caption">Portfolio</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <StyledDropDownButton
          active={activeRoute.startsWith("/expertise") ? "true" : undefined}
        >
          <VerifiedUser />
          <Typography variant="caption">Expertise</Typography>
          <DropDownMenu>
            {expertise.map((item) => (
              <Link key={item.link} href={item.link} passHref>
                <SubLink
                  active={router.asPath === item.link ? "true" : undefined}
                >
                  <img
                    key={item.logo}
                    src={item.logo}
                    height="16"
                    width="16"
                    alt={item.title}
                  />
                  <Typography variant="caption" fontSize="16px">
                    {item.title}
                  </Typography>
                </SubLink>
              </Link>
            ))}
          </DropDownMenu>
        </StyledDropDownButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/team" passHref>
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={activeRoute === "/team" ? "true" : undefined}
            >
              <GroupSharp />
              <Typography variant="caption">Team</Typography>
            </StyledDropDownButton>
          </a>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/contact" passHref>
          <a style={{ color: "inherit" }}>
            <StyledDropDownButton
              active={activeRoute === "/contact" ? "true" : undefined}
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
