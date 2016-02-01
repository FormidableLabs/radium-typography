/* global document:false */
/* eslint-disable new-cap */
import React from "react";
import ReactDOM from "react-dom";
import Radium, { StyleRoot } from "radium";

const App = () => {
  const { styles } = App;
  return (
    <StyleRoot className="demo">
      <p>Nothing to see here</p>
    </StyleRoot>
  );
};

const Wrapper = Radium(App);

ReactDOM.render(<Wrapper/>, document.getElementById("content"));
