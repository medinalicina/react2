import React, { useState, useEffect } from "react";

function Cas9() {
  const [data, setData] = useState({});
  const [currentProd, setCurrentProd] = useState(1);
  const [allProd] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${currentProd}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [currentProd]);

  console.log(currentProd);
  console.log(data);

  return (
    <React.Fragment>
      {data && (
        <>
          <h1>{data?.title}</h1>
          <h1>{data?.description}</h1>
          {data?.images && <img src={data.image[0]}></img>}
        </>
      )}
      {allProd.map((el) => {
        return (
          <button
            onClick={() => {
              setCurrentProd(el);
            }}
          >
            {el}
          </button>
        );
      })}
    </React.Fragment>
  );
}

export default Cas9;
