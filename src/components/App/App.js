import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Child from "../Child/Child";

const App = () => {
  const [respObj, setRespObj] = useState({});

  useEffect(() => {
    const getParams = new URLSearchParams(window.location.search);
    const isHd = getParams.get("isHd");
    const date = getParams.get("date");

    axios
      .get(
        `http://localhost:8080/astronomy/apod/day/?ishd=${isHd}&date=${date}`
      )
      .then((res) => {
        let respObj = {};
        console.log("Get Response ---------->> ", res);
        respObj = res.data;
        setRespObj(respObj);
        console.log(respObj);
      })
      .catch((err) => {
        console.log("Error occured------>> " + err);
      });
  }, []);

  return (
    respObj && (
      <div id="app">
        {respObj && <h2>{respObj.title}</h2>}
        {respObj && <Child respObj={respObj} />}
      </div>
    )
  );
};

export default App;
