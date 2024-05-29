// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyABr2WM-gHUFrwm7hzi9slsMFPMUgYwVGA",
  authDomain: "blogs-e4e7e.firebaseapp.com",
  projectId: "blogs-e4e7e",
  storageBucket: "blogs-e4e7e.appspot.com",
  messagingSenderId: "692443601422",
  appId: "1:692443601422:web:6e2c305280d65b4c7f7a5f",
  measurementId: "G-WCXVZT9S11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export {fireDb,auth,storage};