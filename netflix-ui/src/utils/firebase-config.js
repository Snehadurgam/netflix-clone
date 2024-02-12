
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx0dafu-XkfC-g9ie9smIYcGUAevMOcq4",
  authDomain: "react-netflix-clone-91d47.firebaseapp.com",
  projectId: "react-netflix-clone-91d47",
  storageBucket: "react-netflix-clone-91d47.appspot.com",
  messagingSenderId: "700152210361",
  appId: "1:700152210361:web:15b85f26c659cf456b0c68",
  measurementId: "G-5FC05GQSBC"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);