import React, { useState } from 'react'
import './About.css'
import profile from '../../assets/profilee.jpeg'
import Skills from './Skills'
import Education from './Education'
const About = () => {
const [state,setState]=useState(true)
  return (
    <div className='about' id='about'>
        <div className="about-title"><h1>About Me</h1></div>
      <div className="about-profile">
        <img src={profile} alt="" style={{width:"20%"}}/>
      </div>
      <div className="about-overview">
        <p>Passionate front-end developer skilled in HTML, CSS, JavaScript and the React library, with a focus on responsive design. Eager to solve problems and build user-centered applications. Seeking an entry-level role to contribute to innovative projects and advance my skills in a dynamic team environment.</p>

      </div>
      
      <div className="about-skills">
        <div className="about-skills-names">
          <button onClick={()=>setState(true)} disabled={state}>Skills</button>
          <button onClick={()=>setState(false)} disabled={!state}>Education</button>
        </div>
 <div className='about-skill-type'>
 {
state?<Skills/>:<Education/>
     }
  </div>   
      </div>
    </div>
  )
}

export default About
