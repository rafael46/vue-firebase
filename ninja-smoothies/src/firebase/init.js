import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyD7S87xiP6Ni3tmIupnCByziklwk1HxzWw",
//   authDomain: "ninja-smoothies.firebaseapp.com",
//   databaseURL: "https://ninja-smoothies.firebaseio.com",
//   projectId: "ninja-smoothies",
//   storageBucket: "",
//   messagingSenderId: "979366054783"
// };

var config = {
  apiKey: "AIzaSyBo79OLFTv1Te_vrX4ETkWdvQ57mKdloDI",
  authDomain: "udemy-ninja-smoothies-cade4.firebaseapp.com",
  databaseURL: "https://udemy-ninja-smoothies-cade4.firebaseio.com",
  projectId: "udemy-ninja-smoothies-cade4",
  storageBucket: "udemy-ninja-smoothies-cade4.appspot.com",
  messagingSenderId: "362074144645",
  appId: "1:362074144645:web:d5e31217e46ce6bf"
}
const firebaseApp = firebase.initializeApp(config);
// firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()

// https://console.firebase.google.com/project/udemy-ninja-smoothies-cade4/overview
//
// original config
// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#config-web-app -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBo79OLFTv1Te_vrX4ETkWdvQ57mKdloDI",
//     authDomain: "udemy-ninja-smoothies-cade4.firebaseapp.com",
//     databaseURL: "https://udemy-ninja-smoothies-cade4.firebaseio.com",
//     projectId: "udemy-ninja-smoothies-cade4",
//     storageBucket: "udemy-ninja-smoothies-cade4.appspot.com",
//     messagingSenderId: "362074144645",
//     appId: "1:362074144645:web:d5e31217e46ce6bf"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>