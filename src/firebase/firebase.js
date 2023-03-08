// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore();

export const collectionRef = collection(dataBase, "products");
export const usersCollectionRef = collection(dataBase, "users");

export const auth = getAuth(app);

export const storage = getStorage(app);

export default app;
