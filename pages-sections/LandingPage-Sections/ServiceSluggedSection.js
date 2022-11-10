import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Box, Grid, Typography } from "@mui/material";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import { useRouter } from "next/router";
import styled from "styled-components";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const AnimatedCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: all 0.6s ease;
  cursor: pointer;
  border: 1px solid #eaeaea;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
`;

const pageMap = {
  "team-augmentation": {
    header: "TEAM AUGMENTATION",
    subtitle: "Hire Proficient Technology Team to Meet your Needs",
    children: [
      {
        title: "Understanding Your Requirements",
        description:
          "Developing an understanding with clients by sharing the details of your requirement to get the perfect candidate to meet your needs.",
      },
      {
        title: "Industry-Specific Technical Experts",
        description:
          "Providing complete control over clients to choose from our pre-screened pool of candidates specific to your industry.",
      },
      {
        title: "Affordable",
        description:
          "Get highly skilled technical experts to provide the best solutions, without bearing the costs of in-house work forces.",
      },
      {
        title: "Accelerates Time-to-Market",
        description:
          "Trained professionals to operate at high efficiencies and provide fast-track development to get your product in the market faster.",
      },
      {
        title: "High Turnover Rates",
        description:
          "Hiring already skilled external resources to focus solely on your project decreases attrition rates and produces positive results.",
      },
      {
        title: "Outperform Your Competitors",
        description:
          "With a remotely working team of professionals with a profound skill set, you’re more likely to outperform your competitors.",
      },
    ],
  },
  "fixed-price-projects": {
    header: "FIXED PRICE PROJECTS",
    subtitle: "Best Quality and Timely Delivery",
    children: [
      {
        title: "Discovery Team",
        description:
          "A team of resources to help you come up with multiple possible outcomes for your project so software solutions can be provided beforehand.",
      },
      {
        title: "Timely Delivery",
        description:
          "With an already set goal and deadline, projects are guaranteed to be delivered on time.",
      },
      {
        title: "Determined Expenses",
        description:
          "Expenses are already decided with a clear cut budget team has to work within. The overall cost never exceeds the budget.",
      },
      {
        title: "Ease of Working",
        description:
          "Clearly defined specifications and requirements with details gives you a clear view of what your project looks like and the project is divided into individual tasks so it’s easier to work on.",
      },
      {
        title: "Security",
        description:
          "IP protected and secured work by maintaining strict NDAs. Providing absolutely no risk over security.",
      },
    ],
  },
  "discovery-workshop": {
    header: "FIXED PRICE PROJECTS",
    subtitle: "Best Quality and Timely Delivery",
    children: [
      {
        title: "Get on-demand Expertise",
        description:
          "Dedicated team of product consulting professionals to help meet your management needs. We provide a unique partnership approach through providing complete product development and launch processes.",
      },
      {
        title: "Product Design",
        description:
          "Providing support for your product design, R&D and innovation teams to develop products and launching them in ever changing markets.",
      },
      {
        title: "Training",
        description:
          "Session with our Trained experts to help you understand what’s new in the market, simplify complex requirements and comply with upcoming regulations to avoid any product failures.",
      },
      {
        title: "Business Process and Advisory",
        description:
          "Our professionals can assist you in complex global supply chains, reducing costs and risks. They will deliver optimal results through optimizing your existing infrastructure and streamlining your testing.",
      },
    ],
  },
  "project-consulting": {
    header: "PRODUCT CONSULTING",
    subtitle: "Get Professional Product Consultant Services",
    children: [
      {
        title: "Get on-demand Expertise",
        description:
          "Dedicated team of product consulting professionals to help meet your management needs. We provide a unique partnership approach through providing complete product development and launch processes.",
      },
      {
        title: "Product Design",
        description:
          "Providing support for your product design, R&D and innovation teams to develop products and launching them in ever changing markets.",
      },
      {
        title: "Training",
        description:
          "Session with our Trained experts to help you understand what’s new in the market, simplify complex requirements and comply with upcoming regulations to avoid any product failures.",
      },
      {
        title: "Business Process and Advisory",
        description:
          "Our professionals can assist you in complex global supply chains, reducing costs and risks. They will deliver optimal results through optimizing your existing infrastructure and streamlining your testing.",
      },
    ],
  },
  "support-and-maintenance": {
    header: "SUPPORT AND MAINTENANCE",
    subtitle: "Upgrade And Maintain Software With Technical Teams",
    children: [
      {
        title: "Software Maintenance",
        description:
          "Providing level 1, 2 and 3 support services for custom software developed either by us or a third party.",
      },
      {
        title: "Software Enhancement",
        description:
          "Focus on analysing, evaluating and handing over a list of improvements and bugs for your software along with a plan to improve your existing software.",
      },
      {
        title: "Performance/Availability Monitoring",
        description:
          "Preventing breakdowns by continuous monitoring of core applications, hardware and overall system performance.",
      },
    ],
  },
};

const useStyles = makeStyles(styles);

export default function ServiceSluggedSection() {
  const classes = useStyles();

  const router = useRouter();
  console.log(router);
  const page = pageMap[router.query.slug];
  console.log(page);

  return (
    <div className={classes.section}>
      {/* <h2 className={classes.title}>Here is our team</h2> */}
      <Box>
        <h2
          className={classes.title}
          style={{ textAlign: "left", marginBottom: 0 }}
        >
          {page.header}
        </h2>
        <Typography variant="body2" color="black" textAlign="left" mb={4}>
          {page.subtitle}
        </Typography>

        <CardsGrid>
          {page.children.map((card) => (
            <AnimatedCard key={card.title}>
              <Typography
                variant="h5"
                fontWeight="500"
                color="ActiveCaption"
                mb={2}
              >
                {card.title}
              </Typography>
              <Typography variant="body1" color="gray">
                {card.description}
              </Typography>
            </AnimatedCard>
          ))}
        </CardsGrid>
      </Box>
    </div>
  );
}
