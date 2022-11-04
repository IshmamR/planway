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
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "/components/CustomButtons/Button.js";

import styles from "/styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import styled from "styled-components";
import { Box, Paper, Typography } from "@mui/material";

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

const techStacks = {
  frontEnd: [
    {
      title: "Bootstrap",
      img: "https://www.creative-tim.com/assets/frameworks/icon-bootstrap-c3ffb8433c1c97ba7143dc94a76d89b2672ebcc0ed83ce02118891e3cb3d5aaf.png",
    },
    {
      title: "Angular",
      img: "https://www.creative-tim.com/assets/frameworks/icon-angular-8da1c0b487347a482dccc34be61024c9f3d0bde60eecaa3d5e408225d3a77f67.png",
    },
    {
      title: "React",
      img: "https://www.creative-tim.com/assets/frameworks/icon-react-5dcce0e652c9eb91ff22e246cbf7b98a63b87847a29847b514f1e3b358628084.png",
    },
    {
      title: "Vue",
      img: "https://www.creative-tim.com/assets/frameworks/icon-vue-2c8224b9e7022abbd55624c324502139bfdb63b5864ba0cb3e0bbe91e72ff4a1.png",
    },
    {
      title: "React Native",
      img: "https://www.creative-tim.com/assets/frameworks/icon-react-native-24436bbfd1d51d119c73d3136ca5a8da0880d4c51e9d28163eadf724190e581f.png",
    },
    {
      title: "Flutter",
      img: "https://www.creative-tim.com/assets/frameworks/icon-flutter-bd033e4e6ed5827ca369a95c73df2f15dc6b34ac558d3064fb2daf6aff082c6b.png",
    },
    {
      title: "Svelte",
      img: "https://www.creative-tim.com/assets/frameworks/icon-svelte-f6061f69913eff739db04176723c5822e2ee1701bdc3dc17e9dd9044ff66828e.png",
    },
    //
    {
      title: "Material UI",
      img: "https://www.creative-tim.com/assets/frameworks/icon-material-ui-6249225da34dd8a86189c49ef108f3dfdada51472f905093728657b87af0d9c1.png",
    },
    {
      title: "Vuetify",
      img: "https://www.creative-tim.com/assets/frameworks/icon-vuetify-82418e69b3798f172b44d4c929247b2323f7cc11dacbd6b445b91bb09f19052b.png",
    },
    {
      title: "Tailwind CSS",
      img: "https://www.creative-tim.com/assets/frameworks/icon-tailwind-c706945f029340229d0a5bbfb2f4d975eb331c42a18bc45f027324a14c24fcef.png",
    },
    {
      title: "Vue Material",
      img: "https://www.creative-tim.com/assets/frameworks/icon-vuematerial-0ebe872e4edcdae42f401ef3b12741d6b815b72d591e11abc64d654ef2b7ad32.png",
    },
    {
      title: "Reactstrap",
      img: "https://www.creative-tim.com/assets/frameworks/icon-reactstrap-7eafb7addca7b074c38f42c31521075a02702072c6c4374ef894e48d4d3b41c4.png",
    },
    {
      title: "React Bootstrap",
      img: "https://www.creative-tim.com/assets/frameworks/icon-reactbootstrap-64ad511b260c4fb9b7a6d05ec6424ae6aefbbbc06daf1348c353557e0c8dc3d0.png",
    },
    {
      title: "Vue Bootstrap",
      img: "https://www.creative-tim.com/assets/frameworks/icon-bootstrapvue-2a689016d4017801ab6404566ee59e46e487d3e837074372ee6ab2e8bfb01b61.png",
    },
  ],
  backend: [
    {
      title: "Laravel",
      img: "https://www.creative-tim.com/assets/frameworks/icon-laravel-411a5e109ea89dbf45dedf960e25d06f785dd19a5466017ed5e6acdb303bd735.png",
    },
    {
      title: "Django",
      img: "https://www.creative-tim.com/assets/frameworks/icon-django-6896938f27179f1b1c290a8f573fb6b4ce9aaaf698c147364a362d5fa2a3474a.png",
    },
    {
      title: "Flask",
      img: "https://www.creative-tim.com/assets/frameworks/icon-flask-0a5bd1151cea06fc803121e97d64f43f50630c81ede365c36535fe0003953824.png",
    },
    {
      title: "Next",
      img: "https://www.creative-tim.com/assets/frameworks/icon-nextjs-552cecd0240ba0ae7b5fbf899c1ee10cd66f8c38ea6fe77233fd37ad1cff0dca.png",
    },
    {
      title: "Nuxt",
      img: "https://www.creative-tim.com/assets/frameworks/icon-nuxtjs-a69eef78a8248f3203b13037fe7fb22ede6839e632991210587cf1ef5b74d315.png",
    },
    {
      title: "Nodejs",
      img: "https://www.creative-tim.com/assets/frameworks/icon-nodejs-262271f6248c0b85bfa97feccbf35174d07df466c466aaa383518aaa2d2d41e4.png",
    },
    {
      title: "AspNet",
      img: "https://www.creative-tim.com/assets/frameworks/icon-aspnet-7d83ea8cee847974976c29e2f707215d0dadfac314502fb8f6e78de5881fbbd2.png",
    },
  ],
};

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <StyledDropDownButton>
          <Icon className={classes.icons}>unarchive</Icon>
          <Typography variant="caption">Technologies</Typography>
          <DropDownMenu elevation={5}>
            <Box py={2} px={2}>
              <Box display="flex">
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={200}
                >
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    fontWeight="500"
                    mb={2}
                  >
                    Front-End
                  </Typography>
                  {techStacks.frontEnd.slice(0, 7).map((item) => (
                    <Box
                      key={item.title}
                      display="flex"
                      gap="4px"
                      alignItems="center"
                      mb={1}
                      component="a"
                      href="#"
                      color="black"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        height="20"
                        width="20"
                        loading="lazy"
                      />
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="black"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={200}
                >
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    color="white"
                    mb={2}
                  >
                    Front-End
                  </Typography>
                  {techStacks.frontEnd.slice(7).map((item) => (
                    <Box
                      key={item.title}
                      display="flex"
                      gap="4px"
                      alignItems="center"
                      mb={1}
                      component="a"
                      href="#"
                      color="black"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        height="20"
                        width="20"
                        loading="lazy"
                      />
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="black"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={200}
                >
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    fontWeight="500"
                    mb={2}
                  >
                    Back-End
                  </Typography>
                  {techStacks.backend.map((item) => (
                    <Box
                      key={item.title}
                      display="flex"
                      gap="4px"
                      alignItems="center"
                      mb={1}
                      component="a"
                      href="#"
                      color="black"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        height="20"
                        width="20"
                        loading="lazy"
                      />
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="black"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </DropDownMenu>
        </StyledDropDownButton>
      </ListItem>
      <ListItem className={classes.listItem}>
        <StyledDropDownButton>
          <Icon className={classes.icons}>unarchive</Icon>
          <Typography variant="caption">Drop right</Typography>
          <DropDownMenu elevation={5} right="true">
            <Box py={2} px={2}>
              <Box display="flex">
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={200}
                >
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    fontWeight="500"
                    mb={2}
                  >
                    Front-End
                  </Typography>
                  {techStacks.frontEnd.slice(0, 7).map((item) => (
                    <Box
                      key={item.title}
                      display="flex"
                      gap="4px"
                      alignItems="center"
                      mb={1}
                      component="a"
                      href="#"
                      color="black"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        height="20"
                        width="20"
                        loading="lazy"
                      />
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="black"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={200}
                >
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    color="white"
                    mb={2}
                  >
                    Front-End
                  </Typography>
                  {techStacks.frontEnd.slice(7).map((item) => (
                    <Box
                      key={item.title}
                      display="flex"
                      gap="4px"
                      alignItems="center"
                      mb={1}
                      component="a"
                      href="#"
                      color="black"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        height="20"
                        width="20"
                        loading="lazy"
                      />
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="black"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Box
                  flex={1}
                  p={1}
                  display="flex"
                  flexDirection="column"
                  minWidth={200}
                >
                  <Typography
                    variant="body1"
                    fontSize="18px"
                    fontWeight="500"
                    mb={2}
                  >
                    Back-End
                  </Typography>
                  {techStacks.backend.map((item) => (
                    <Box
                      key={item.title}
                      display="flex"
                      gap="4px"
                      alignItems="center"
                      mb={1}
                      component="a"
                      href="#"
                      color="black"
                    >
                      <img
                        src={item.img}
                        alt={item.title}
                        height="20"
                        width="20"
                        loading="lazy"
                      />
                      <Typography
                        variant="caption"
                        fontSize="16px"
                        color="black"
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </DropDownMenu>
        </StyledDropDownButton>
      </ListItem>
    </List>
  );
}
