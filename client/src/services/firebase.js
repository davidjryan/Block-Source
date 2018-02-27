import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAZPZ97h6Wy2zrFVEGSwBygvFP4JtR4--s",
  authDomain: "blocksource-3436a.firebaseapp.com",
  databaseURL: "https://blocksource-3436a.firebaseio.com",
  projectId: "blocksource-3436a",
  storageBucket: "blocksource-3436a.appspot.com",
  messagingSenderId: "208434052605"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.database();

export const isAuthenticated = () => {
  return !!auth.currentUser
}

export const provider = new firebase.auth.GoogleAuthProvider();

export const googleSignIn = () => {
  return firebase.auth().signInWithPopup(provider)
}

export default firebase;
