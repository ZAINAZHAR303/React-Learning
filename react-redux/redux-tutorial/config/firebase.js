// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOPjNsgebcsG3LdQXP2k-f_o8c9AymcpE",
  authDomain: "crud-firebase-9973a.firebaseapp.com",
  projectId: "crud-firebase-9973a",
  storageBucket: "crud-firebase-9973a.firebasestorage.app",
  messagingSenderId: "586062094261",
  appId: "1:586062094261:web:58c589fb2503609d3d03fc",
  measurementId: "G-WSL2TP6M1Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);