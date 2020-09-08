import React from "react";
import "./App.css";

//react pages
import Home from "./components/homes";
import About from "./components/about";

//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//material-ui
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid'
import {theme} from './util/theme.js';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
       <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="stretch"
        className="container"
      >
        <Home/>
        <About/>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
