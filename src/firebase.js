import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDp2ntWF0BN4ZL3JzLs-bsZcjBxNG_btG4",
    authDomain: "todo-app-cp-13240.firebaseapp.com",
    projectId: "todo-app-cp-13240",
    storageBucket: "todo-app-cp-13240.appspot.com",
    messagingSenderId: "1051263863559",
    appId: "1:1051263863559:web:b92c48d67d7103757e93a2",
    measurementId: "G-F2NT0WLHL5"
});

const db = firebaseApp.firestore();

export default db;