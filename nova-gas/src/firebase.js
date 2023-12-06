// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFCGCK7WOnKcc_QMSRBaChkc17ah_skic",
  authDomain: "novagas.firebaseapp.com",
  projectId: "novagas",
  storageBucket: "novagas.appspot.com",
  messagingSenderId: "1075062940905",
  appId: "1:1075062940905:web:8a3a03890c7dead58ebc78",
  measurementId: "G-20G0FMNWG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getFirestore(app);

//firebase.initializeApp(firebaseConfig);

export default firebase;