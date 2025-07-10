// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDd_VH23lbKNoH8nbPZEunERvJ6ojLZT2k",
  authDomain: "chatgpt-oproject.firebaseapp.com",
  projectId: "chatgpt-oproject",
  storageBucket: "chatgpt-oproject.firebasestorage.app",
  messagingSenderId: "418728291373",
  appId: "1:418728291373:web:d9d4b373d5cda9c834dca4",
  measurementId: "G-1DQLFHLZNF"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
