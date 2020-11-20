import React, { useState } from "react";
import searchIcon from "../Assets/search.svg";
const SearchInput = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleSearch = () => {
    props.handleSearch(inputValue);
  };
  return (
    <form onSubmit={handleSearch} className="searchInput">
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search"
      />
      <img src={searchIcon} alt="searchIcon" onClick={handleSearch} />
    </form>
  );
};
export default SearchInput;
