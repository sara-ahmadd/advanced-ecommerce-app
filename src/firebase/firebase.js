// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmtehaNLd5TSATD27A6r87zGWdVq611Zg",
  authDomain: "advanced-ecommerce-app-d2bc0.firebaseapp.com",
  projectId: "advanced-ecommerce-app-d2bc0",
  storageBucket: "advanced-ecommerce-app-d2bc0.appspot.com",
  messagingSenderId: "223525391965",
  appId: "1:223525391965:web:90ccc3b896995002c5c7b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore();

export const collectionRef = collection(dataBase, "products");


export const auth = getAuth(app);

export const storage = getStorage(app);

export default app;
