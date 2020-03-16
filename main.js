
class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="app">
        <header id="mainHeader">
          <h1>Antonnio Jones</h1>
          <NavBar />
        </header>
        <main id="mainComponents">
          <HomeComponent />
        </main>
      </div>
    )
  }
}

const NavBar = () => {
  return (
  <nav id="nav-section">
    <ul>
      <li><a href="#homeSection">Home</a></li>
      <li><a href="#projectsSection">Projects</a></li>
      <li><a href="#skillsSection">Skills</a></li>
      <li><a href="#contactSection">Contact</a></li>
    </ul>
  </nav>
  )
}

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
    <FadeInSection id="homeSection" pose={this.state.isVisible ? 'visible' : 'hidden'}>
      <h1>Front-end Developer</h1>
      <p>Helping start-ups, small businesses, and agencies achieve </p>
      <p>high quality websites and exceptional user experience </p>
      <div id="changeComponents">
        <i className="fa fa-arrow-left"></i>
        <i className="fa fa-arrow-right"></i>
      </div>
    </FadeInSection>
  )
  }
}

const ProjectsComponent = () =>{
  return (
    <article id="projectsSection">
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
      <section id="project-card" class="container-lg">
        <header><h3>{this.props.title}</h3></header>
        <p>This is a summary of the project and
        the technology stack i used to create it
        </p>
        <a href="https://codepen.io/antonniojones/full/YzXyvwN" target="_blank">
          <button type="button" class="btn btn-primary">Visit</button>
        </a>
      </section>
    )
  }
}

const ContactComponent = () =>{
  return (
    <section id="contactSection">
      <ul>
        <li><a href="#">Email <i class="fas fa-envelope-square"></i></a></li>
        <li><a>Linkedin<i class="fab fa-linkedin"></i></a></li>
        <li><a>Github<i class="fab fa-github"></i></a></li>
      </ul>
    </section>
  )
}

ReactDOM.render(<App />,document.getElementById('root'));
