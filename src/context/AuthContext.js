import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, provider, signInWithPopup } from '../firebase/init'; // Import Firebase methods
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    // Function to handle Google login
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);  // Sign in with Google
            const user = result.user;
            setUser(user);  // Update user state with the logged-in user
            console.log("User logged in: ", user);
        } catch (error) {
            console.error("Error logging in with Google: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
