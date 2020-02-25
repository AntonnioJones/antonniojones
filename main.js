class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="app">
        <header id="mainHeader">
          <NavBar />
        </header>
        <HomeComponent />
        <ProjectsComponent />
        <ContactComponent />
      </div>
    )
  }
}

const NavBar = (props) => {
  return (
  <nav id="nav-section">
    <ul>
      <li><a href="#homeSection">Home</a></li>
      <li><a href="#projectsSection">Projects</a></li>
      <li><a href="#contactSection">Contact</a></li>
    </ul>
  </nav>
  )
}

const HomeComponent = () =>{
  return (
    <section id="homeSection">
      <h1>Hello, My name is Antonnio Jones</h1>
      <h2>I am a front-end developer</h2>
      <p>I specialize in React </p>
    </section>
  )
}

const ProjectsComponent = () =>{
  return (
    <section id="projectsSection">
      <h1>These are my Projects</h1>
    </section>
  )
}

const ContactComponent = () =>{
  return (
    <section id="contactSection">
      <ul>
        <li>Email</li>
        <li>Linkedin</li>
        <li>Github</li>
      </ul>
    </section>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
