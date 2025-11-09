import React, { useState } from 'react';
import './LeftSidebar.css';
import searchglass from '../assets/Search.png';
import filtericon from '../assets/Searchfilter.png';
import bellicon from '../assets/Bell.png';



function LeftSidebar() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000);
  const [email, setEmail] = useState('');
  
  const categories = [
    { label: 'Featured', count: 268, highlight: false },
    { label: 'New Listing', count: 175, highlight: true },
    { label: 'Barn', count: 48, highlight: true },
    { label: 'Cottage', count: 85, highlight: false },
    { label: 'Gazebo', count: 66, highlight: false },
    { label: 'Playhouse', count: 22, highlight: false },
    { label: 'Livestock Shelter', count: 75, highlight: false },
    { label: 'Repo', count: null, highlight: false }
  ];

  const colors = [
    { label: 'Black', count: 268, highlight: false },
    { label: 'Brown', count: 175, highlight: true },
    { label: 'Bugundi', count: 48, highlight: true },
    { label: 'Blue', count: 85, highlight: false },
    { label: 'Green', count: 66, highlight: false },
    { label: 'Orange', count: 22, highlight: false },
    { label: 'Purple', count: 75, highlight: false },
    { label: 'Red', count: 34, highlight: false }
  ];

   const statuses = [
    { label: 'Available At Lot', count: 85, highlight: true },
    { label: 'Online Only', count: 35, highlight: false },
    { label: 'Sold', count: 185, highlight: false }
  ];
  
  
  
  const handleApplyPrice = () => {
    console.log('Price range applied:', minPrice, maxPrice);
    // Add filter logic here
  };

  const handleNotifySubmit = () => {
    console.log('Email submitted:', email);
    // Add your email notification logic here
  };



  return (
    <div>
      {/* Search Bar */}
      <div className="search-input-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="SEARCH ZIP OR LOCATION"
        />
        <span className="search-icon"><img src={searchglass}/></span>
      </div>

      {/* Search Filter Header */}
      <div className="filter-header">
        <span className="filter-icon"><img  src={filtericon}/></span>
        <span className="filter-title">SEARCH FILTER</span>
      </div>

      {/* By Category Section */}
      <div className="filter-section">
        <h3 className="category-title">By Category</h3>
        <div className="filter-options">
          {categories.map((item, index) => (
            <label key={index} className="filter-item">
              <div className="filter-item-left">
                <input type="checkbox" className="filter-checkbox" />
                <span className="filter-label">{item.label}</span>
              </div>
              {item.count && (
                <span className={`filter-count ${item.highlight ? 'highlight' : 'default'}`}>
                  {item.count}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>
       
      {/* By Color Section */}
      <div className="filter-section">
        <h3 className="category-title">By Color</h3>
        <div className="filter-options">
          {colors.map((item, index) => (
            <label key={index} className="filter-item">
              <div className="filter-item-left">
                <input type="checkbox" className="filter-checkbox" />
                <span className="filter-label">{item.label}</span>
              </div>
              {item.count && (
                <span className={`filter-count ${item.highlight ? 'highlight' : 'default'}`}>
                  {item.count}
                </span>
              )}
            </label>
          ))}
        </div>
      </div>



      {/* Status Section */}
      <div className="filter-section">
        <h3 className="category-title">Status</h3>
        <div className="filter-options">
          {statuses.map((item, index) => (
            <label key={index} className="filter-item">
              <div className="filter-item-left">
                <input type="checkbox" className="filter-checkbox" />
                <span className="filter-label">{item.label}</span>
              </div>
              <span className={`filter-count ${item.highlight ? 'highlight' : 'default'}`}>
                {item.count}
              </span>
            </label>
          ))}
        </div>
      </div>


      {/* Price Range Section */}
      <div className="filter-section">
        <h3 className="category-title">Price Range</h3>
        
        {/* Range Slider */}
        <div className="price-range-slider">
          <input
            type="range"
            min="0"
            max="5000000"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="range-input range-min"
          />
          <input
            type="range"
            min="0"
            max="5000000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="range-input range-max"
          />
          <div className="range-track"></div>
        </div>

        {/* Price Input Fields */}
        <div className="price-inputs">
          <div className="price-input-wrapper">
            <label className="price-label">Min.</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="price-input-field"
            />
          </div>
          <div className="price-input-wrapper">
            <label className="price-label">Max.</label>
            <input
              type="text"
              value={maxPrice >= 5000000 ? '5000000+' : maxPrice}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, '');
                setMaxPrice(Number(val));
              }}
              className="price-input-field"
            />
          </div>
        </div>

        {/* Apply Button */}
        <button className="apply-button" onClick={handleApplyPrice}>
          APPLY
        </button>
      </div>
  
      {/* Notify Me Component */}
    <div className="filter-section-notify">
      {/* NEW INNER WRAPPER FOR CARD STYLING */}
      <div className="notify-inner-card">
        <div className="notify-header">
          <span className="bell-icon"><img src={bellicon}/></span>
          <h2 className="notify-title">NOTIFY ME</h2>
        </div>
        
        <p className="notify-description">
          Get email alerts for new ads that match your search preferences
        </p>
        
        <div className="notify-form">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
          />
          
          <button 
            onClick={handleNotifySubmit}
            className="submit-button"
          >
            SUBMIT
          </button>
        </div>
      
     </div>
     </div>
    </div>
  );
}

export default LeftSidebar;