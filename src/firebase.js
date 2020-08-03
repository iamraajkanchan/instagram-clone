import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBuPFXEWVBUfKK44fNs5WXQ0uYhq-1tABA",
  authDomain: "instagram-clone-react-300ef.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-300ef.firebaseio.com",
  projectId: "instagram-clone-react-300ef",
  storageBucket: "instagram-clone-react-300ef.appspot.com",
  messagingSenderId: "59380853404",
  appId: "1:59380853404:web:6e3eccbe9d7c207cdcdb59",
  measurementId: "G-Z2GZF8HTJW",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
