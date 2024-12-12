import React from 'react'
import './Home.css'
import logo from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import asritha_devi from '../../assets/asritha_devi_resume.pdf'
const Home = () => {

  return (
    <div className='home' id='home'>
       
        <div className="home-left">
            <img src={logo} alt="" />
        </div>
      <div className="home-right">
       <h1><span>I'm Asritha Devi Saladi,</span> seeking for a fresher role in web development</h1>
       <p>A passionate aspiring web developer focused on creating user-friendly and engaging web applications!</p>
       <div className="home-btns">
       
        <div className="home-btns-resume">
            <a href={asritha_devi} download="asritha_devi_resume"><button className='home-btns-resume-btn'>Resume</button></a>
        </div>
        <div className="home-btns-contact">
            <button> <AnchorLink href='#contact'  style={{color:"black"}} className='btn-contact'>Contact </AnchorLink>  </button>
        </div>
       </div>
      </div>
        </div>
    
  )
}

export default Home
