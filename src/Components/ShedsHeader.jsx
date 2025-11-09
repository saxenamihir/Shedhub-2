import React, { useState } from 'react';
import './ShedsHeader.css';

export default function ShedsHeader() {
  const [view, setView] = useState('list');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <div className="sheds-header">
      <div className="container">
        {/* Header Section */}
        <div className="header-top">
          {/* Title */}
          <h1 className="title">Sheds for Sale in Kentucky</h1>

          {/* View Toggle */}
          <div className="view-controls">
            <span className="view-label">View:</span>
            <div className="view-buttons">
              <button
                onClick={() => setView('list')}
                className={`view-btn ${view === 'list' ? 'active' : ''}`}
                aria-label="List view"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              <button
                onClick={() => setView('grid')}
                className={`view-btn ${view === 'grid' ? 'active' : ''}`}
                aria-label="Grid view"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results and Sort Section */}
        <div className="header-bottom">
          {/* Results Count */}
          <p className="results-count">
            <span className="count">8,526</span> Sheds Found
          </p>

          {/* Sort Dropdown */}
          <div className="sort-controls">
            <label htmlFor="sort" className="sort-label">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="newest">Newest Listing</option>
              <option value="oldest">Oldest Listing</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="distance">Distance</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}