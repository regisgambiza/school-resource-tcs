import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, and Route
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import LoginForm from './components/LoginForm';  // Import components
import About from './pages/About';  // Import About page
import Contact from './pages/Contact';  // Import Contact page
import Navbar from './components/Navbar'; // Import Navbar
import './styles/styles.css';  // Import your CSS file

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />  {/* Navbar goes here */}
                <div className="App">
                    <Routes>
                        <Route path="/" element={<LoginForm />} />  {/* Home page or login page */}
                        <Route path="/about" element={<About />} />  {/* About page */}
                        <Route path="/contact" element={<Contact />} />  {/* Contact page */}
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
