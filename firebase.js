// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0NpVvsDu2XJLEfdysFSeewz8foPbUCoY",
  authDomain: "swapping-app.firebaseapp.com",
  projectId: "swapping-app",
  storageBucket: "swapping-app.appspot.com",
  messagingSenderId: "1088664671439",
  appId: "1:1088664671439:web:04b3160770ffb1eed213ba",
  measurementId: "G-KNB8Q4403K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);