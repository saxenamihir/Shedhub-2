import React from 'react';
import './SearchLocation.css'; // Make sure to create this CSS file

function SearchLocation() {
  return (
    <div className="search-location-container">
      <input 
        type="text" 
        placeholder="SEARCH ZIP OR LOCATION" 
        className="search-location-input" 
      />
      <button className="search-location-button">
        {/* You can use an icon here, or a simple magnifying glass character */}
        🔍 
      </button>
    </div>
  );
}

export default SearchLocation;