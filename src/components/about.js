import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F1F1F1",
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: 100,
  },
  about: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    textAlign: "left",
  },
  info: {
    margin: 0,
  },
  progressBars: {
    width: "100%",
    height: 20,
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="flex-start"
      id="about"
    >
      <ProfileSummary />
      <ProgressBars />
    </Grid>
  );
};

const ProfileSummary = () => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6}>
      <Slide
        direction="right"
        in={true}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.about}>
          <h1>About</h1>
          <img
            src="https://www.w3schools.com/images/picture.jpg"
            alt="Profile"
          ></img>
          <div>
            <h4>Education: </h4>
            <p className={classes.info}>
              Coastal Carolina University: bachlor of science(Computer Science)
            </p>
            <p className={classes.info}>
              I'm a full stack developer based in Atlanta, Georgia. I love
              creating responsive and dynamic web applications.
            </p>
          </div>
          <p id="about info"></p>
        </div>
      </Slide>
    </Grid>
  );
};

const ProgressBars = () => {
  const [htmlValue, setHtmlValue] = useState(0);
  const htmlValueLimit = 95;
  const [javascriptValue, setJavascriptValue] = useState(0);
  const javascriptLimit = 90;
  const [cssValue, setCssValue] = useState(0);
  const cssLimit = 90;
  const [ReactValue, setReactValue] = useState(0);
  const reactLimit = 85;
  const [AlgorithmsValue, setAlgorithmsValue] = useState(0);
  const AlgorithmsLimit = 80;
  const [nodeValue, setNodeValue] = useState(0);
  const nodeLimit = 70;
  const [expressValue, setExpressValue] = useState(0);
  const expressLimit = 70;
  const [mongoValue, setMongoValue] = useState(0);
  const mongoLimit = 60;
  const classes = useStyles();

  useEffect(() => {
    const timer = setInterval(() => {
      updateProgressBar();
    }, 40);

    return () => {
      clearInterval(timer);
    };
  });

  const updateProgressBar = () =>{
    if (htmlValue < htmlValueLimit) {
      setHtmlValue((value) => {
        return value + 5;
      });
    }
    
    if(javascriptValue < javascriptLimit){
      setJavascriptValue((value) => {
        return value + 5;
      })
    }

    if(cssValue < cssLimit){
      setCssValue((value) => {
        return value + 5;
      })
    }

    if(ReactValue < reactLimit){
      setReactValue((value) => {
        return value + 5;
      })
    }

    if(AlgorithmsValue < AlgorithmsLimit){
      setAlgorithmsValue((value) => {
        return value + 5;
      })
    }

    if(nodeValue < nodeLimit){
      setNodeValue((value) => {
        return value + 5;
      })
    }

    if(expressValue < expressLimit){
      setExpressValue((value) => {
        return value + 5;
      })
    }

    if(mongoValue < mongoLimit){
      setMongoValue((value) => {
        return value + 5;
      })
    }
  }

  return (
    <Grid container item xs={12} sm={6}>
      <Slide
        direction="left"
        in={true}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.about}>
          <h1>Skills</h1>
          <label>HTML</label>
          <LinearProgress
            color="primary"
            value={htmlValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>Javascript</label>
          <LinearProgress
            color="primary"
            value={javascriptValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>CSS</label>
          <LinearProgress
            color="primary"
            value={cssValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>React</label>
          <LinearProgress
            color="primary"
            value={ReactValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>Algorithms & Data Structures</label>
          <LinearProgress
            color="primary"
            value={AlgorithmsValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>Node</label>
          <LinearProgress
            color="primary"
            value={nodeValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>Express</label>
          <LinearProgress
            color="primary"
            value={expressValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label>Mongodb</label>
          <LinearProgress
            color="primary"
            value={mongoValue}
            variant="determinate"
            className={classes.progressBars}
          />
        </div>
      </Slide>
    </Grid>
  );
};

export default About;
