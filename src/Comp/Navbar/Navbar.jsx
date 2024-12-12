import React, { useRef } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import home from '../../assets/home.png';
import remove from '../../assets/remove.png';

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };

  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  };

  return (
    <div className="navbar">
      

      {/* Mobile Menu Toggle Button */}
      <img
        src={home}
        style={{ width: '20px' }}
        className="nav-mob-open"
        onClick={openMenu}
        alt="Open Menu"
      />

     
      <ul className="nav-menu" ref={menuRef}>
      <h3>Portfolio</h3>
        <img
          src={remove}
          alt="Close Menu"
          style={{ width: '20px' }}
          className="nav-mob-close"
          onClick={closeMenu}
        />
        <div className="nav-menu-items">
          <li>
            <AnchorLink href="#home" className="nav-menu-item" id="nav-menu-home">
              Home
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#about" className="nav-menu-item">
              About me
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#services" className="nav-menu-item">
              Services
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#myWork" className="nav-menu-item">
              Projects
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#myWork" className="nav-menu-item">
              Certificates
            </AnchorLink>
          </li>
          <li>
            <AnchorLink offset={50} href="#contact" className="nav-menu-item" id="nav-menu-contact">
              Contact
            </AnchorLink>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
