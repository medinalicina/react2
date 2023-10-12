import React from "react";
import "./style.css";

function KarticaDomaci({ product }) {
  return (
    <div className="card">
      <p>{product.title}</p>
      <p>{product.brand}</p>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default KarticaDomaci;
