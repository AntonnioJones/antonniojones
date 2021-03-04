import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";

//material icons
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//react-on-screen
import TrackVisibility from "react-on-screen";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F1F1F1",
    textAlign: "center",
    paddingTop: 40,
    paddingBottom: 40,
    width: "100vw",
  },
  contactButtons: {
    marginBottom: 25,
    width: 250,
  },
  contactIcon: {
    width: 80,
    height: 80,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="contact">
      <h1>Contact</h1>
      <TrackVisibility once partialVisibility>
        {({ isVisible }) => <ContactButtons isVisible={isVisible} />}
      </TrackVisibility>
    </div>
  );
};

const ContactButtons = (props) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Slide direction="right" in={props.isVisible} timeout={1000}>
        <Button
          variant="contained"
          startIcon={
            <EmailIcon color="primary" className={classes.contactIcon} />
          }
          className={classes.contactButtons}
          href="mailto:antonnioj@gmail.com"
        >
          <h1>Email</h1>
        </Button>
      </Slide>
      <Slide direction="left" in={props.isVisible} timeout={1000}>
        <Button
          variant="contained"
          startIcon={
            <GitHubIcon color="primary" className={classes.contactIcon} />
          }
          className={classes.contactButtons}
          href="https://github.com/AntonnioJones"
        >
          <h1>GitHub</h1>
        </Button>
      </Slide>
      <Slide direction="right" in={props.isVisible} timeout={1000}>
        <Button
          variant="contained"
          startIcon={
            <LinkedInIcon color="primary" className={classes.contactIcon} />
          }
          className={classes.contactButtons}
          href="www.linkedin.com/in/antonniojones"
        >
          <h1>LinkedIn</h1>
        </Button>
      </Slide>
    </Grid>
  );
};

export default Contact;
