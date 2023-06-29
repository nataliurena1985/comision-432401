// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1EqXHEJXKFgGP28iqbxrZxT0lrkdSFDQ",
  authDomain: "comision-432401.firebaseapp.com",
  projectId: "comision-432401",
  storageBucket: "comision-432401.appspot.com",
  messagingSenderId: "333128121363",
  appId: "1:333128121363:web:29fa407e78b31d873493e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
