import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>My App</h2>
            </div>
            <div className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/services" className="nav-link">Services</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
