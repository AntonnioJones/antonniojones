import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Button from "@material-ui/core/Button";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    minHeight: "100vh",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.container}>
      <Fade in={true} timeout={2000}>
        <FadeInHome />
      </Fade>
    </Container>
  );
}

const FadeInHome = (props) => {
  return (
    <div {...props}>
      <h1>Antonnio Jones</h1>
      <h3>A Full Stack Developer</h3>
      <Button variant="outlined" color="primary" href="#about">
        Learn More <ArrowDownwardIcon> </ArrowDownwardIcon>
      </Button>
    </div>
  );
};

export default Home;
