import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyDYmZxRdTaOFotOa0iDLjkLfPi4pX3scjk",
  authDomain: "e-commerce-6d9d9.firebaseapp.com",
  databaseURL: "https://e-commerce-6d9d9.firebaseio.com",
  projectId: "e-commerce-6d9d9",
  storageBucket: "e-commerce-6d9d9.appspot.com",
  messagingSenderId: "340742547409",
  appId: "1:340742547409:web:ce73b7477345f86a5c62f0",
  measurementId: "G-EYK94F2446"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt:'select_account'
});
export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
export default firebase;