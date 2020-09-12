import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F1F1F1",
    paddingTop: 20,
    textAlign: "center",
    minHeight: "100vh",
  },
  about: {
    width: "100%",
    marginLeft: 30,
    textAlign: "left"
  },
  progressBars:{
    width: "100%",
      height:15,
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
      id="about"
    >
      <Grid container item xs={12} sm={6}>
        <div className={classes.about}>
          <h1>About</h1>
          <img src="https://www.w3schools.com/images/picture.jpg" alt="Profile Picture"></img>
          <div>
            <h4>Education: </h4>
            <p>Coastal Carolina University: bachlor of science(Computer Science)</p>
            <p>I'm a full stack developer based in Atlanta, Georgia.
             I love creating responsive and dynamic web applications.</p>
          </div>
          <p id="about info"></p>
        </div>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <div className={classes.about}>
          <h1>Skills</h1>
          <label>HTML</label>
          <LinearProgress color="primary" value={95} variant="determinate" className={classes.progressBars}/>
          <label>Javascript</label>
          <LinearProgress color="primary" value={90} variant="determinate" className={classes.progressBars}/>
          <label>CSS</label>
          <LinearProgress color="primary" value={90} variant="determinate" className={classes.progressBars}/>
          <label>React</label>
          <LinearProgress color="primary" value={85} variant="determinate" className={classes.progressBars}/>
          <label>Algorithms</label>
          <LinearProgress color="primary" value={80} variant="determinate" className={classes.progressBars}/>
          <label>Node</label>
          <LinearProgress color="primary" value={70} variant="determinate" className={classes.progressBars}/>
          <label>Express</label>
          <LinearProgress color="primary" value={70} variant="determinate" className={classes.progressBars}/>
          <label>Mongodb</label>
          <LinearProgress color="primary" value={60} variant="determinate" className={classes.progressBars}/>
        </div>
      </Grid>
    </Grid>
  );
};

const progressBars = () => {

}

export default About;
