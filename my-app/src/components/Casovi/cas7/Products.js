import React from "react";

function Product({ ime, cena }) {
  return (
    <div>
      <h1>{ime}</h1>
      <h2>{cena}</h2>
    </div>
  );
}

export default Product;
