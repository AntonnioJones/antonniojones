import React from "react";
import "./App.css";

//react pages
import Home from "./components/homes";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";

//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//material-ui
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { theme } from "./util/theme.js";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="stretch"
        className="container"
      >
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
