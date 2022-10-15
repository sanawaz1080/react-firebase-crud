// We will write data everything connecting to db, connecting to firebase etc...

//  Initialise the app will create the connection
import { initializeApp } from "firebase/app";
import { getFireStore } from "@firebase/firestore";

const firebaseConfig = {
  authDomain: "react-firebase-crud-65e75.firebaseapp.com",
  projectId: "react-firebase-crud-65e75",
  storageBucket: "react-firebase-crud-65e75.appspot.com",
  messagingSenderId: "844607789505",
  appId: "1:844607789505:web:9234991ce8ca7d8312f740",
  measurementId: "G-T06D9CGJF7",
};
// Connection established
const app = initializeApp(firebaseConfig);

// Connecting db
export const db = getFireStore();
