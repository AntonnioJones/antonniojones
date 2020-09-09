import React from "react";
import theme from "../util/theme";
import { makeStyles, withTheme } from '@material-ui/core/styles';

//material UI
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';


const useStyles = makeStyles({
  container: {
      paddingTop: 20,
      textAlign: "center",
      backgroundColor: "black",
      color:"white",
      height: "100"
    },


});

function Home() {
    const classes = useStyles();
  return (
    <Grid item lg className={classes.container}>
        <h1>Antonnio Jones</h1>
        <h3>A Full Stack Developer</h3>
        <Button variant="outlined" color="primary">
          Learn More <ArrowDownwardIcon> </ArrowDownwardIcon>
        </Button>
        
     </Grid>
  );
}

export default Home;
