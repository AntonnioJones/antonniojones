var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/content" component={Content}></Route>
        </Switch>
      </Router>
    )
  }
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

//posed parent
const Move = posed.div({
  transition :{
    type: 'physics',
    velocity: 1000
  }
});

//posed NavBar
const PopBar = posed.nav({
  open: { y: '0%', staggerChildren: 100,transition :{
    duration: 400,
    ease: 'linear'
  } },
  closed: {y: '-100%',}
})

const PopItem = posed.li({
  open: { opacity: 1 },
  closed: { opacity: 0 },
})



class SkillsComponent extends React.Component{

  state={isVisible: false};

  componentDidMount() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render(){
    return(
      <FadeInSection className="container border-top" id="skillsSection" pose={this.state.isVisible ? 'visible' : 'hidden'}>
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
            <div className="progress-bar" role="progressbar" style={{width: "93%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">93%</div>
          </div>
          <label>REACT</label>
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
          <label>Mongodb/NoSQL</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "75%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <label>Node</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          <label>Express</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          <label>D3.js</label>
          <div className="progress" style={{height:"25px"}}>
            <div className="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">50%</div>
          </div>
        </div>
      </FadeInSection>
    )
  }
}

class ProjectCard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="col-md-4">
        <div className="card box-shadow text-center">
          <img className="card-img-top" src={this.props.imgLink} alt={`${this.props.title} image`}></img>
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
