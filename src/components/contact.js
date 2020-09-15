import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//fontawesome
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

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
    width: 250
  },
  contactIcon: {
    width: 80,
    height: 80,
  },
});

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>contact</h1>
      <Grid container direction="column" justify="center" alignItems="center">
        <Button
          variant="contained"
          startIcon={
            <EmailIcon color="primary" className={classes.contactIcon} />
          }
          className={classes.contactButtons}
        >
          <h1>Email</h1>
        </Button>
        <Button
          variant="contained"
          startIcon={
            <GitHubIcon color="primary" className={classes.contactIcon} />
          }
          className={classes.contactButtons}
        >
          <h1>GitHub</h1>
        </Button>
        <Button
          variant="contained"
          startIcon={
            <LinkedInIcon color="primary" className={classes.contactIcon} />
          }
          className={classes.contactButtons}
        >
          <h1>LinkedIn</h1>
        </Button>
      </Grid>
    </div>
  );
};

export default Contact;
