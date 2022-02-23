// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA0NpVvsDu2XJLEfdysFSeewz8foPbUCoY',
  authDomain: 'swapping-app.firebaseapp.com',
  projectId: 'swapping-app',
  storageBucket: 'swapping-app.appspot.com',
  messagingSenderId: '1088664671439',
  appId: '1:1088664671439:web:df6b296c49747fc7d213ba',
  measurementId: 'G-Q4LFXVRMV1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getFirestore(app);
