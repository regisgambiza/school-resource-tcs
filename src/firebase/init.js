import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";  // Import Google login methods

// Your Firebase config (unchanged)
const firebaseConfig = {
    apiKey: "AIzaSyCjuFl4zag3rTSFIx-XCcne4K9wbI6xYYE",
    authDomain: "school-resource-tcs.firebaseapp.com",
    projectId: "school-resource-tcs",
    storageBucket: "school-resource-tcs.firebasestorage.app",
    messagingSenderId: "818594794415",
    appId: "1:818594794415:web:7a4049b980141c614d7d5a",
    measurementId: "G-5LS06FTMRM"
};

// Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google Auth provider
const provider = new GoogleAuthProvider();

// Export auth and provider for use in other parts of the app
export { auth, provider, signInWithPopup };
