import React from "react";
import theme from "../util/theme";
import { makeStyles, withTheme } from '@material-ui/core/styles';

//material UI
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Container } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  container: {

      backgroundColor: "black",
      color:"white",
      textAlign:"center",
      minHeight: "100vh"
    },
}));

function Home() {
    const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.container}>
        <h1>Antonnio Jones</h1>
        <h3>A Full Stack Developer</h3>
        <Button variant="outlined" color="primary">
          Learn More <ArrowDownwardIcon> </ArrowDownwardIcon>
        </Button>
        
     </Container>
  );
}

export default Home;
