import React from "react";

function SearchResultsList({ results }) {
  console.log(results);
  return (
    <div className="results-list">
      {results?.products?.map((product) => {
        return (
          <div key={product.id}>
            <p>{product.title}</p>
            <p>{product.brand}</p>
          </div>
        );
      })}
    </div>
  );
}

export default SearchResultsList;
