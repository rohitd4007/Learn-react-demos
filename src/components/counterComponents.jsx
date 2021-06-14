import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.value,
    address: {
      street: "First",
    },
  };
  styles = {
    fontWeight: "bold",
    fontSize: 20,
  };
  componentDidMount() {
    document.body.style.backgroundColor = "#1e3624";
  }

  handelIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  handelDecrement = (product) => {
    // console.log(product);
    this.setState({ count: this.state.count - 1 });
  };
  tags = ["tag1", "tag2", "tag3"];
  render() {
    return (
      <div
        className="container"
        style={{ margin: "auto", textAlign: "center", marginTop: 20 }}
      >
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handelIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          style={{ marginLeft: 5 }}
          onClick={() => this.handelDecrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Decrement
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
