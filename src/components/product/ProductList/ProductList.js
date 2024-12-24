// src/components/ProductList.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css"; 

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <Link to={`/products/${product._id}`}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
