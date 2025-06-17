// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxNuPM6ZxKs-Zkc0LE3YcWGdY3BftK1ws",
  authDomain: "email-password-auth-dcc0a.firebaseapp.com",
  projectId: "email-password-auth-dcc0a",
  storageBucket: "email-password-auth-dcc0a.firebasestorage.app",
  messagingSenderId: "468969356296",
  appId: "1:468969356296:web:2ddcd4f22e401a5c39a5bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;