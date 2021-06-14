import React, { Component } from "react";
import Child from "./childComponent";

var arraySample = [
  { first: 120, id: 2 },
  { first: 10, id: 3 },
];
class Parent extends Component {
  action = "Waving";
  state = { cource: arraySample };
  render() {
    var user = this.state.cource;
    return (
      <>
        <div className="pp">
          <h1 className="text-primary">I am Praent</h1>
          <Child action={this.action} />
          <div className="map-fun">
            {user.map((data) => console.log(data.id))}
          </div>
        </div>
      </>
    );
  }
}

export default Parent;
