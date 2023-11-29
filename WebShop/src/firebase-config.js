// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3j28eT13VrBLnhhQR72Hdxnt7eXe99Bg",
  authDomain: "webbanhang-e2f2e.firebaseapp.com",
  projectId: "webbanhang-e2f2e",
  storageBucket: "webbanhang-e2f2e.appspot.com",
  messagingSenderId: "575082173800",
  appId: "1:575082173800:web:f78752a3b7a3e44c54f2dd",
  measurementId: "G-7F86ZP1LVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app)
export {db,auth,storage};