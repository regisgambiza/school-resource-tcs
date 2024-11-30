// src/components/LoginForm.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Assuming useAuth is the context hook for authentication

const LoginForm = () => {
    const { loginWithGoogle } = useAuth();  // Get the login function
    const navigate = useNavigate();  // To navigate after successful login

    const handleLogin = async () => {
        try {
            await loginWithGoogle();
            navigate('/dashboard');  // Redirect to dashboard after login
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Welcome to TCS School Portal</h2>
                <p>Please log in using your Google account to continue</p>
                <button onClick={handleLogin} className="google-btn">
                    <img
                        src="https://developers.google.com/identity/images/g-logo.png"
                        alt="Sign in with Google"
                        className="google-logo"
                    />

                    Login with Google
                </button>
            </div>
        </div>
    );
};

export default LoginForm;
