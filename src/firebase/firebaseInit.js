import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmG2D4GgWaSs5a9RbihXkmIx-viuLOajA",
  authDomain: "firevue-2efff.firebaseapp.com",
  projectId: "firevue-2efff",
  storageBucket: "firevue-2efff.appspot.com",
  messagingSenderId: "847760613967",
  appId: "1:847760613967:web:aacbb528b2cdf95adb403a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export {timeStamp};
export default firebaseApp.firestore();