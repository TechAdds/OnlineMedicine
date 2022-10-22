// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1vMqwc_XdR8ajPEf1PW6a3iue9LEoh7E",
  authDomain: "fir-auth-37b55.firebaseapp.com",
  projectId: "fir-auth-37b55",
  storageBucket: "fir-auth-37b55.appspot.com",
  messagingSenderId: "776518037492",
  appId: "1:776518037492:web:71ed04293cc7b32f10d3a1",
  measurementId: "G-ZB6ZVHBGNZ",
};

// Initialize Firebase

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
