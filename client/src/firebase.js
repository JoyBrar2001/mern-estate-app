// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "joy-estate.firebaseapp.com",
  projectId: "joy-estate",
  storageBucket: "joy-estate.appspot.com",
  messagingSenderId: "722485144504",
  appId: "1:722485144504:web:cb9da08058e7f4d3bbbd4d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);