import React, { useCallback } from "react";

import firebase from "../database/firebase";

import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const login = useCallback(
    async (e) => {
      e.preventDefault();

      const { email, password } = e.target.elements;
      try {
        await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (err) {
        alert(err);
      }
    },
    [history]
  );

  return (
    <div className="login-container">
      <div className="login-custom-container container mt-4">
        <form className="card form-group mt-5" onSubmit={login}>
          <div className="col-xs-4">
            <h1 className="text-login">Login</h1>
            <input
              name="email"
              type="email"
              className=" input-custom form-control mt-4"
              placeholder="Email"
            />
            <input
              name="password"
              type="password"
              className="input-custom form-control mt-3"
              placeholder="Password"
            />
            <input type="submit" className=" input-custom form-control mt-3 mb-4" value="Login" />
            <p className="mb-4 text-auth-info">
              <center>
                Don't have an account?{" "}
                <a href="/signup" className="auth-link">
                  Sign Up
                </a>
              </center>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
