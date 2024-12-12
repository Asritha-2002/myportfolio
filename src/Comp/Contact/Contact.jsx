import React, { useState } from 'react';
import './Contact.css';
import email from '../../assets/email.png';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const dataToSubmit = { ...formData, access_key: 'e61f45c0-177b-4b24-8480-c4fbec89672b' };
    const json = JSON.stringify(dataToSubmit);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
    }
  };

  return (
    <div className="contact" id="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I am actively seeking new opportunities and am immediately available to contribute. Feel free to get in touch with me!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <p id='contact-detail-email'>
                <img src={email} alt="" style={{ width: '15px' }} /> <span className='contact-email'>saladiasrithadevi@gmail.com</span>
              </p>
            </div>
            <div className="contact-detail">
              <p>
                <img src={phone} alt="" style={{ width: '15px' }} /> +918897810954
              </p>
            </div>
            <div className="contact-detail">
              <p id='contact-detail-address'>
                <img src={location} alt="" style={{ width: '15px' }} /> Seetharamapuram, Andhra Pradesh
              </p>
            </div>
            <h1 className="sub-heading">Let's Connect Through:</h1>
            <br />
            <div className="link-through">
              <div>
                <a href="https://www.instagram.com/invites/contact/?igsh=1karnwsmjjstx&utm_content=ted1xna">
                  <img src={instagram} alt="" style={{ width: '40px' }} className="link-through-insta" />
                </a>
              </div>
              <div>
                <a href="http://www.linkedin.com/in/saladi-asritha-devi-549249263">
                  <img src={linkedin} alt="" style={{ width: '40px' }} className="link-through-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows={8}
            placeholder="Enter your message here"
            value={formData.message}
            onChange={handleChange}
          />
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
