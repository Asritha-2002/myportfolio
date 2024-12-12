import React from 'react'
import './Projects.css'
import eye from '../../assets/eye.svg'
import my_work from '../../assets/myWork_data'
const Projects = () => {
  return (
    <div className='projects' id='projects'>
     
      <div className="projects-container">
{
    my_work.map(work=>{
        const {w_id,w_name,w_img,w_technologies,w_code}=work
        return  <div key={w_id}>
            <h3>{w_name}</h3>
            <img src={w_img} alt=""  key={w_id} className='pimg'/>
            <p>Technologies Used: {w_technologies}<br/> <br/><a href={w_code} target='_blank'><img src={eye} alt="" style={{width:"20px"}} className='project-code'/></a>  </p>
        </div>
           
    })
}
      </div>
    </div>
  )
}

export default Projects
