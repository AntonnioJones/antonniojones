class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="app">
        <NavBar />
        <HomeComponent />
        <ProjectsComponent />
      </div>
    )
  }
}

const NavBar = (props) => {
  return (
  <nav id="nav-section">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
  )
}

const HomeComponent = () =>{
  return (
    <h1>Hello World</h1>
  )
}

const ProjectsComponent = () =>{
  return (
    <h1>These are my Projects</h1>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
