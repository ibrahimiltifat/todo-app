// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import firebase from "firebase"
// TODO: Replace the following with your app's Firebase project configuration
const firebaseApp = firebase.initializeApp({
  //...
  apiKey: "AIzaSyB3JtxmtuOHjVkWNl915istyw3NVZD7JfY",
  authDomain: "todo-app-12ae7.firebaseapp.com",
  projectId: "todo-app-12ae7",
  storageBucket: "todo-app-12ae7.appspot.com",
  messagingSenderId: "770456237780",
  appId: "1:770456237780:web:63a2fb81f8eb6bf3e46d41",
  measurementId: "G-XPFS71XD6P",
});

// const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
