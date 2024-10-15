import React from "react";

const Search = ({ search, handleSearchByName, getByName, getRandom }) => {
  return (
    <form className="p-10 flex justify-center gap-[2rem]" onSubmit={getByName}>
      <input
        value={search}
        onChange={(e) => {
          handleSearchByName(e.target.value);
        }}
        type="search"
        id="inp"
        placeholder="Name of the cocktail"
        className="  text-white py-1 px-3 rounded mt-2"
      />
      <button
        className="bg-pink-400  text-white py-1 px-3 rounded mt-2"
        type="submit"
      >
        Search
      </button>
      {/* Set type to submit */}
      <button
        type="button"
        className="bg-green-400 text-white py-1 px-3 rounded mt-2"
        onClick={getRandom}
      >
        Random
      </button>{" "}
      {/* Prevent default form submission */}
    </form>
  );
};

export default Search;
