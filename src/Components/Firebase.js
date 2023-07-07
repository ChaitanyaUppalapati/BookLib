// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiNHi87AqC-lypklDu5MPj-tnwZTqv8YA",
  authDomain: "booklib-d1c96.firebaseapp.com",
  projectId: "booklib-d1c96",
  storageBucket: "booklib-d1c96.appspot.com",
  messagingSenderId: "148174054711",
  appId: "1:148174054711:web:28f05e1976d7a0abf3a6b2",
  measurementId: "G-N4VGYV7QKC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app);
export const googleProvider= new GoogleAuthProvider();