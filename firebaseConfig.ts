// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9RKLRmlku49_ak4VwGYikvJcIXbdJVCk",
  authDomain: "intro-to-firebase-20af4.firebaseapp.com",
  projectId: "intro-to-firebase-20af4",
  storageBucket: "intro-to-firebase-20af4.appspot.com",
  messagingSenderId: "190567042615",
  appId: "1:190567042615:web:739512e1af495bf94f79b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
