import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

//material UI
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
      backgroundColor: "#F1F1F1",
      paddingTop: 20,
      width: "100%"
    },


});

const About = () => {
    const classes = useStyles();
    return (
      <Grid className={classes.container}>
            <Container>
              <h1>Profile</h1>
            </Container>
            <Container>
              <h1>Skills</h1>
            </Container>
      </Grid>
    )
}

export default About;