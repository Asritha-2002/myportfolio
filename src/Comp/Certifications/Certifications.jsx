import React, { useState } from 'react';
import './Certifications.css';
import certificate_data from '../../assets/certification_data';

const Certifications = () => {
  const [showAll, setShowAll] = useState(false);

  // Limit the displayed certificates if `showAll` is false
  const visibleCertificates = showAll ? certificate_data : certificate_data.slice(0, 4);

  return (
    <div className="certifications" id="certifications">
     
      <div className="certificate-container">
        {visibleCertificates.map((work) => {
          const { c_id, c_name, c_img } = work;
          return (
            <div key={c_id}>
              <h3>{c_name}</h3>
              <img
                src={c_img}
                alt={c_name}
                
              />
            </div>
          );
        })}
      </div>
      <button className="read-more-btn" onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'See More....'}
      </button>
    </div>
  );
};

export default Certifications;
