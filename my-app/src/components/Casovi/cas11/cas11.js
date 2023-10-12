import React, { useEffect, useState } from "react";
import KarticaDomaci from "./KarticaDomaci";
import "./style.css";
import axios from 'axios'

function Cas11() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const getData = () => {
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((products) => setData(products.products))
      .catch((error) => alert("Error fetching data:", error));
  };
const BASE_URL = "https://dummyjson.com/products";
  const getDataByCategory = () => {
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then((res) => res.json())
      .then((products) => setData(products.products))
      .catch((error) => alert("Error fetching data:", error));
  };


  const getData2 = () => {
    axios
    .get(`${BASE_URL}/search?q=${search}`)
    .then((res) => setData (res.data.products));
  };


  useEffect(() => {
    if (category) {
      getDataByCategory();
    } else {
     // getData();
     getData2();
    }
  }, [search, category]);

  return (
    <div className="container">
      <div className="searchWrapper">
        <input
          placeholder="Search..."
          className="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="categorySelect"
        >
          <option value="">Sve kategorije</option>
          <option value="smartphones">Smartphones</option>
          <option value="laptops">Laptops</option>
          <option value="home-decoration">Home decoration</option>
          <option value="skincare">Skincare</option>{" "}
        </select>
      </div>

      <div className="cardWrapper">
        {data.map((product) => (
          <KarticaDomaci product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Cas11;
