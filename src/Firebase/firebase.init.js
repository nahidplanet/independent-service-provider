// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


// apiKey: "AIzaSyAXEMFU0Sx0WhNO4sIL1uRyGhQYnDfUTSU",
//   authDomain: "tourest-b1b53.firebaseapp.com",
//   projectId: "tourest-b1b53",
//   storageBucket: "tourest-b1b53.appspot.com",
//   messagingSenderId: "744491748096",
//   appId: "1:744491748096:web:d4909f9fa50fa072cd01e5"