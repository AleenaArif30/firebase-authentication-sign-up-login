import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification ,signOut,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBXlIDhOnjlDwpe24lX4F-HohBqWKUGDjE",
    authDomain: "authentication-c204f.firebaseapp.com",
    projectId: "authentication-c204f",
    storageBucket: "authentication-c204f.firebasestorage.app",
    messagingSenderId: "121392164675",
    appId: "1:121392164675:web:7747c157235c93d84ac9f6",
    measurementId: "G-8W0K5RMXH3"
  };

  
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  

  export{auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification,signOut,signInWithPopup, GoogleAuthProvider,provider } 


  