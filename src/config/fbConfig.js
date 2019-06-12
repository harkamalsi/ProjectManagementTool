import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCUFY-LYu5e1OMy8bEGndtqgRlmJORW0pA",
  authDomain: "projectplan-9fb70.firebaseapp.com",
  databaseURL: "https://projectplan-9fb70.firebaseio.com",
  projectId: "projectplan-9fb70",
  storageBucket: "projectplan-9fb70.appspot.com",
  messagingSenderId: "1007745721699",
  appId: "1:1007745721699:web:1db87fe04181acb3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
