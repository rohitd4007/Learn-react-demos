import react, { Component } from "react";

class Child extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="child">
          <h2 className="text-primary">
            I am child Component and My parent is {this.props.action}
          </h2>
        </div>
      </>
    );
  }
}

export default Child;
