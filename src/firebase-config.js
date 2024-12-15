// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkCyQs2G4A9l0X_k157888_Kk5EnL7h1o",
    authDomain: "clasefirebase-457c5.firebaseapp.com",
    projectId: "clasefirebase-457c5",
    storageBucket: "clasefirebase-457c5.firebasestorage.app",
    messagingSenderId: "859833768434",
    appId: "1:859833768434:web:a5af062695d17c44dcf36b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
