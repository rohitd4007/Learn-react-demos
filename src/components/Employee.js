import React, { Component } from "react";

const emp1 = {
  empId: 100,
  empName: "Jack",
  age: 30,
  salary: 50000,
  image: "user3.png",
};
const emp2 = {
  empId: 101,
  empName: "Jane",
  age: 24,
  salary: 40000,
  image: "user2.jpg",
};

class EmployeeDetail extends Component {
  state = {
    add: "./componen",
  };
  empArr = [emp1, emp2];

  componentDidMount() {
    document.body.style.backgroundColor = "#1e3624";
  }

  createCard(emp) {
    var note = null;
    if (emp.age < 25) {
      note = <span className="text-info"> - Fresher</span>;
    }
    return (
      <div className="card" style={{ width: 200 }}>
        <img
          className="card-img-top"
          src={emp.image}
          height="200"
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{emp.empName}</h5>
          <div className="card-text">
            <span>Id: {emp.empId}</span>
            <br />
            <span>Age: {emp.age}</span> {note}
            <br />
            <span>Salary: {emp.salary}</span>
            <br />
          </div>
          <button type="button" className="btn btn-primary">
            Edit Details
          </button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <h3 className="text-center text-primary">Employee Details</h3>
        <div className="row">
          {this.empArr.map((emp) => {
            return this.createCard(emp);
          })}
        </div>
      </div>
    );
  }

  // render() {
  //   return (
  //     <>
  //       <div>
  //         <div>
  //           <h2 className="text-center" style={{ color: "white" }}>
  //             Employee Detail
  //           </h2>
  //           <div
  //             className="jumbotron jumbotron"
  //             style={{ backgroundColor: "blue" }}
  //           ></div>
  //           <div className="container">
  //             <div
  //               className="cc"
  //               style={{
  //                 margin: "10 50 20 50",
  //                 display: "flex",
  //                 justifyContent: "space-between",
  //               }}
  //             >
  //               <div className="image">
  //                 <img
  //                   style={{ width: 130, height: 150 }}
  //                   src="user3.png"
  //                   alt="P"
  //                 />
  //               </div>
  //               <div className="image">
  //                 <img
  //                   style={{ width: 130, height: 150 }}
  //                   src="user3.png"
  //                   alt="P"
  //                 />
  //               </div>
  //               <div className="image">
  //                 <img
  //                   style={{ width: 130, height: 150 }}
  //                   src="user3.png"
  //                   alt="P"
  //                 />
  //               </div>
  //               <div className="image">
  //                 <img
  //                   style={{ width: 130, height: 150 }}
  //                   src="user3.png"
  //                   alt="P"
  //                 />
  //               </div>
  //               <div className="image">
  //                 <img
  //                   style={{ width: 130, height: 150 }}
  //                   src="user3.png"
  //                   alt="P"
  //                 />
  //               </div>
  //               <div className="ename">
  //                 <p>Employee1</p>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
}

export default EmployeeDetail;
