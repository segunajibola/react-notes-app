import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyApkgvh1wRZnwxRNQj6Di_ymSM50J-MjdQ",
  authDomain: "notes-app-d97ca.firebaseapp.com",
  projectId: "notes-app-d97ca",
  storageBucket: "notes-app-d97ca.appspot.com",
  messagingSenderId: "866256724391",
  appId: "1:866256724391:web:fee8e8c8bb278a99905682"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")