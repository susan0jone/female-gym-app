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
                  Lorem ipsum dolor sit amet,<br/>
                  consectetur adipiscing elit. <br/>
                  Cras tincidunt orci ut suscipit pretium.<br/>
                  Class aptent taciti sociosqu ad litora torquent<br/>
                  per conubia nostra, per inceptos himenaeos.
                </div>
              </div>
            </div> 
           <div className = "secondaboutContent">
             <div className="about-details">
               <p>  WHO WE ARE</p>
               <div>
                 Lorem ipsum dolor sit amet,<br/>
                 consectetur adipiscing elit. <br/>
                 Cras tincidunt orci ut suscipit pretium.<br/>
                 Class aptent taciti sociosqu ad litora torquent<br/>
                 per conubia nostra, per inceptos himenaeos.
                </div>
              </div>
           </div>
           <div className = "thirdaboutContent">
             <div className="about-details">
               <p>HOW WE GET WE WANT</p>
               <div>
                 Lorem ipsum dolor sit amet,<br/>
                 consectetur adipiscing elit. <br/>
                 Cras tincidunt orci ut suscipit pretium.<br/>
                 Class aptent taciti sociosqu ad litora torquent<br/>
                 per conubia nostra, per inceptos himenaeos.
               </div>
              </div>
            </div> 
          </div>
          <div className = "program page" ref={this.programRef}>
            <div className = "program-heading">OUR WORKOUT PROGRAMS</div>
            <div className="program-content">
              <p className="heading"> Lorem ipsum dolor sit amet</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                Cras tincidunt orci ut suscipit pretium. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </div>
            <div  className="program-content">
              <p className="heading"> Lorem ipsum dolor sit amet</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Cras tincidunt orci ut suscipit pretium. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </div>
            </div>
            <div  className="program-content">
              <p className="heading"> Lorem ipsum dolor sit amet</p>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Cras tincidunt orci ut suscipit pretium. 
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
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
               <p>Location: (*Insert Location Here)</p>
               <p>E-mail: (*Insert Email Here)</p>
               <p>Phone Number: (*Insert Phone Number Here)</p>
             </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Nav;