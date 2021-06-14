import react, { Component } from "react";
import axios from "axios";

class AxiosDemo extends Component {

  const fetchData = async() =>{

     data =await axios.get("api.json").then((data) => {
      console.log("check");

      console.log(data);
    });


  }

  fetchData() {
    
  }
  render() {
    return (
      <>
        <h1 className="aa">Hello:{this.fetchData()}</h1>
      </>
    );
  }
}

export default AxiosDemo;
