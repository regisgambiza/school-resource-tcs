// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link for routing
import { useAuth } from '../context/AuthContext';  // Import useAuth to access logout

function Navbar() {
    const { logout } = useAuth(); // Access logout function from AuthContext

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>My App</h2>
            </div>
            <div className="nav-links">
                <Link to="/dashboard" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/services" className="nav-link">Services</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <button onClick={logout} className="nav-link">Logout</button> {/* Logout button */}
            </div>
        </nav>
    );
}

export default Navbar;
