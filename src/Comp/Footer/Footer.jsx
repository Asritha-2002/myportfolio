import React, { useState } from 'react';
import './Footer.css';
import logo from '../../assets/email.png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    if (!email) {
      alert('Please enter a valid email address');
      return;
    }

    const payload = {
      access_key: 'e61f45c0-177b-4b24-8480-c4fbec89672b', // Replace with your Web3Forms access key
      email,
      subject: 'New Subscriber',
      message: `A new subscriber has joined: ${email}`,
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    }).then((response) => response.json());

    if (res.success) {
      alert('Thank you for subscribing!');
      setEmail(''); // Clear the email input field
    } else {
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h3>Asritha Devi Saladi</h3>
          <p>I'm a web developer from India, seeking a fresher opportunity</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={logo} alt="" style={{ width: '20px' }} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="footer-subscribe" onClick={handleSubscribe}>
            Subscribe
          </div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2024 Asritha Devi. All rights reserved
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
