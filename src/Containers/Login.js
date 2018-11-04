import React, { Component } from 'react';
import { auth } from '../Storage/firebase'

export default class Login extends Component {



  createUser(login, password) {
       auth.createUserWithEmailAndPassword(login, password).then(value => {
         //success
       })
       .catch(error => {
        //
      });
      auth.onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
      });
  }

  authing() {
    auth.signInWithEmailAndPassword('ntu347ftit@gmail.com', 'laichzeit1');
    auth.onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
    });
  }
  
  logOut() {
    auth.signOut();
    auth.onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
    });
  }

  render () {
    return  (
      <div onClick={this.logOut}> Exit </div>
    )
   }
}
