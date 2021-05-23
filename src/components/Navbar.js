import React from "react";
import firebase from "../database/firebase";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  let history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    history.push("/login");
  };

  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a className="navbar-title navbar-brand m-2" href="/">
        Task Dash
      </a>
      <ul className="navbar-nav justify-content-between">
        <li className="nav-item">
          {/* <a className="nav-logout nav-link p-3 " href="/login">
            Log Out
          </a> */}
          <button className="nav-logout" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};
