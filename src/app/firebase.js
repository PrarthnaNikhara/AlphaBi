// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwGXLTeItADTRWeClmIwJSXLMjshdwr74",
    authDomain: "next-firebase-auth-b3b58.firebaseapp.com",
    projectId: "next-firebase-auth-b3b58",
    storageBucket: "next-firebase-auth-b3b58.appspot.com",
    messagingSenderId: "228663455513",
    appId: "1:228663455513:web:9b9e5866eeba64ac015f88",
    measurementId: "G-B6D0EKVQJB"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();

// const analytics = getAnalytics(app);
export { app, auth }