import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "rgb(255,255,255)",
    borderTop: "2px solid rgb(235, 235, 224)",
    padding: 5,
    paddingBottom: 7,
  },
  name: {
    color: "black",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        Made with ❤️ by{" "}
        <a
          href="https://github.com/saifullahamin"
          // eslint-disable-next-line react/jsx-no-target-blank
          target="_blank"
          className={classes.name}
        >
          Saifullah Amin
        </a>{" "}
        {<GitHubIcon />}
      </footer>
    </div>
  );
};

export default Footer;
