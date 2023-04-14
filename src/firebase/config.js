// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzsUMzBCtKCwdFYSVW6MRp_uRS1SSNIc0",
  authDomain: "ecommerce-fa345.firebaseapp.com",
  projectId: "ecommerce-fa345",
  storageBucket: "ecommerce-fa345.appspot.com",
  messagingSenderId: "909490209049",
  appId: "1:909490209049:web:012f7d28bd649ccd4a8588",
  measurementId: "G-QXKLQG3MTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);