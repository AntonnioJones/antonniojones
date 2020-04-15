
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
      <h1>These are my Projects</h1>
      <section id="project-grid">
        <ProjectCard title="Social App"/>
        <ProjectCard title="Todo App" />
        <ProjectCard title="Drumpad" />
      </section>
    </article>
  )
}

class ProjectCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section id="project-card" className="container-lg">
        <header><h3>{this.props.title}</h3></header>
        <p>This is a summary of the project and
        the technology stack i used to create it
        </p>
        <a href="https://codepen.io/antonniojones/full/YzXyvwN" target="_blank">
          <button type="button" className="btn btn-primary">Visit</button>
        </a>
      </section>
    )
  }
}

const ContactComponent = () =>{
  return (
    <section id="contactSection" className="col">
      <ul>
        <li><a href="#">Email <i className="fas fa-envelope-square"></i></a></li>
        <li><a>Linkedin<i className="fab fa-linkedin"></i></a></li>
        <li><a>Github<i className="fab fa-github"></i></a></li>
      </ul>
    </section>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
