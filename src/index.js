/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Counters from "./components/counters ";
import Parent from "./components/parrentComponent";
import Sample from "./components/sampleComponenet";
import TTimer from "./components/lifecycleDemo";
import AxiosDemo from "./components/axiosDemo";
import EffectDemo from "./components/useEffectDemo";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import EmployeeDetail from "./components/Employee";
import App from "./App";

function GitData({ login }) {
  const [data, setdata] = useState(null);
  console.log(login);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setdata)
      .catch(console.error);
  }, []);

  if (data) {
    return <div>{JSON.stringify(data)}</div>;
  }
  return null;
}

function New(pp) {
  console.log(pp);
  return <GitData login="rohitd4007" />;
}

ReactDOM.render(<EffectDemo />, document.getElementById("root"));
reportWebVitals();
