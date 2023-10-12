import React, { useState } from "react";
import "./Search.css";
import SearchBar from "./comp/SearchBar";
import SearchResultsList from "./comp/SearchResultsList";

function Search() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results} />
      </div>
    </div>
  );
}

export default Search;
