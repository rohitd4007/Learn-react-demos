import React, { Component } from "react";
import Counter from "./counterComponents";
import Timer from "./countDownTimer";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 1, value: 4 },
      { id: 1, value: 0 },
      { id: 1, value: 0 },
    ],
  };
  render() {
    return (
      <div>
        <div style={{ backgroundColor: "white" }}>
          <Timer></Timer>
        </div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;
