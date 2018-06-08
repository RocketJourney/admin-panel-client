import React from "react";
import { hot } from "react-hot-loader";

if (process.env.NODE_ENV !== "production") {
  const { whyDidYouUpdate } = require("why-did-you-update");
  whyDidYouUpdate(React);
}

const App = () => <div>Hello RocketJourney World!</div>;

export default hot(module)(App);
