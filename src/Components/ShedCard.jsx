import React from 'react';
import './ShedCard.css'; 
import urbanshedimage from '../assets/Urbanshed.png';
import house1image from '../assets/House1.png';
import featuredimage from '../assets/featuredpic.png';
import heartimage from '../assets/heart.png';

// Import your grey icon images
import buildingTypeIcon from '../assets/Vector.png';
import conditionIcon from '../assets/Plot.png';
import colorIcon from '../assets/Fillcolor.png';
import buildingSizeIcon from '../assets/Vector1.png';


const defaultShedData = {
    title: "8 X 10 Backyard Shed",
    description: "With Grandview LP Siding Siding",
    price: 13328.00,
    buildingType: "Studio",
    buildingSize: "14 X 32",
    color: "Dark Grey",
    condition: "Pre-Loved",
    sellerName: "Urban Shed Concepts LLC, Arizona",
    sellerLocation: "6024551571, Phoenix, AZ",
    imageSrc: house1image, 
    isFeatured: true,
    isAvailable: true,
};

const ShedCard = ({ shedData = defaultShedData }) => {
    const { 
        title, 
        description, 
        price, 
        buildingType, 
        buildingSize, 
        color, 
        condition, 
        sellerName, 
        sellerLocation, 
        imageSrc, 
        isFeatured, 
        isAvailable 
    } = shedData;

    return (
        <div className="shed-card-container">
            <div className="shed-card-image-section">
                <img src={house1image} alt={title} className="shed-image" />
                
                <div className="card-overlay-tags">
                    <button className="favorite-button">
                        <img src={heartimage} alt="heart" />
                    </button>
                    {isFeatured && (
                        <span className="feature-tag">
                            <img src={featuredimage} alt="featured"/>
                        </span>
                    )}
                    {isAvailable && (
                        <div className="status-available">
                            <span className="status-dot"></span>
                            Status Available
                        </div>
                    )}
                </div>
            </div>

            <div className="shed-card-details-section">
                <div className="details-header">
                    <h3 className="shed-title">{title}</h3>
                    <div className="shed-price">
                        ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                        <span className="price-tax">+ Taxes</span>
                    </div>
                </div>

                <p className="shed-description">{description}</p>
                
                {/* Updated horizontal specs layout with dividers */}
                <div className="shed-specs">
                    
                    {/* Building Type */}
                    <div className="spec-item">
                        <img src={buildingTypeIcon} alt="" className="spec-icon-img" />
                        <div className="spec-info">
                            <span className="spec-label">Building Type</span>
                            <span className="spec-value">{buildingType || 'N/A'}</span>
                        </div>
                    </div>

                    <div className="spec-divider"></div>

                    {/* Building Size */}
                    <div className="spec-item">
                        <img src={conditionIcon} alt="" className="spec-icon-img" />
                        <div className="spec-info">
                            <span className="spec-label">Building Size</span>
                            <span className="spec-value">{buildingSize || 'N/A'}</span>
                        </div>
                    </div>

                    <div className="spec-divider"></div>

                    {/* Color */}
                    <div className="spec-item">
                        <img src={colorIcon} alt="" className="spec-icon-img" />
                        <div className="spec-info">
                            <span className="spec-label">Color</span>
                            <span className="spec-value">{color || 'N/A'}</span>
                        </div>
                    </div>

                    <div className="spec-divider"></div>

                    {/* Condition */}
                    <div className="spec-item">
                        <img src={buildingSizeIcon} alt="" className="spec-icon-img" />
                        <div className="spec-info">
                            <span className="spec-label">Condition</span>
                            <span className="spec-value">{condition || 'N/A'}</span>
                        </div>
                    </div>

                </div>

                <div className="seller-contact">
                    <div className="seller-info">
                        <div className="seller-logo-placeholder">
                            <img src={urbanshedimage} alt="" className="seller-logo"/>
                        </div>
                        <div className="seller-text">
                            <div className="seller-name">{sellerName}</div>
                            <div className="seller-location">{sellerLocation}</div>
                        </div>
                    </div>
                    <button className="contact-button">
                        Contact Seller
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShedCard;