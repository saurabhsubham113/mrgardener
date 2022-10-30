import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKZ32v7f-21CMmtwieRXZSOyL4DpoaFsc",
  authDomain: "mrgardener-d686b.firebaseapp.com",
  projectId: "mrgardener-d686b",
  storageBucket: "mrgardener-d686b.appspot.com",
  messagingSenderId: "615880953334",
  appId: "1:615880953334:web:bbb2f72c0a05987384cbd7",
  measurementId: "G-DGNJKTR5FF",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
