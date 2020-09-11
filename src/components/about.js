import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F1F1F1",
    paddingTop: 20,
    textAlign: "center",
    minHeight: "100vh",
  },
  about: {
    paddingLeft: 20,
    textAlign: "left"
  }
});

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="space-evenly"
      alignItems="flex-start"
    >
      <Grid container item xs={6}>
        <div className={classes.about}>
          <h1>About</h1>
          <img src="../images/no-img.png" alt="Profile Picture"></img>
          <div>
            <h4>Education: </h4>
            <p>Coastal Carolina University: bachlor of science(Computer Science)</p>
          </div>
          <p id="about info"></p>
        </div>
      </Grid>
      <Grid container item xs={6}>
        <div className="about">
          <h1>Skills</h1>
        </div>
      </Grid>
    </Grid>
  );
};

export default About;
