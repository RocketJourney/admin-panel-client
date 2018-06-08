import React, { Component } from "react";
import PropTypes from "prop-types";

import View from "./view";

export default class Login extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <View />
      </div>
    );
  }
}
