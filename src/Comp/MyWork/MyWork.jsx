import React, { useState } from 'react'
import './MyWork.css'
import Projects from '../Projects/Projects'
import Certifications from '../Certifications/Certifications'
const MyWork = () => {
    const [state,setState]=useState(false)
  return (
    <div className='mywork' id='myWork'>
      <div className="mywork-title">
      <h1>My Work</h1>
      <div className="mywork-types">
        <div className="mywork-certificetes">
            <button onClick={()=>setState(false)} disabled={!state}>Certificates</button>
        </div>
        <div className="mywork-projects">
            <button onClick={()=>setState(true)} disabled={state}>Projects</button>
        </div>
      </div>
       <div className="mywork-container">
       {
state? <Projects/>:<Certifications/>
       }
       </div>
      </div>
    </div>
  )
}

export default MyWork
