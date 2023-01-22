import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const logOutBtn = () => {
  signOut(auth)
    .then(() => {
      console.log("User Is Logged Out");
    })
    .catch((err) => console.log(err));
};
