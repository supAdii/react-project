// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJZikUT5l_rOawlXVVVXgt4u2A4xUVVkU",
  authDomain: "project-de-react.firebaseapp.com",
  projectId: "project-de-react",
  storageBucket: "project-de-react.appspot.com",
  messagingSenderId: "306687084804",
  appId: "1:306687084804:web:29b473773d96d2d6466851",
  measurementId: "G-RLMRN73L2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);