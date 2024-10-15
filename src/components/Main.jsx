import React from "react";
import { Route, Routes } from "react-router-dom";
import { CocktailDetails, Cocktails, Home } from "../pages";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/cocktails" element={<Cocktails />} />
      <Route path="/cocktails/:id" element={<CocktailDetails />} />
    </Routes>
  );
};

export default Main;
