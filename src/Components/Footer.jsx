
import React from "react";
import "./Footer.css";
import appStoreImage from "../assets/Appstore.png";
import AllIconimage from "../assets/Allicon.png";
import accreditedImage from "../assets/Accredited.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Navigation Links */}
        <div className="footer-nav">
          <a href="#shin">Shin</a>
          <span className="divider">|</span>
          <a href="#seller">For Seller</a>
          <span className="divider">|</span>
          <a href="#manufacturers">For Manufacturers</a>
          <span className="divider">|</span>
          <a href="#terms">Terms of Service</a>
          <span className="divider">|</span>
          <a href="#legal">Legal</a>
          <span className="divider">|</span>
          <a href="#disclaimers">Disclaimers</a>
        </div>

        {/* Accredited Badge */}
        <div className="accredited-badge">
          <img src={accreditedImage} alt="Accredited Business" />
        </div>
      </div>

      {/* Grey line separator */}
      <div className="footer-separator"></div>

      {/* Description Text */}
      <div className="footer-description">
        <p>
          ShedHub is the #1 place to find sheds for sale in your local area. Browse thousands of sheds from sellers across the country. With our Advanced Shed Search tool, you can easily sort through our expansive inventory and find just the right shed in a matter of minutes. Make your shed buying experience a breeze with ShedHub!
        </p>
      </div>

      {/* App Store Buttons */}
      <div className="footer-store-buttons">
        <img src={appStoreImage} alt="Download on App Store" className="footer-store-btn" />
      </div>

      {/* <div className='footer-shedhub'>
        <span className='logo-text'>
          SHED
          <span className='logo-highlight'>HUB</span>
        </span>
      </div> */}

    <header className="navbar">
      <div className='navbar-logo'>
            <span className='logo-text'>
                SHED
                <span className='logo-highlight'>HUB</span>
            </span>
        </div>
    </header>
    
      {/* Social Media Icons */}
      <div className="footer-social">
        <img src={AllIconimage} alt="Social Media Icons" className="icon-images"/>
      </div>

      {/* All Rights Reserved */}
      <div className="end-text">
        <p>©2025 ShedHub. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;