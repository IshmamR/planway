/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "/styles/jss/nextjs-material-kit/components/footerStyle.js";
import Link from "next/link";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <Link href="/">
                <a className={classes.block}>About us</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/">
                <a className={classes.block}>Blog</a>
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link href="/">
                <a className={classes.block}>Licenses</a>
              </Link>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , by&nbsp;
          <strong>Planway IT</strong>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
