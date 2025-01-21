import React from "react";

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    if (event.key === "Enter") {
      onSearch(event.target.value);
    }
  };

  return (
    <input
      type="text"
      placeholder="Search for cryptocurrency or stock"
      onClick={handleSearch}
    />
  );
};

export default SearchBar;
