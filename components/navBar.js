class NavBar extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        isOpen: false
      }
    }
  
    componentDidMount() {
      this.setState({ isOpen: !this.state.isOpen });
    }
  
    render(){
      return (
      <PopBar id="nav-section" className="navbar navbar-expand-md navbar-dark bg-dark " pose={this.state.isOpen ? 'open' : 'closed'}>
        <h1 className="navbar-brand">Antonnio Jones</h1>
  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <PopItem className="nav-item" pose={this.state.isOpen ? 'open' : 'closed'}><a href="#homeSection" className="nav-link">Home</a></PopItem>
            <PopItem className="nav-item" pose={this.state.isOpen ? 'open' : 'closed'}><a href="#projectsSection" className="nav-link">Projects</a></PopItem>
            <PopItem className="nav-item" pose={this.state.isOpen ? 'open' : 'closed'}><a href="#skillsSection" className="nav-link">Skills</a></PopItem>
            <PopItem className="nav-item" pose={this.state.isOpen ? 'open' : 'closed'}><a href="#contactSection" className="nav-link">Contact</a></PopItem>
          </ul>
        </div>
  
      </PopBar>
      )
    }
  }