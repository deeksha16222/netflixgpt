// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBz5xzpb__xZ-OTMyW5LBl13T9c6mZ-03M",
  authDomain: "netflix-e1358.firebaseapp.com",
  projectId: "netflix-e1358",
  storageBucket: "netflix-e1358.appspot.com",
  messagingSenderId: "902467828397",
  appId: "1:902467828397:web:065d8a2ca4fdb9557e6424",
  measurementId: "G-F2FD78DGGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
