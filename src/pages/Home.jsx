import React, { useState, useRef, useEffect } from "react";
import { Carousel, Output, Scene, Search, TopCocktail } from "../components";
import { GET_BY_NAME, GET_RANDOM } from "../constants/api";

const Home = () => {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const outputRef = useRef(null);
  const isFirstRender = useRef(true); // To track if it's the first render

  const handleSearchByName = (cocktail) => {
    setSearch(cocktail);
  };

  const getByName = async (e) => {
    e.preventDefault();
    if (search) {
      const req = await fetch(GET_BY_NAME + search);
      const res = await req.json();
      setCocktails(res.drinks);

      setSearch("");
    } else {
      console.log("Please enter a cocktail name.");
    }
  };

  const getRandom = async () => {
    const req = await fetch(GET_RANDOM);
    const res = await req.json();
    setCocktails(res.drinks);
  };
  const clearCocktails = () => {
    setCocktails([]); // Clear the cocktails array
  };

  useEffect(() => {
    // Scroll to Output component after cocktails are fetched
    if (cocktails.length > 0 && !isFirstRender.current) {
      outputRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      isFirstRender.current = false; // Set to false after the first render
    }
  }, [cocktails]);

  return (
    <div c>
      <div className="w-full">
        <Carousel />
        <Search
          search={search}
          handleSearchByName={handleSearchByName}
          getByName={getByName}
          getRandom={getRandom}
        />
        {cocktails.length > 0 && (
          <div ref={outputRef}>
            <Output cocktails={cocktails} clearCocktails={clearCocktails} />
          </div>
        )}
        <TopCocktail />
      </div>
    </div>
  );
};

export default Home;
