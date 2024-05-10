// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0G5C0zskroAmf7-HPClb2rvizGYvrFcU",
  authDomain: "doctorsdec.firebaseapp.com",
  projectId: "doctorsdec",
  storageBucket: "doctorsdec.appspot.com",
  messagingSenderId: "796398972388",
  appId: "1:796398972388:web:af131cd9a19c8490dd2bf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth()