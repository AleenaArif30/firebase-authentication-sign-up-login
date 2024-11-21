import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC-fjy-yk6qM_sMX875toD_Cf129h13vrw",
    authDomain: "authentication-ffe45.firebaseapp.com",
    projectId: "authentication-ffe45",
    storageBucket: "authentication-ffe45.firebasestorage.app",
    messagingSenderId: "403149979094",
    appId: "1:403149979094:web:72fdf7196333ed24a33877",
     measurementId: "G-599HMSKZBG"
    
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  export { auth,createUserWithEmailAndPassword}