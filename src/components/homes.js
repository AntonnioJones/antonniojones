import React from "react";
import theme from "../util/theme";
import { makeStyles } from '@material-ui/core/styles';

//material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    container: {
      paddingTop: 20,
      textAlign: "center",
    },


});

function Home() {
    const classes = useStyles();
  return (
    <Grid item lg className={classes.container}>
        <h1>Antonnio Jones</h1>
        <h3>A Full Stack Developer</h3>
        <Button variant="outlined" color="primary">
          Learn More
        </Button>
     </Grid>
  );
}

export default Home;
