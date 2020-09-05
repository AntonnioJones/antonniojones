class Home extends React.Component{

    state = { isVisible: false };
 
   componentDidMount() {
     this.setState({ isVisible: !this.state.isVisible });
   }
 
   render(){
   return (
     <div id="homeSection" className="col align-self-center">
       <FadeInSection pose={this.state.isVisible ? 'visible' : 'hidden'}>
         <h1>Welcome to my portfolio</h1>
         <p>I am a software developer that specalizes in front end development.</p>
         <p>I enjoy game development, building web applications, and learning new skills</p>
         <p>Scroll down to checkout some of my work, view my skills, or to contact me</p>
       </FadeInSection>
     </div>
   )
   }
 }
