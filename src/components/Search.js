import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";

const Search = () => {
  const { term, type } = useGlobalContext();
  const inputRef = useRef(null);
  const handleButtonFocus = (e) => {
    inputRef.current.focus();
  };

  return (
    <form className='search-form shadow' onSubmit={(e) => e.preventDefault()}>
      <button className='form-search-icon' onFocus={handleButtonFocus}>
        <FaSearch />
      </button>
      <input
        className='form-search-input'
        type='text'
        ref={inputRef}
        placeholder='Search for a country...'
        aria-label='Search countries'
      />
    </form>
  );
};

export default Search;
