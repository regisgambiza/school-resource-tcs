import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import routing components
import { AuthProvider } from './context/AuthContext';  // Import AuthProvider
import LoginForm from './components/LoginForm';  // Import LoginForm
import Dashboard from './components/Dashboard';  // A new Dashboard component (optional)
import './styles/styles.css';  // Import your styles.css file


function App() {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    {/* Set up the routes */}
                    <Routes>
                        <Route path="/" element={<LoginForm />} /> {/* Login route */}
                        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;
