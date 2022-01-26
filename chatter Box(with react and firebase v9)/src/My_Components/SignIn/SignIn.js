import React from "react";
import "./SignIn.css"
import { auth, providerGoogle } from "../../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInAnonymously } from "firebase/auth";

export const SignIn = () => {

  function createAuthEmailAndPassword(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password)
    createUserWithEmailAndPassword(auth, email, password)
  }
  function authEmailAndPassword(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    //console.log(email, password)
    signInWithEmailAndPassword(auth, email, password)
  }

  function signInWithGoogle() {
    signInWithPopup(auth, providerGoogle);
  }
  /**function signInWithGithub() {
    signInWithPopup(auth, providerGithub);
  }
  function signInWithFacebook() {
    signInWithPopup(auth, providerFacebook);
  }*/
  function signInAno() {
    signInAnonymously(auth);
  }

  return (
    <div className="SignIn">
      <div className="SignIn-heading">
        <h1 className="SignIn-heading-h1">
          <span> Welcome </span>
          <span> To </span>
          <span> Chatter Box </span>
        </h1>
      </div>
      <div className="Email-login">
      <h6>Existing User?</h6>
        <form onSubmit={authEmailAndPassword}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name='password' placeholder="password" />
          <button type="submit" className="btn mb-2">Sign In</button>
        </form>
        <h6>New User? Sign In to continue.</h6>
        <form onSubmit={createAuthEmailAndPassword}>
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name='password' placeholder="password" />
          <button type="submit" className="btn mb-2">Sign Up</button>
        </form>
      </div>

      <button onClick={signInWithGoogle}>Sign In With Google</button>
      <button onClick={signInAno}>Anonymous Sign In</button>
      
    </div>
  );
};
