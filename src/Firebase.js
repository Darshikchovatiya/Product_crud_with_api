// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPwg-LtG43Xu7XFzEzNOQRq4Hi7ZStJbs",
  authDomain: "react-students-crud.firebaseapp.com",
  projectId: "react-students-crud",
  storageBucket: "react-students-crud.appspot.com",
  messagingSenderId: "263136463107",
  appId: "1:263136463107:web:e0bc891e596152440a8136"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);

export default auth;