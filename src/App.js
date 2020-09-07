import React from 'react';
import './App.css';

//react pages
import Home from './pages/homes';
import Content from './pages/content';
import NoPage from './pages/nopage';

//react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/content" component={Content} />
        <Route exact path="/" component={Home}/>
        <Route path="*" component={NoPage} />
      </Switch>
    </Router>
  );
}

export default App;
