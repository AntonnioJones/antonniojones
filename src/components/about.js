import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

//material UI
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    container: {
      paddingTop: 20,
      textAlign: "center",
    },


});

const About = () => {
    const classes = useStyles();
    return (
      <Grid item lg className={classes.container}>
            
      </Grid>
    )
}

export default About;