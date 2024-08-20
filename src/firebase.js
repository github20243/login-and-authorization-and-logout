// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBMS0bo0qCimGdOLDcg0_ylRixnhItB2lQ",
  authDomain: "login-page-4f77f.firebaseapp.com",
  projectId: "login-page-4f77f",
  storageBucket: "login-page-4f77f.appspot.com",
  messagingSenderId: "553609234088",
  appId: "1:553609234088:web:6e7841e439ac481dc3249d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
