import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Box, Divider, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  ${down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${down("sm")} {
    grid-template-columns: 1fr;
  }
`;

const AnimatedCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 1.5rem;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: all 0.6s ease;
  cursor: pointer;
  border: 1px solid #eaeaea;
  text-align: left;

  :hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
`;

const pageMap = {
  "custom-software-development": {
    header: "CUSTOM SOFTWARE DEVELOPMENT",
    subtitle: "Work With Developers To Improve And Maintain Your Software.",
    logo: "/img/Arch-Category_48/Arch-Category_Compute_48.svg",
    children: [
      {
        title: "Web Development",
        description:
          "Develop a custom website with our top quality developers using latest technologies with captivating User Interface and User Experience.",
      },
      {
        title: "App Development",
        description:
          "Build a user friendly app based on your requirements with our agile working pattern and scalable development, leaving room for technological advancements.",
      },
    ],
  },
  "web-app-development": {
    header: "WEB APP DEVELOPMENT",
    subtitle:
      "Cross Functional Web App Developers to Enrich your Digital Experience.",
    logo: "/img/Arch-Category_48/Arch-Category_End-User-Computing_48.svg",
    children: [
      {
        title: "Full Stack Development",
        description:
          "Dedicated team of developers using latest technologies from simple frontend prototyping to high performing backend.",
      },
      {
        title: "Backend Code",
        description:
          "Fluently using code in latest technologies for cloud based backend solutions for mobile, web and desktop applications.",
      },
      {
        title: "Frontend Code",
        description:
          "Providing users with exceptional User Experience with the help of our UI/UX experts.",
      },
      {
        title: "QA Testing",
        description:
          "Performing thorough testing and complete QA analysis to meet your quality standards",
      },
      {
        title: "Rescue Missions",
        description:
          "Trained development employees to provide additional support in case you have a project that requires extensive and fast recovery.",
      },
      {
        title: "Support and Maintenance",
        description:
          "Defined SLAs to minimize downtime, manage feature enhancements and maintain your app.",
      },
    ],
  },
  "mobile-app-development": {
    header: "MOBILE APP DEVELOPMENT",
    subtitle:
      "World Class Mobile Apps That Are Featured In App Stores With High Ratings",
    logo: "/img/Arch-Category_48/Arch-Category_Front-End-Web-Mobile_48.svg",
    children: [
      {
        title: "Complete Mobile App Development",
        description:
          "Offering End to End development starting from design, development to support and maintenance.",
      },
      {
        title: "Extensive UI, Practical UX",
        description:
          "Simple, creative yet purposeful User Interface to enhance customer’s User Experience.",
      },
      {
        title: "Security and Privacy",
        description:
          "Keeping in mind customer confidentiality, all work is done under Non-Disclosure Agreements.",
      },
      {
        title: "Room For Expandability",
        description:
          "Scalability is not an option but a must so the apps can be further enhanced based on the changing technology trends and requirements.",
      },
      {
        title: "Agile Working Pattern",
        description:
          "To ensure quick delivery and accommodate any changes on the go, we follow an agile delivery method and working pattern.",
      },
      {
        title: "Support and Rescue Missions",
        description:
          "We support and maintain your application or if needed, provide additional service of rescue missions for any pre-existing projects that have not been delivered.",
      },
    ],
  },
  "ui-ux-design": {
    header: "UI/UX DESIGN",
    subtitle: "User Centric Designs for Better Experience.",
    logo: "/img/Arch-Category_48/Arch-Category_Application-Integration_48.svg",
    children: [
      {
        title: "User Journey Mapping",
        description:
          "Extensive user research to build up user personas for mapping out complete user journeys.",
      },
      {
        title: "Rapid Prototyping",
        description:
          "Clickable prototypes to bring your ideas to life and give possible feedback driven wire-framing for avoiding potential bugs.",
      },
      {
        title: "UX Design",
        description:
          "Providing top-notch technology to deliver compelling experiences to provide solutions to current and future challenges.",
      },
      {
        title: "UI Design",
        description:
          "Bringing simplicity to highly complex designs and introducing a user friendly interface to increase engagement.",
      },
      {
        title: "Development",
        description:
          "Designers and developers working together to produce and deliver the best to our clients.",
      },
      {
        title: "Testing",
        description:
          "Extensive QA and sharing data analysis to make changes according to your business requirements.",
      },
    ],
  },
  devops: {
    header: "DEVOPS",
    subtitle: "Better IT, Faster Execution and Improved Results",
    logo: "/img/Arch-Category_48/Arch-Category_Developer-Tools_48.svg",
    children: [
      {
        title: "Assess & Evaluate",
        description:
          "DevOps Engineers will introduce processes, tools and methodologies to balance needs throughout the software development cycle from coding and deployment to maintenance and updates.",
      },
      {
        title: "Develop & Deploy",
        description:
          "Through unification and automation of processes, we ensure that your deployment and rollbacks are performed in one click with minimum risk and increased productivity.",
      },
      {
        title: "Manage",
        description:
          "Ensuring that our delivered processes are streamlined with your needs through completely integrated functioning of the delivery pipeline automation cycle.",
      },
    ],
  },
  "qa-testing": {
    header: "QA AND TESTING",
    subtitle:
      "Deploying Modern Techniques With Quality Experts For Quick Bug Fixes",
    logo: "/img/Arch-Category_48/Arch-Category_Robotics_48.svg",
    children: [
      {
        title: "Automation Testing",
        description:
          "Development of custom automated test scripts for complete analysis of every step of the development cycle.",
      },
      {
        title: "Manual Testing",
        description:
          "Testing software applications from the user’s perspective using UI< Usability, installation, User Acceptance, Error Handling and Security Testing to ensure customer satisfaction.",
      },
      {
        title: "API Testing",
        description:
          "Meeting all your expectations through detailed API testing including functionality testing, reliability, performance and security.",
      },
      {
        title: "Web & Mobile QA",
        description:
          "Providing quick bug fixes with the best QA practices for web and Mobile.",
      },
      {
        title: "Security Testing",
        description:
          "Identification of potential bugs, security gaps or any software flaws with our vigilant security testing tools to establish a development road-map to bring your product up to speed.",
      },
      {
        title: "Manual Testing",
        description:
          "Testing software applications from the user’s perspective using UI< Usability, installation, User Acceptance, Error Handling and Security Testing to ensure customer satisfaction.",
      },
      {
        title: "Performance Testing",
        description:
          "Making your software as user-friendly as possible by performance testing of your app server until it has the highest level of stability and responsiveness.",
      },
      {
        title: "QA Consulting & Analysis",
        description:
          "Expert QA consultants to help you identify speed bumps and talent gaps along with walking you through the testing process.",
      },
    ],
  },
  "azure-aws": {
    header: "CLOUD COMPUTING AT TECHVERX",
    subtitle:
      "Easily adaptable cloud computing services transforming on-premise data centers to more innovative cloud platforms to enhance business agility",
    logo: "/img/Arch-Category_48/Arch-Category_Serverless_48.svg",
    children: [
      {
        title: "Consulting",
        description:
          "Our cloud computing consultants will provide you with an overall view of what your business looks like and present you with an optimal solution along with the required technical assistance.",
      },
      {
        title: "Implementation",
        description:
          "Experts to ensure that the solutions provided are implemented optimally.",
      },
      {
        title: "Integration",
        description:
          "Enable communication between components within disrupted systems and serverless applications with Azure and AWS. Also reduce the impact of changes so it’s easier to update systems and release new features much faster.",
      },
      {
        title: "Backend Development",
        description:
          "Experts to help you with any changes that may be required to streamline your backend development operations.",
      },
      {
        title: "Scaling",
        description:
          "Our experts ensure steady and predictable performance with consistent monitoring through autoscaling.",
      },
    ],
  },
  "data-science": {
    header: "DATA SCIENCE, ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
    subtitle:
      "Reshape Your Data With Experts Who Excel In AI and Machine Learning",
    logo: "/img/Arch-Category_48/Arch-Category_Machine-Learning_48.svg",
    children: [
      {
        title: "Big Data Processing",
        description: "Big data solutions driven by Artificial intelligence.",
      },
      {
        title: "AI Development",
        description:
          "Systematically develop and operationalize AI models using AI lifecycle management.",
      },
      {
        title: "Machine Learning",
        description:
          "Applying diverse machine learning techniques to identify the moral that best fits the business requirement.",
      },
      {
        title: "Data Preparation",
        description:
          "Deep cleaning of inconsistent database, missing values, duplicate values, misspelled attributes and then Modification of data to help understand the data structure better.",
      },
      {
        title: "Migration and integration",
        description:
          "Our top Salesforce consultants collabaIntegrate with AI ready platforms to make better, more robust software linking systems.orate with you, evaluate and assess your existing business processes and technology systems to present you with a custom implementation strategy made according to your business needs.",
      },
      {
        title: "Exploratory Data Analysis",
        description:
          "Defining and refining the selection of feature variables that will be used in model development to avoid the possibilities of developing an inaccurate model.",
      },
      {
        title: "Understanding The Business Problem",
        description:
          "Our experts believe in Asking relevant questions to understand and define objectives to the problem that needs to be tackled.",
      },
      {
        title: "Data Acquisitions And Preparation",
        description:
          "Gather and scrape data from multiple sources such as web servers, logs, databases, API’s and online repositories and then deep clean and transform the data.",
      },
      {
        title: "Design",
        description:
          "Create a functional design that is pleasing to the eye and meeting your business needs.",
      },
      {
        title: "Prototyping",
        description:
          "Develop prototypes to reduce risk and showcase end results.",
      },
      {
        title: "Implementation",
        description:
          "Connect all the frontend and backend codes to have a living product ready for use.",
      },
    ],
  },
};

const useStyles = makeStyles(styles);

export default function ExpertiseSection() {
  const classes = useStyles();

  const router = useRouter();

  const [page, setPage] = useState(pageMap[router.query.slug] || null);

  useEffect(() => {
    const pageFound = pageMap[router.query.slug];
    if (pageFound) {
      setPage(pageFound);
    } else {
      router.push("/");
    }
  }, [router]);

  return (
    <div className={classes.section}>
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
            <AnimatedCard
              key={page.header + card.title + Math.random().toFixed(6)}
            >
              <Box textAlign="left" mb={2}>
                <Typography
                  variant="h5"
                  fontWeight="500"
                  color="ActiveCaption"
                  textAlign="left"
                >
                  <img
                    key={router.query.slug + page.logo}
                    src={page.logo}
                    height="20"
                    width="20"
                    alt="placeholder"
                  />
                  &nbsp;&nbsp;{card.title}
                </Typography>
              </Box>
              <Divider variant="fullWidth" orientation="horizontal" />
              <Typography mt={2} variant="body1" color="gray">
                {card.description}
              </Typography>
            </AnimatedCard>
          ))}
        </CardsGrid>
      </Box>
    </div>
  );
}
