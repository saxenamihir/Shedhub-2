import React from 'react'
import './Button.css' 
function Button() {
  return (
    <div className='button'>
    <button className="load-more-button-simple">
      LOAD MORE
      <span className="arrow-icon">&#x2304;</span> {/* Unicode for 'Down Chevron' */}
    </button>
    </div>
  )
}

export default Button