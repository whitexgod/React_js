// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj4SjFwsRt6-rvLgNkEfIWm-YhqrCUpBw",
  authDomain: "chatter-box-d46ad.firebaseapp.com",
  projectId: "chatter-box-d46ad",
  storageBucket: "chatter-box-d46ad.appspot.com",
  messagingSenderId: "1044107450757",
  appId: "1:1044107450757:web:305b9b090f1f9ec6fb8cec",
  measurementId: "G-3ER9CY6MQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const providerGoogle = new GoogleAuthProvider();
const providerGithub = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export {db, auth, providerGoogle, providerGithub, providerFacebook};