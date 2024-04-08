import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArCTYtf8wL95Xa3ME-SXnYOkzzBCQXtsc",
  authDomain: "pl09aigpt.firebaseapp.com",
  projectId: "pl09aigpt",
  storageBucket: "pl09aigpt.appspot.com",
  messagingSenderId: "327031649801",
  appId: "1:327031649801:web:49b0616aa92e67ef372ad8"
};

// Initialize Firebase

const app= getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{ db };