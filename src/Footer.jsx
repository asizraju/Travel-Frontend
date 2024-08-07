import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css'; // Ensure this CSS file is created

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-icons">
        <Nav.Link href="https://www.facebook.com/" className="footer-icon"><FaFacebook /></Nav.Link>
        <Nav.Link href="https://twitter.com/" className="footer-icon"><FaTwitter /></Nav.Link>
        <Nav.Link href="https://www.instagram.com/" className="footer-icon"><FaInstagram /></Nav.Link>
        <Nav.Link href="https://www.tiktok.com/" className="footer-icon"><RiTiktokLine /></Nav.Link>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h6>Help Center</h6>
          <h6>Careers</h6>
          <h6>Privacy and Cookies Statement</h6>
        </div>
        <div className="footer-column">
          <h6>About Viator</h6>
          <h6>Sitemap</h6>
          <h6>Supplier Sign Up</h6>
        </div>
        <div className="footer-column">
          <h6>News</h6>
          <h6>Travel Agents</h6>
          <h6>Become an Affiliate</h6>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <div className="footer-buttons">
          <Nav.Link href="https://www.youtube.com/" className="btn-link">
            <button type="button" className="btn btn-dark">YouTube</button>
          </Nav.Link>
          {/* <button type="button" className="btn btn-dark">PlayStore</button> */}
        </div>
        <div className="footer-info d-flex flex-wrap justify-content-evenly" >
          <h6>@1997-2024 Viator</h6>
          <h6>Terms & Conditions</h6>
          <h6>Viator Works</h6>
          <h6>Cookie Consent</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
