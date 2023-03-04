import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const logOutBtn = () => {
  signOut(auth).catch((err) => console.log(err.message));
};
