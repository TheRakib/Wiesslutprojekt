import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// npm i -g firebase-tools paketet 
// npm i firebase
//....
//.env 
//config  exportera objectet
// object.apikey

//npm i dotenv 
require('dotenv').config()

const firebaseConfig = {
  //process.env.REACT_APP_API_KEY
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: "https://klassprojekt-f7e1d.firebaseio.com",
  projectId: "klassprojekt-f7e1d",
  storageBucket: "klassprojekt-f7e1d.appspot.com",
  messagingSenderId: "945324006630",
  appId: "1:945324006630:web:352f972a7d7003cd16ef27",
  measurementId: "G-WFQ7YN5RL6"
};

//initialize 
firebase.initializeApp(firebaseConfig);



//export const googleProvider = new firebase.auth.GoogleAuthProvider();
// en till 

//export const auth = firebase.auth();
export  default firebase;