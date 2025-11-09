import React from 'react';
import './LocationResults.css';

const LocationResults = () => {
  // Generate array of 32 items (8 rows x 4 columns)
  const locations = Array(32).fill({
    city: 'BREMEN',
    state: 'OH',
    price: '$1,581'
  });

  return (
    <div className="location-results-container">
      <div className="location-results-header">
        <h3 className="subtitle">Popular Search</h3>
        <h2 className="title">Results By Location</h2>
      </div>
      
      <div className="location-grid">
        {locations.map((location, index) => (
          <div key={index} className="location-card">
            <div className="location-info">
              <h3 className="location-name">
                {location.city}, {location.state}
              </h3>
              <p className="location-price">
                Listings starting at <span className="price">{location.price}</span>
              </p>
            </div>
            <button className="arrow-button" aria-label="View listings">
              <svg 
                width="8" 
                height="14" 
                viewBox="0 0 8 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1 1L7 7L1 13" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationResults;