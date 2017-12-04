import * as firebase from 'firebase'
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDwQNKViY-aiz-yB-XA-fV24482bzuq5IQ",
    authDomain: "cloudftit347-ea13d.firebaseapp.com",
    databaseURL: "https://cloudftit347-ea13d.firebaseio.com",
    projectId: "cloudftit347-ea13d",
    storageBucket: "cloudftit347-ea13d.appspot.com",
    messagingSenderId: "516999579002"
  };
  firebase.initializeApp(config);

  export const database = firebase.database().ref('posts/');
  export const auth = firebase.auth();
  export const storage = firebase.storage();
