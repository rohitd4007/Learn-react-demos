import react, { Component } from "react";
class TTimer extends react.Component {
  constructor(props) {
    super(props);
    this.state = { secondElapsed: 0 };
    this.start = this.start.bind(this);
  }

  start() {
    this.setState({ secondElapsed: this.state.secondElapsed + 1 });
  }

  componentWillMount() {
    alert("component will Mount");
  }
  componentDidMount() {
    setInterval(this.start, 10);
  }

  render() {
    return (
      <>
        <div className="time">second Elplased:{this.state.secondElapsed}</div>
      </>
    );
  }
}

export default TTimer;
