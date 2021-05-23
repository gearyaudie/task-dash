import React, { useEffect, useState } from "react";
import { Ring } from "react-spinners-css";
import firebase from "../database/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return (
      <>
        <br />
        <div className="container loading-container">
          <Ring color="#b0b0b0" />
        </div>
      </>
    );
  }

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};
