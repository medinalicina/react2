import React from "react";
import "./artikl.css";
const Artikl = ({ product }) => {
  return (
    <div className="artikli">
      <img src={product.images[0]}></img>
      <h1>
        <label>Brand: </label>
        {product.brand}
      </h1>
      <h1>
        <label>Category: </label>
        {product.category}
      </h1>
      <h1>
        <label>Description: </label>
        {product.description}
      </h1>
      <h1>
        <label>Price: </label>
        {product.price}$
      </h1>
    </div>
  );
};

export default Artikl;
