import React from "react";
import { hot } from "react-hot-loader";
<<<<<<< HEAD

=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../Login";
import AdminApp from "../AdminApp";

import styles from "./styles.less";

>>>>>>> release/1.1.0
if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

<<<<<<< HEAD
const App = () => <div>Hello RocketJourney World!</div>;
=======
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
>>>>>>> release/1.1.0

export default hot(module)(App);
