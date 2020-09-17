import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    minHeight: "100vh",
  },
  home: {
    paddingTop: "20%"
  }
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
  const classes = useStyles();
  return (
    <div {...props} id="home" className={classes.home}>
      <h1>Antonnio Jones</h1>
      <h3>Full Stack Developer</h3>
    </div>
  );
};

export default Home;
