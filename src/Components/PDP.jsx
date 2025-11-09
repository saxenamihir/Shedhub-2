import React from 'react'

import banner from '../assets/Banner.png'; // Banner image
import './PDP.css';

function PDP() {
  return (
    <div className="pdp-page">
      {/* Banner section */}
      <div className="banner-container">
        <img src={banner} alt="Banner" className="banner-img" />
      </div>

      {/* Breadcrumb section */}
      {/* <div className="breadcrumb-container">
        <div className="breadcrumb">
          <span>Home</span>
          <span className="separator">/</span>
          <span>Shed Squad Somerset</span>
          <span className="separator">/</span>
          <span>128729</span>
        </div>
      </div> */}
    </div>
  )
}

export default PDP