import { auth,createUserWithEmailAndPassword } from "./firebase.js"

let signup = ()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    console.log(error.message)
    
  });


}
let sign_up = document.getElementById("sign-up")
sign_up.addEventListener("click",signup)