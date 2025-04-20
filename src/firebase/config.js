import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAWFtfZnGYyUI8deHf-IpWFudxCkR5tSoo",
  authDomain: "finance-9e86e.firebaseapp.com",
  projectId: "finance-9e86e",
  storageBucket: "finance-9e86e.firebasestorage.app",
  messagingSenderId: "582213807257",
  appId: "1:582213807257:web:6dc0cb4e9c8ccf38305c08",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
