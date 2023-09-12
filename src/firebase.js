// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXPv65FZ9AiFBlA7qIUokdn286JqAWmB8",
  authDomain: "todo-b02ab.firebaseapp.com",
  projectId: "todo-b02ab",
  storageBucket: "todo-b02ab.appspot.com",
  messagingSenderId: "889051043433",
  appId: "1:889051043433:web:2405b3b07542c6bfacf4f8",
  measurementId: "G-MNDGG0MMJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { analytics, db }
