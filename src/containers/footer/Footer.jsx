import React from 'react';
import MetaSonicAILogo from '../../metasonicai-high-resolution-logo.png';
import './footer.css';

const Footer = () => (
  <div className="MetaSonicAI__footer section__padding">
    <div className="MetaSonicAI__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="MetaSonicAI__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="MetaSonicAI__footer-links">
      <div className="MetaSonicAI__footer-links_logo">
        <img src={MetaSonicAILogo} alt="MetaSonicAI_logo"
        style={{ width: '140px', height: 'auto' }}
         />
        <p>Shaun Mendes, <br /> All Rights Reserved</p>
      </div>
      <div className="MetaSonicAI__footer-links_div">
        <h4>Links</h4>
        <p>Overall</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="MetaSonicAI__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="MetaSonicAI__footer-links_div">
        <h4>Get in touch</h4>
        <p>Shaun Mendes</p>
        <p>9920778067</p>
        <p>shaunkmmendes@gmail.com</p>
      </div>
    </div>

    <div className="MetaSonicAI__footer-copyright">
      <p>@2024 MetaSonicAI. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;