import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Page = ()=>{
    const [data, setData] = useState([]);  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8090/screenshot`);
          setData(response.data.result.robotTasks.items[0].capturedScreenshots.amazonepage.src);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    });
    return(
        <>
         <img src={`${data}`} alt="imagesyoutube" />
        </>
    )
}

export default Page;