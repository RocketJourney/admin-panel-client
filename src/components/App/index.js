import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../Login";
import AdminApp from "../AdminApp";

import styles from "./styles.less";

if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

const App = () => (
  <section className={`container-fluid ${styles.body}`}>
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={AdminApp} />
      </Switch>
    </Router>
  </section>
);

export default hot(module)(App);
