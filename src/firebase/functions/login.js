// import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const logInFunction = (loginEmail, loginPassword) => {
  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredintial) => {
      console.log(`User Logged In : `, userCredintial.user);
      return userCredintial ? userCredintial.user : "Something went wrong";
    })
    .catch((err) => console.log(err.message));
};
