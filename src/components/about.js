import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Image from '../images/antonniojonespic.png';

//material UI
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
//react-on-screen
import TrackVisibility from "react-on-screen";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F1F1F1",
    textAlign: "center",
    minHeight: "100vh",
    width: "100%",
    paddingTop: 100,
    paddingBottom: 50,
  },
  tracker: {
    paddingLeft: 50,
    paddingRight: 50,
    width: "100%",
    textAlign: "left",
  },
  labelHeader: {
    textAlign: "left",
  },
  about: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    textAlign: "center",
    alignContent: "center"
  },
  progressBars: {
    width: "100%",
    height: 20,
  },
  card: {
    maxWidth: 300,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
  },
  cardMedia: {
    height: 260,   
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <TrackVisibility once partialVisibility className={classes.root}>
      {({ isVisible }) => (
        <Grid
          container
          className={classes.root}
          direction="row"
          justify="center"
          alignItems="flex-start"
          id="about"
        >
          <ProfileSummary isVisible={isVisible} />
          <ProgressBars isVisible={isVisible} />
        </Grid>
      )}
    </TrackVisibility>
  );
};

const ProfileSummary = (props) => {
  const classes = useStyles();
  return (
    <Grid container item xs={12} sm={6}>
      <Slide
        direction="right"
        in={props.isVisible}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.about}>
          <h1 className={classes.headers}>About</h1>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={Image}
            />
          </Card>
          <div>
            <h5 className={classes.info}>
              Education: Bachlor of Science(Computer Science) from Coastal
              Carolina University
            </h5>
            <p className={classes.info}>
              I am a software developer that specalizes full stack web
              development. I live in Atlanta Georgia but can work remotely. I
              love creating responsive and dynamic web applications. My other
              programming interest include artifical intelligence, VR, and game
              development.
            </p>
          </div>
          <p id="about info"></p>
        </div>
      </Slide>
    </Grid>
  );
};

const ProgressBars = (props) => {
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

  const updateProgressBar = () => {
    if (htmlValue < htmlValueLimit && props.isVisible) {
      setHtmlValue((value) => {
        return value + 5;
      });
    }

    if (javascriptValue < javascriptLimit && props.isVisible) {
      setJavascriptValue((value) => {
        return value + 5;
      });
    }

    if (cssValue < cssLimit && props.isVisible) {
      setCssValue((value) => {
        return value + 5;
      });
    }

    if (ReactValue < reactLimit && props.isVisible) {
      setReactValue((value) => {
        return value + 5;
      });
    }

    if (AlgorithmsValue < AlgorithmsLimit && props.isVisible) {
      setAlgorithmsValue((value) => {
        return value + 5;
      });
    }

    if (nodeValue < nodeLimit && props.isVisible) {
      setNodeValue((value) => {
        return value + 5;
      });
    }

    if (expressValue < expressLimit && props.isVisible) {
      setExpressValue((value) => {
        return value + 5;
      });
    }

    if (mongoValue < mongoLimit && props.isVisible) {
      setMongoValue((value) => {
        return value + 5;
      });
    }
  };

  return (
    <Grid container item xs={12} sm={6}>
      <Slide
        direction="left"
        in={props.isVisible}
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <div className={classes.about}>
          <h1>Skills</h1>
          <label className={classes.labelHeader}>
            <p>HTML ({htmlValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={htmlValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>Javascript ({javascriptValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={javascriptValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>CSS ({cssValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={cssValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>React ({ReactValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={ReactValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>Algorithms & Data Structures ({AlgorithmsValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={AlgorithmsValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>Node ({nodeValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={nodeValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>Express ({expressValue}%)</p>
          </label>
          <LinearProgress
            color="primary"
            value={expressValue}
            variant="determinate"
            className={classes.progressBars}
          />
          <label className={classes.labelHeader}>
            <p>Mongodb ({mongoValue}%)</p>
          </label>
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
