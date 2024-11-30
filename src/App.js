import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthContext
import LoginForm from './components/LoginForm'; // Import LoginForm component
import About from './pages/About'; // Import About page
import Contact from './pages/Contact'; // Import Contact page
import Navbar from './components/Navbar'; // Import Navbar
import Dashboard from './components/Dashboard'; // Import Dashboard page
import './styles/styles.css'; // Import your CSS file

function App() {
    const { user } = useAuth(); // Get user state from AuthContext
    const navigate = useNavigate(); // Initialize useNavigate hook

    useEffect(() => {
        if (user) {
            navigate('/dashboard'); // Redirect to dashboard if user is authenticated
        }
    }, [user, navigate]);

    return (
        <div className="container">
            {user && <Navbar />} {/* Only show Navbar if user is authenticated */}
            <div className="App">
                <Routes>
                    <Route path="/" element={<LoginForm />} /> {/* Login page */}
                    <Route path="/about" element={<About />} /> {/* About page */}
                    <Route path="/contact" element={<Contact />} /> {/* Contact page */}
                    <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard page */}
                </Routes>
            </div>
        </div>
    );
}

function AppWrapper() {
    return (
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    );
}

export default AppWrapper;
