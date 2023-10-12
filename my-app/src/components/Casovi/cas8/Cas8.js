import React, { useState } from "react";
function Cas8() {
  const [defaultData, setDefaultData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () =>
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setDefaultData(data?.products));

  console.log(defaultData);
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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          height: "200px",
          width: "100px",
        }}
      >
        {loading && <h1>Loading.....</h1>}
        {defaultData?.length > 0 ? (
          defaultData?.map((product) => (
            <h1 style={{ border: "1px solid black" }} key={product.id}>
              {product.id}
            </h1>
          ))
        ) : (
          <h1>Nema trenutno podataka </h1>
        )}
      </div>
    </div>
  );
}

export default Cas8;

//moramo da storujemo ceo obj u komponentu i odatle da uzimamo a ne da radimo product.id itd...
