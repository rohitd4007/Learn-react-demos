import React, { Component } from "react";

class Sample extends Component {
  constructor() {
    super();
    this.count = 0;
    this.state = { displaytext: true };
  }
  click = () => {
    this.count += 1;
  };
  changeState = () => {
    if (this.state.displaytext === false) {
      this.setState({ displaytext: true });
    } else this.setState({ displaytext: false });
  };
  methodD = () => {
    // eslint-disable-next-line no-unused-expressions
    this.click;
    // eslint-disable-next-line no-unused-expressions
    this.changeState;
  };
  fcomponent = () => {
    return (
      <div className="text">
        <h2 className="txt">Display Me</h2>

        <button
          onClick={(e) => {
            // eslint-disable-next-line no-unused-expressions
            this.methodD;
          }}
        >
          {" "}
          Login{" "}
        </button>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="button">
          <button onClick={this.changeState} className="btn btn-primary">
            Display
          </button>
          {/* <span>count:{this.count}</span> */}
          {this.state.displaytext ? this.fcomponent() : null}
          <button onClick={this.click} className="btn btn-primary">
            Hide
          </button>
        </div>
      </>
    );
  }
}

export default Sample;
