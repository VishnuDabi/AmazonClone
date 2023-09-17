// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'

import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBYxw57UGRn6rt3xFptKCfrljbvDUOflv8",
  authDomain: "clone-811f1.firebaseapp.com",
  projectId: "clone-811f1",
  storageBucket: "clone-811f1.appspot.com",
  messagingSenderId: "143855664439",
  appId: "1:143855664439:web:93d64ca95d94fc5de9aeb2",
  measurementId: "G-TTK7MVWPSH"
};
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth();
export { db, auth }
