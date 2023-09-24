import firebase from "firebase";

import 'firebase/auth'


export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCFXkDI3wbOudt6fitv7mIgdBw6K7ycikw",
    authDomain: "chat-project-khandan.firebaseapp.com",
    projectId: "chat-project-khandan",
    storageBucket: "chat-project-khandan.appspot.com",
    messagingSenderId: "534500106637",
    appId: "1:534500106637:web:080be797319b24f30c9dc4"
}).auth()