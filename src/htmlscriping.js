import React, { useEffect, useState } from "react";
import axios from "axios";

const SuperOfferCard = ({ data }) => {
  return (
    <div className="card">
      <div
        className="makeFlex cardInnerInfo"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
    </div>
  );
};

const HtmlScriping = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8090/htmldata`);
        setData(
          response.data.result.robotTasks.items[1].capturedLists.AllCards
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  });

  return (
    <>
      <div className="container">
        {data.map((item, index) => (
          <SuperOfferCard key={index} data={item.allcardsdata} />
        ))}
      </div>
    </>
  );
};

export default HtmlScriping;
