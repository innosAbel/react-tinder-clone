// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDXO0Y8IaZDvQMa6BZWAT4JW1W8N9R8QIU",
    authDomain: "tinder-clone-d9fb8.firebaseapp.com",
    databaseURL: "https://tinder-clone-d9fb8.firebaseio.com",
    projectId: "tinder-clone-d9fb8",
    storageBucket: "tinder-clone-d9fb8.appspot.com",
    messagingSenderId: "808918780741",
    appId: "1:808918780741:web:09a09f720ae28450558c2c",
    measurementId: "G-7HZRF6S1L7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;