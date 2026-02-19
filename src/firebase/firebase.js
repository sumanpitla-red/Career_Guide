import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe6WUTnDXAcNda7eITJ9KwgaEr6VSwNAQ",
  authDomain: "career-roadmap-739e8.firebaseapp.com",
  projectId: "career-roadmap-739e8",
  storageBucket: "career-roadmap-739e8.firebasestorage.app",
  messagingSenderId: "704339876653",
  appId: "1:704339876653:web:c2cf22fb1292c5949911a4",
  measurementId: "G-LCYKB0VTN2"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);