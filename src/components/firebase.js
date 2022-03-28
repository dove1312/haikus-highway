// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

     apiKey: "AIzaSyDtmzT1ISqn7HuQ8f6kedfxJXOJ9W23h1Q",
     authDomain: "haikus-highway.firebaseapp.com",
     projectId: "haikus-highway",
     storageBucket: "haikus-highway.appspot.com",
     messagingSenderId: "785684357260",
     appId: "1:785684357260:web:702a5bcc827e34953b5ba9"

};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;