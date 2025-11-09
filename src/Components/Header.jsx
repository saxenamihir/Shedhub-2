import React from 'react'
import './Header.css';
import logo3 from '../assets/logo3.png'; // for LOGIN button
import logo4 from '../assets/logo4.png'; // for SELL button

function Header() {
  return (
    <header className="navbar">
        {/* Left Logo section */}
        <div className='navbar-logo'>
            <span className='logo-text'>
                SHED
                <span className='logo-highlight'>HUB</span>
            </span>
        </div>

         
        {/* Middle Section - Navigation Links */}
        <nav className='navbar-links'>
            <a href="#">SHED NEWS</a>
            <a href="#">FEATURE SELLERS</a>
            <a href="#">LOUNGE</a>
            <a href="#">LOUNGE</a>
            <a href="#">SELLER LOGIN</a>
        </nav>


        {/* Right section - Buttons */}
        <div className='navbar-buttons'>
            <button className="btn btn-outline">
                <img src={logo3} alt="Login Icon" className='btn-icon' /> LOGIN
            </button>
            <button className="btn btn-outline">
                <img src={logo4} alt="Sell Icon" className='btn-icon' /> SELL
            </button>
        </div>

    </header>
  )
}

export default Header