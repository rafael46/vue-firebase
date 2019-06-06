import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBo79OLFTv1Te_vrX4ETkWdvQ57mKdloDI",
  authDomain: "udemy-ninja-smoothies-cade4.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-cade4.firebaseio.com",
  projectId: "udemy-ninja-smoothies-cade4",
  storageBucket: "udemy-ninja-smoothies-cade4.appspot.com",
  messagingSenderId: "362074144645",
  appId: "1:362074144645:web:d5e31217e46ce6bf"
};
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
