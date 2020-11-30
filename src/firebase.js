import firebase from "firebase/app";
import "firebase/firestore";

// this firebase.js file initializes firebase
const firebaseConfig = {
  apiKey: "AIzaSyD6siROQRdngzsnlliY1DCrx1pNUSRQpTo",
  authDomain: "spacebook-eed6d.firebaseapp.com",
  databaseURL: "https://spacebook-eed6d.firebaseio.com",
  projectId: "spacebook-eed6d",
  storageBucket: "spacebook-eed6d.appspot.com",
  messagingSenderId: "587669493575",
  appId: "1:587669493575:web:002f82707332e092895e62",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
