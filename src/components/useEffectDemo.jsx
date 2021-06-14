import React, { Component } from "react";
import ReactDom, { render } from "react-dom";

class EffectDemo extends Component {
  render() {
    const arr = ["a", "w", "s"];
    console.log("i am here");
    return <div>Skills:{arr}</div>;
  }
}

export default EffectDemo;
