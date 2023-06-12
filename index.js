import { registerRootComponent } from "expo";
import { initializeApp } from "firebase/app";

import App from "./src/App";
import { FIREBASE_API_KEY } from "@env";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "meal-tracker-fe596.firebaseapp.com",
  projectId: "meal-tracker-fe596",
  storageBucket: "meal-tracker-fe596.appspot.com",
  messagingSenderId: "541956660322",
  appId: "1:541956660322:web:d84f15e80b341899bf053b",
};

// Initialize Firebase
initializeApp(firebaseConfig);

registerRootComponent(App);
