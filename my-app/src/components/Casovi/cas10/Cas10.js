import React, { useEffect, useState } from "react";
// import "./style.css";

function Cas10() {
  const [defaultData, setDefaultData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [defaultProduct, setDefaultProduct] = useState(1);

  // const getData = () =>
  //   fetch(`https://dummyjson.com/products/${defaultProduct}`)
  //     .then((res) => res.json())
  //     .then((data) => setDefaultData(data));

  const getData = () =>
    // fetch(`https://dummyjson.com/products`)
    fetch("https://dummyjson.com/products/search?q=phone")
      .then((res) => res.json())
      .then((data) => setDefaultData(data?.products));

  useEffect(() => {
    getData();
    console.log(defaultData);
    // setDefaultProduct((prev) => prev + 1);
  }, []);

  console.log(defaultData);
  console.log(defaultProduct);

  return (
    <div style={{ minHeight: "100vh" }}>
      <button onClick={getData}>Uzmi podatke</button>
      <button
        onClick={() =>
          setFilteredData(defaultData.filter((el) => el.id % 2 === 0))
        }
      >
        Filtriraj podatke
      </button>
      x
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "200px",
          width: "100px",
        }}
      >
        {defaultData.brand}

        {/* {defaultData.map((el) => (
          <h1>{el.brand}</h1>
        ))} */}
        {/* {defaultData.length > 0 && defaultData[0].brand} */}
        {defaultData?.length > 0 ? (
          defaultData?.map((product) => (
            <h1 style={{ border: "1px solid black" }} key={product.id}>
              {product.id}
            </h1>
          ))
        ) : (
          <span className="loader"></span>
        )}
      </div>
      {/* <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => setDefaultProduct(1)}>1</button>
        <button onClick={() => setDefaultProduct(2)}>2</button>
        <button onClick={() => setDefaultProduct(3)}>3</button>
        <button onClick={() => setDefaultProduct(4)}>4</button>
        <button onClick={() => setDefaultProduct(5)}>5</button>
      </div> */}
    </div>
  );
}

export default Cas10;
// Lifecycling components in react
// Tri faze zivotnog ciklusa komponente
//1 mounting phase
//2 updating phase
//3 unmounting phase
