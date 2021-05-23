import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { DashboardHome } from "./components/DashboardHome";
import { SingleTask } from "./components/SingleTask";
import Login from "./components/Login";
import Signup from "./components/Signup";
import styles from "./App.css";
import { AuthProvider } from "./authentication/auth";
import PrivateRoute from "./authentication/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={DashboardHome} />
            <PrivateRoute path="/task/:id" component={SingleTask} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
