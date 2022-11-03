// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5RmOJCeTIzBIe4PZWpC0O-61V-WkcZXc",
  authDomain: "hkayradreact.firebaseapp.com",
  projectId: "hkayradreact",
  storageBucket: "hkayradreact.appspot.com",
  messagingSenderId: "216868549065",
  appId: "1:216868549065:web:769f1536eb7b625e2a7818",
  measurementId: "G-XS5LN7WK0T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export default db;
