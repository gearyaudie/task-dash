import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVSYWMCPQkkMtbZHdNBRP1qL5Za67Otvw",
  authDomain: "task-dashboard-d2470.firebaseapp.com",
  projectId: "task-dashboard-d2470",
  storageBucket: "task-dashboard-d2470.appspot.com",
  messagingSenderId: "836307241494",
  appId: "1:836307241494:web:275426667c36c1355e0337",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
