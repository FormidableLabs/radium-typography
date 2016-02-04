/* global document:false */
/* eslint-disable new-cap */
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Radium, { StyleRoot } from "radium";
import { Typography } from "../src/index";

@Radium
class App extends Component {
  render() {
    return (
      <StyleRoot className="demo">
        <Typography />
      </StyleRoot>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("content"));
