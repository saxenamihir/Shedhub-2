
import React from "react";
import "./ShedhubBanner.css";
import phoneImage from "../assets/Phonespic.png";
import arrowimage from "../assets/Arrowpic.png";
import qrimage from "../assets/Qrimage.png";
import playstoreimage from "../assets/Playstore.png";

const ShedhubBanner = () => {
  return (
    <div className="shedhub-banner">
      <div className="shedhub-content">
        <div className="shedhub-text">
          <h3>Find amazing sheds on the go.</h3>
          <p><strong>Download the Shedhub App</strong></p>
        </div>

        <div className="shedhub-images">
          <img
            src={phoneImage}
            alt="Shedhub App preview on phones"
            className="phones-img"
          />
          
          <div className="qr-section">
            <div className="qr-text-wrapper">
              <p>Scan the QR<br />to get the App</p>
              <img src={arrowimage} alt="arrow" className="arrow-img" />
            </div>
            <img src={qrimage} alt="QR code" className="qr-img" />
            <div className="store-buttons">
              <img
                src={playstoreimage}
                alt="Download on Google Play"
                className="store-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShedhubBanner;