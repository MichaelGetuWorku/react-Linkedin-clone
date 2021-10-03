import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9qG87E-ZHRtWh2QpZGweQMPAjMBiCgFk",
  authDomain: "linkedin-yt-f9bad.firebaseapp.com",
  projectId: "linkedin-yt-f9bad",
  storageBucket: "linkedin-yt-f9bad.appspot.com",
  messagingSenderId: "600714157212",
  appId: "1:600714157212:web:e792bf3c9831186e6ba159",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
