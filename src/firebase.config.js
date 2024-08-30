// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3TyskA6TVdDXZuPFeSxwdiCfT06RORzQ",
  authDomain: "zxcvbnm-bd9b2.firebaseapp.com",
  projectId: "zxcvbnm-bd9b2",
  storageBucket: "zxcvbnm-bd9b2.appspot.com",
  messagingSenderId: "1043120039394",
  appId: "1:1043120039394:web:71d3b7a8182012192745bb",
  measurementId: "G-74C05820H9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
