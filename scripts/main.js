const Router = window.ReactRouterDOM.BrowserRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/content" component={Content} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
