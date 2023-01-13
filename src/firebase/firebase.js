// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore();
export const collectionRef = collection(dataBase, "products");
export const getProducts = () => {
  getDocs(collectionRef).then((snapshot) =>
    console.log(snapshot.docs.map((x) => x.data()))
  );
};
export const auth = getAuth(app);
