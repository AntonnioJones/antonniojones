import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    paddingTop: 20,
    textAlign: "center",
    minHeight: "100vh",
    paddingBottom: 15
  },
  card: {
    textAlign: "center",
    margin: 10
  },
  cardMedia: {
    height: 140,
  },
});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.root} id="portfolio">
      <h1>Portfolio</h1>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <ProjectCard
          title="Socia Media"
          summary="A social media app created with Firebase, Node, Express, and React.js"
        />
        <ProjectCard
          title="Education Map"
          summary="A social media app created with Firebase, Node, Express, and React.js"
        />
        <ProjectCard
          title="Todo App"
          summary="A social media app created with Firebase, Node, Express, and React.js"
        />
        <ProjectCard
          title="Quote Generator"
          summary="A social media app created with Firebase, Node, Express, and React.js"
        />
      </Grid>
    </Grid>
  );
};

const ProjectCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.cardMedia}
          image="../images/no-img.png"
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
  );
};

export default Portfolio;
