
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
        <main id="mainComponents" className="container-fluid">
          <HomeComponent />
          <ProjectsComponent />
          <ContactComponent />
        </main>
      </div>
    )
  }
}

const NavBar = () => {
  return (
  <nav id="nav-section" className="navbar navbar-expand-lg navbar-dark bg-dark">
  <h1 className="navbar-brand">Antonnio Jones</h1>
    <ul className="navbar-nav">
      <li className="nav-item"><a href="#homeSection" className="nav-link">Home</a></li>
      <li className="nav-item"><a href="#projectsSection" className="nav-link">Projects</a></li>
      <li className="nav-item"><a href="#skillsSection" className="nav-link">Skills</a></li>
      <li className="nav-item"><a href="#contactSection" className="nav-link">Contact</a></li>
    </ul>
  </nav>
  )
}

//a posed section that fades in a section
const FadeInSection = posed.section({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 800,
       ease: 'easeIn'
    }
  }
});

class HomeComponent extends React.Component{

   state = { isVisible: false };

  componentDidMount() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render(){
  return (
    <div id="homeSection" className="col align-self-center">
        <h1>Front-end Developer</h1>
        <img src="" alt="A picture of me"></img>
        <p>Helping start-ups, small businesses, and agencies achieve </p>
        <p>high quality websites and exceptional user experience </p>
    </div>
  )
  }
}

class SkillsComponent extends React.Component{

}

const ProjectsComponent = () =>{
  return (
    <article id="projectsSection" className="col">
      <div className="container">
      <h1>Projects</h1>
      <div className="row">
        <ProjectCard title="Social App"/>
        <ProjectCard title="Todo App" />
        <ProjectCard title="Drumpad" />
      </div>
      </div>
    </article>
  )
}

class ProjectCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-md-4">
        <div className="card box-shadow text-center">
          <img className="card-img-top" src="images/todoApp.png" alt="Card image cap"></img>
          <div className="card-body">
            <h3 className="card-title">{this.props.title}</h3>
            <p className="card-text">This is a summary of the project and
            the technology stack i used to create it
            </p>
            <a href="https://codepen.io/antonniojones/full/YzXyvwN" target="_blank">
              <button type="button" className="btn btn-primary">Visit</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

const ContactComponent = () =>{
  return (
    <footer id="contactSection" className="col border-top navbar navbar-expand-lg">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="mailto:antonnioj3@example.com?Subject=Hello%20again">Email <i className="fa fa-envelope-square"></i></a></li>
        <li className="nav-item"><a className="nav-link" href="https://www.linkedin.com/in/antonnio-jones-2ab8607b/">Linkedin<i className="fa fa-linkedin"></i></a></li>
        <li className="nav-item"><a className="nav-link" href="https://github.com/AntonnioJones">Github<i className="fa fa-github"></i></a></li>
      </ul>
    </footer>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
