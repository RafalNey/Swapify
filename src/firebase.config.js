import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyA0NpVvsDu2XJLEfdysFSeewz8foPbUCoY",
  authDomain: "swapping-app.firebaseapp.com",
  projectId: "swapping-app",
  storageBucket: "swapping-app.appspot.com",
  messagingSenderId: "1088664671439",
  appId: "1:1088664671439:web:df6b296c49747fc7d213ba",
  measurementId: "G-Q4LFXVRMV1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

////export const auth = getAuth(app)
// const analytics = getAnalytics(app);







