import './Nav.css';
import React , {Component} from 'react';
import Video from "./media/videoplayback.mp4";


class Nav extends Component {
  constructor (props) {
    super(props)
    this.contactRef = React.createRef();
    this.homeRef = React.createRef();
    this.aboutRef = React.createRef();
    this.programRef = React.createRef();
  }
  scrollDiv = (div) => {
    div.scrollIntoView ({behaviour : "smooth", block : "start"})
    console.log(div);
  }
  changeColor = colorVar => {
    this.setState({ 
      color: colorVar });
  };

  render() {
    return (
      <div className="navigation">
        <div className = "navigation-content">
          <ul >
            <li className = "homeList"><a href="#home" onClick={() =>  this.scrollDiv(this.homeRef.current)} >PEGASUS</a></li>
            <li className = "aboutList"><a href ="#about" onClick={() =>  this.scrollDiv(this.aboutRef.current)}>Why You should Gym With Us</a></li>
            <li className = "programList"><a href ="#program" onClick={() =>  this.scrollDiv(this.programRef.current)}>Our Workout Programs</a></li>
            <li className = "contactList"><a href="#contact" onClick={() =>  this.scrollDiv(this.contactRef.current)}>Contact</a></li>
          </ul>
        </div>
       <div className="page-content">
         <div className="home page" ref={this.homeRef}>
            <video className='videoTag' autoPlay loop muted>
              <source src= {Video} type='video/mp4' />
            </video>
            <div className="pegasus-title">
              <span>PEGASUS</span>
              <div>Celebrating Women's Health</div>
            </div>     
          </div>
          <div className="about" ref={this.aboutRef}>
            <div className="about-heading">
            WHY YOU SHOULD GYM WITH US
            </div> 
            <div className = "aboutContent">
              <div className="about-details">
                <p>  WHY WE ARE</p>
                <div>
                  Confidence & belief in yourself to succeed,
                  Knowledge in health and fitness,
                  To improve your mindset,
                  To be a part of a super supportive community,
                  To get the biggest bang for your buck (way affordable),
                  To do it all without having to take supplements.
                </div>
              </div>
            </div> 
           <div className = "secondaboutContent">
             <div className="about-details">
               <p>  WHO WE ARE</p>
               <div>
                 <h2> Hey, I'm Susan.</h2> a co-founder of pegasus gym and also,
                 Your Strength & Nutrition Queen.
                 To us, being a woman means being able to 
                 overcome your obsessive, perfectionist tendencies,
                  and learn to stand in your power—regardless of a number
                   on the scale. It means being grateful for movement, 
                   listening to your body, and honoring it’s needs
                </div>
              </div>
           </div>
           <div className = "thirdaboutContent">
             <div className="about-details">
               <p>HOW WE GET WE WANT</p>
               <div>
                 Health and fitness information that makes you feel great about yourself,
                 Workout and nutrition information 
                 that fits your life, and doesn't dominate it. finally,
                 No deprivation, exhaustion, 
                 or obsessive eating habits required.
               </div>
              </div>
            </div> 
          </div>
          <div className = "program page" ref={this.programRef}>
            <div className = "program-heading">OUR WORKOUT PROGRAMS</div>
            <div className="program-content">
              <p className="heading"> Kettlebell Exercises for Beginners</p>
              <div>
                No matter your fitness level or exercise history,
               kettlebells are a versatile training tool for building
                full-body strength and endurance
              </div>
            </div>
            <div  className="program-content">
              <p className="heading">Body Image Freedom</p>
              <div>
                Bust through negative beliefs, change your mindset,
               and start feeling awesome in your own skin with this
                information-packed, free 5-day course.
              </div>
            </div>
            <div  className="program-content">
              <p className="heading">Developing Grip Strength </p>
              <div>
                  While grip strength exercises are often overlooked,
                 a strong grip will pay large dividends in your 
                 strength and body work outtraining
              </div>
            </div>
         </div>
         <div className = "contact page" ref={this.contactRef}>
           <div className = "contact-content">
             <div className = "heading">
               <p>Take Care of you; Join us Today!</p>
               Contact Us
             </div>
             <div>
                 <p>Contact: 555-(0)-277</p>
                 <p>Location: 64, prrivet drive, hollywood avenue</p>
                 <p>Email: pegasusgym@yahoo.com</p>
             </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Nav;
