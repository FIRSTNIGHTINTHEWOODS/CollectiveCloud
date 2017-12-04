import React, { Component } from 'react';
import { auth } from '../Storage/firebase'

export default class Login extends Component {



  createUser() {

       auth.createUserWithEmailAndPassword('dasd@mail.cu', '123123123').then(value => {
        console.log(value);
          debugger;
       })
       .catch(error => {
             debugger;
         console.log(error);
      });
      auth.onAuthStateChanged(firebaseUser => {
        console.log(firebaseUser);
        debugger;
      });
  }

  authing() {
    auth.signInWithEmailAndPassword('ntu347ftit@gmail.com', 'laichzeit1');
    auth.onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
      debugger;
    });
  }
  logOut() {
    auth.signOut();
    auth.onAuthStateChanged(firebaseUser => {
      console.log(firebaseUser);
      debugger;
    });
  }

  render () {
    return  (
      <div> {this.logOut()} </div>
    )
   }
}
