import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import styles from "/styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import { down } from "styled-breakpoints";

const useStyles = makeStyles(styles);

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  ${down("md")} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${down("sm")} {
    grid-template-columns: 1fr;
  }
`;

const LinksDiv = styled.div`
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  opacity: 0;
  transition: 0.4s ease;
`;

const LinkContainer = styled.div`
  padding: 0.5rem;
  border-radius: 50px;
  background-color: #ff8933;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MemberCard = styled(Card)`
  position: relative;
  cursor: pointer;

  :hover {
    ${LinksDiv} {
      opacity: 1;
    }
  }
`;

export default function TeamSection() {
  const classes = useStyles();

  const teamMembers = [
    {
      name: "Khandakar Abu Saife",
      img: "/img/team/KHANDAKAR_ABU_SAIFE.jpeg",
      designation: "Founder & Managing Director",
    },
    {
      name: "Mozahidur Rahman",
      img: "/img/team/Mozahidur_Rahman.jpeg",
      designation: "Project Manager",
    },
    {
      name: "Mohammad Imam Hossain",
      img: "/img/team/MOHAMMAD_IMAM_HOSSAIN.jpeg",
      designation: "Advisor",
    },
    {
      name: "MD al tanjid shakil",
      img: "/img/team/MD_al_tanjid_shakil.jpeg",
      designation: "Mobile App Developer",
    },
  ];

  return (
    <div className={classes.section}>
      <h2 className={classes.title}>OUR HARDWORKING TEAM</h2>
      <div>
        <GridContainer>
          {teamMembers.map((member) => (
            <MemberCard>
              <LinksDiv>
                <LinkContainer>
                  <Facebook />
                </LinkContainer>
                <LinkContainer>
                  <Instagram />
                </LinkContainer>
                <LinkContainer>
                  <LinkedIn />
                </LinkContainer>
              </LinksDiv>
              <CardMedia
                component="img"
                height="200"
                image={member.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography variant="subtitle1" fontWeight="600">
                  {member.name}
                </Typography>
                <Typography variant="caption">{member.designation}</Typography>
              </CardContent>
            </MemberCard>
          ))}
        </GridContainer>
      </div>
    </div>
  );
}
