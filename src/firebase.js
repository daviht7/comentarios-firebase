import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDWfaWnOhOIimD6ic76BfugrQ1ztvdvI5Q",
  authDomain: "comments-devreactjs-20ccc.firebaseapp.com",
  databaseURL: "https://comments-devreactjs-20ccc.firebaseio.com",
  projectId: "comments-devreactjs-20ccc",
  storageBucket: "comments-devreactjs-20ccc.appspot.com",
  messagingSenderId: "1080646750224",
  appId: "1:1080646750224:web:c5939a36c62e93ebe3ba95",
  measurementId: "G-4VFY1SV9Y5"
}; 

firebase.initializeApp(firebaseConfig)

export const database = firebase.database()