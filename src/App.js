import React from "react";
import "./App.css";

//react pages
import Home from "./components/homes";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import NoPage from "./components/nopage";

//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//material-ui
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { theme } from "./util/theme.js";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Grid
              container
              spacing={0}
              direction="row"
              justify="center"
              alignItems="stretch"
              className="container"
            >
              <AppBar position="fixed" color="primary">
                <Toolbar>
                  <Button color="inherit" href="#home">Home</Button>
                  <Button color="inherit" href="#about">About</Button>
                  <Button color="inherit" href="#portfolio">Portfolio</Button>
                  <Button color="inherit" href="#contact">Contact</Button>
                </Toolbar>
              </AppBar>
              <Home />
              <About />
              <Portfolio />
              <Contact />
            </Grid>
          </Route>
          <Route exact path="*">
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
