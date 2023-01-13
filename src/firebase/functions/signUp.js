import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
export const signUpFunction = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredintial) => {
      console.log(`User Credintial : `, userCredintial.user);
    })
    .catch((err) => console.log(err.message));
};
