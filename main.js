class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="app">
        <NavBar />
        <HomeSection />
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

const HomeSection = () =>{
  return (
    <h1>Hello World</h1>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
