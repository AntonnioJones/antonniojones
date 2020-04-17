
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
          <SkillsComponent />
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
        <p>Helping start-ups, small businesses, and agencies achieve </p>
        <p>high quality websites and exceptional user experience </p>
    </div>
  )
  }
}

class SkillsComponent extends React.Component{
  render(){
    return(
      <div className="container border-top" id="skillsSection">
        <h1>Skills and Tools</h1>
        <div id="progressbars">
          <label>HTML</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "96%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">96%</div>
          </div>
          <label>CSS/SASS</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">95%</div>
          </div>
          <label>Javascript</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
          <label>BootStrap</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
          <label>Algorithms and Data Structures</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          <label>REACT</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <label>D3.js</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
          <label>Mongodb/NoSQL</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          <label>Node</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
          <label>Express</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
        </div>
      </div>
    )
  }
}

const ProjectsComponent = () =>{
  return (
    <article id="projectsSection" className="col">
      <div className="container">
      <h1>Projects</h1>
      <div className="row">
        <ProjectCard title="Quote Generator" link="https://codepen.io/antonniojones/full/GRJgabL" imgLink="images/randomQuoteGenerator.png"/>
        <ProjectCard title="Education Map" link="https://codepen.io/antonniojones/full/xxGJyWE" imgLink="images/educationmap.png"/>
        <ProjectCard title="Todo App" link="todoapp.index.html" imgLink="images/todoapp.png"/>
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
          <img className="card-img-top" src={this.props.imgLink} alt="Card image cap"></img>
          <div className="card-body border-top">
            <h3 className="card-title">{this.props.title}</h3>
            <p className="card-text">This is a summary of the project and
            the technology stack i used to create it
            </p>
            <a href={this.props.link} target="_blank">
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
