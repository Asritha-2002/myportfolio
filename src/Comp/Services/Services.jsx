import React from 'react';
import './Services.css';
import service_Data from '../../assets/services_Data';

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className="services-title">
        <h1>Services</h1>
      </div>
      <div className="services-container">
        {service_Data.map((service) => {
          const { s_no, s_name, s_desc, s_img } = service;
          return (
            <div 
              key={s_no} 
              className='services-format' 
              style={{ '--bg-img': `url(${s_img})` }}
            >
              <h3>{s_no}</h3>
              <h2>{s_name}</h2>
              <p>{s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
