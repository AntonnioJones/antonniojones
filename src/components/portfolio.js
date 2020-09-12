import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//material UI
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    paddingTop: 20,
    textAlign: "center",
    minHeight: "100vh",
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
    >
      <h1>Portfolio</h1>
    </Grid>
  );
};

export default Portfolio;
