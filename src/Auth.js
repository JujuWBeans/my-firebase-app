// src/Auth.js
import React from "react";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

function Auth() {
  const [user] = useAuthState(auth);

  const login = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logout = () => signOut(auth);

  return (
    <div>
      {user ? (
        <>
          <p>Hello, {user.displayName}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login with Google</button>
      )}
    </div>
  );
}

export default Auth;
