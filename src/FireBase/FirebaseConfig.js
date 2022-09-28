import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCB4SwX4Gc9LgNVXsnsHVGh2rcoCFcCc20",
  authDomain: "foody-ba7e6.firebaseapp.com",
  projectId: "foody-ba7e6",
  storageBucket: "foody-ba7e6.appspot.com",
  messagingSenderId: "375828328545",
  appId: "1:375828328545:web:0fd40c15cfb6567022ba20",
  measurementId: "G-RFHBP0DJH0",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
