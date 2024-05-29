import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.imageurl} alt={product.productname} />
      <h2>{product.productname}</h2>
      <p className="price">{product.price}</p>
      <p className="priceanddiscount">{product.priceanddiscount}</p>
      <p className="rating">{product.ratingtext} ({product.rating})</p>
      <p className="details">{product.about}</p>
      <p className="exchange">{product.exchange}</p>
    </div>
  );
};

const ProductList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8090/products`);
          setData(response.data.result.robotTasks.items[0].capturedLists.ElectronicItem);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    });
  
  return (
    <div className="container">
      {data.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
