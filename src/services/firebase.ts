// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyC2-nWKSfJZSs3dOMk2azBLyjgO2AMOLpA",
  authDomain: "activity7-902f8.firebaseapp.com",
  projectId: "activity7-902f8",
  storageBucket: "activity7-902f8.appspot.com",
  messagingSenderId: "871509278351",
  appId: "1:871509278351:web:f8db3164acdbf5f6dd3afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
