import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";

//react-on-screen
import TrackVisibility from "react-on-screen";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    paddingTop: "5%",
    textAlign: "center",
    minHeight: "100vh",
    paddingBottom: 15,
  },
  card: {
    textAlign: "center",
    margin: 10,
  },
  cardMedia: {
    height: 200,
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      direction="row"
      justify="center"
      alignItems="flex-start"
      id="portfolio"
    >
      <h1>Portfolio</h1>
      <TrackVisibility once partialVisibility>
        {({ isVisible }) => <PortfolioInfo isVisible={isVisible} />}
      </TrackVisibility>
    </Grid>
  );
};

const PortfolioInfo = (props) => {
  return (
    <Grid container direction="row" justify="center" alignItems="flex-start">
      <Link href="https://antonniojones.com/todoapp/index.html">
        <ProjectCard
          title="Socia Media"
          summary="A social media app created with Firebase, Node, Express, and React.js"
          in={props.isVisible}
          imageLink=""
        />
      </Link>
      <Link href="https://codepen.io/antonniojones/full/xxGJyWE">
        <ProjectCard
          title="Education Map"
          summary="A social media app created with Firebase, Node, Express, and React.js"
          in={props.isVisible}
          imageLink="https://antonniojones.com/images/educationmap.png"
        />
      </Link>
      <Link href="https://antonniojones.com/todoapp/index.html">
        <ProjectCard
          title="Todo App"
          summary="A social media app created with Firebase, Node, Express, and React.js"
          in={props.isVisible}
          imageLink="https://antonniojones.com/images/todoApp.png"
        />
      </Link>
      <Link href="https://codepen.io/antonniojones/full/GRJgabL">
        <ProjectCard
          title="Quote Generator"
          summary="A social media app created with Firebase, Node, Express, and React.js"
          in={props.isVisible}
          imageLink="https://antonniojones.com/images/randomQuoteGenerator.png"
        />
      </Link>
    </Grid>
  );
};

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Zoom in={props.in} timeout={1000}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={props.imageLink}
            title={props.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.summary}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Zoom>
  );
};

export default Portfolio;
