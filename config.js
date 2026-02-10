// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCw854vm0qeUkxQ6FUq2Z5btcUGfjUUvbQ",
    authDomain: "hiresphere-6fdf5.firebaseapp.com",
    projectId: "hiresphere-6fdf5",
    storageBucket: "hiresphere-6fdf5.firebasestorage.app",
    messagingSenderId: "123148586840",
    appId: "1:123148586840:web:9df51fbe2ad2c0082c1f2d",
    measurementId: "G-1X6J5DV2J7"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Services
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Log initialization for debugging (optional, can be removed in production)
console.log("🔥 Firebase Initialized Successfully");
console.log(`📡 Project ID: ${firebaseConfig.projectId}`);

// Export the initialized instances so other files can use them directly
export { app, analytics, auth, db, storage };
