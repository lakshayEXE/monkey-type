// firebase.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "852763113564",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);

export default firebase;