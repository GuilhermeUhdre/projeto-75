import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBgiv_4v7ao7Syf54MwXRMPeHKyxaqH2Fc",
  authDomain: "projeto-71-64f54.firebaseapp.com",
  projectId: "projeto-71-64f54",
  storageBucket: "projeto-71-64f54.appspot.com",
  messagingSenderId: "367215508968",
  appId: "1:367215508968:web:12b1377372e5dc7565785d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
