import React, { createContext, useState, useEffect, useContext } from 'react';
import { auth, provider } from '../firebase/init'; // Import Firebase methods
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);  // Set user state when authentication state changes
        });

        return () => unsubscribe();  // Cleanup listener on unmount
    }, []);

    // Function to handle Google login
    const loginWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);  // Set user state after successful login
            console.log("User logged in: ", result.user);
        } catch (error) {
            console.error("Error logging in with Google: ", error);
        }
    };

    // Function to handle logout
    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);  // Set user state to null after logout
            console.log("User logged out");
        } catch (error) {
            console.error("Error logging out: ", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
