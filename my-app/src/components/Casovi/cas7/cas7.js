import React, { useState } from "react";
import "./cas7.css";
import Product from "./Products";

function Cas7() {
  const [randomNumber, setRandomNumber] = useState(12);

  const [products, setProducts] = useState([
    { name: "Adidas", price: 120, inCart: false },
    { name: "Puma", price: 200, inCart: false },
    { name: "Nike", price: 300, inCart: false },
    { name: "Didadora", price: 70, inCart: false },
    { name: "Under Armour", price: 120, inCart: false },
  ]);

  const inCartProducts = products.filter((product) => product.inCart);

  console.log(products);

  return (
    <div style={{ textAlign: "center" }}>
      {inCartProducts.length > 0 ? (
        inCartProducts.map((product) => (
          <Product ime={product.name} cena={product.price} />
        ))
      ) : (
        <h1>Nemate proizvoda u korpi</h1>
      )}

      <button
        onClick={() =>
          setProducts({ ...(products[products[2].inCart] === true) })
        }
      >
        Dodaj u korpu
      </button>

      {/* <h1>{randomNumber}</h1>
      <button onClick={() => setRandomNumber(15)}>Promeni broj u 15</button> */}
      {/* <h1>Ovaj broj je paran</h1> */}
      {/* {randomNumber % 2 === 0 ? (
        <h1 className="parni">Ovaj broj je paran</h1>
      ) : (
        <div className="neparni">
          <h1>Ovaj broj nije paran</h1>
          <h1>Ovaj broj nije paran</h1>
          <h1>Ovaj broj nije paran</h1>
          <h1>Ovaj broj nije paran</h1>
          <h1>Ovaj broj nije paran</h1>
          <h1>Ovaj broj nije paran</h1>
        </div>
      )}

      <div className={`clasic ${error && "errorBorder"}`}></div>
      <div className={`clasic `}></div>
      <div className={`clasic errorBorder`}></div>
      <div className={`clasic `}></div>
      <div className={`clasic `}></div>
      <div className={`clasic `}></div>
      <div className={`clasic `}></div>
      <div className={`clasic `}></div>
      <div className={`clasic `}></div>
      <div className={`clasic `}></div> */}
    </div>
  );
}

export default Cas7;
