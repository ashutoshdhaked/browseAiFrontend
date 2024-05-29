import React, { useEffect, useState } from "react";
import axios from "axios";
import './monitorstock.css'
const MonitoStock = () => {
  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/stockdata`);
        setData(response.data.result.robotTasks.items[1].capturedLists.stockdata);
        setNewData(response.data.result.robotTasks.items[2].capturedLists.stockdata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });
  return (
    <>
      <div className="data-container">
      {data.map((item, index) => (
        <div key={index} className="data-card">
          <div className="data-item">
            <span className="data-name">{item.data}</span>
            <span
              className={`data-value ${
                parseFloat(item.name) >= 0 ? 'positive' : 'negative'
              }`}
            >
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
    <hr></hr>
    <div className="data-container">
      {newdata.map((item, index) => (
        <div key={index} className="data-card">
          <div className="data-item">
            <span className="data-name">{item.data}</span>
            <span
              className={`data-value ${
                parseFloat(item.name) >= 0 ? 'positive' : 'negative'
              }`}
            >
              {item.name}
            </span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default MonitoStock;
