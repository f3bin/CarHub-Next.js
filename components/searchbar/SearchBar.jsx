"use client";
import { SearchManufacturer } from "..";
import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [manufacturer,setManufacturer] =useState('');
  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div searchbar__item>
        <SearchManufacturer 
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;

