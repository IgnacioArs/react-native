import "firebase/firestore"
import firebase from 'firebase'
// Import the functions you need from the SDKs you need
/* import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK6bIIYHap-AnlB9w5otbuCzGF4rN8rbc",
  authDomain: "proyecto-polarizado.firebaseapp.com",
  projectId: "proyecto-polarizado",
  storageBucket: "proyecto-polarizado.appspot.com",
  messagingSenderId: "302110702199",
  appId: "1:302110702199:web:dde88e78820f83a0b8e472",
  measurementId: "G-ESZNW32EFT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default{
    db,
    firebase
}