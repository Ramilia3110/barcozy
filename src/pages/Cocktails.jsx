import React, { useEffect, useState } from "react";
import { GET_ALL_COCKTAILS, GET_BY_FILTER } from "../constants/api";
import { Card } from "../components";
import { motion } from "framer-motion";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [value, setValue] = useState("All");

  // Fetch all cocktails
  const getAllCocktails = async () => {
    const req = await fetch(GET_ALL_COCKTAILS);
    const res = await req.json();
    setCocktails(res.drinks);
  };

  // Fetch cocktails by filter
  const getByFilter = async () => {
    if (value === "All") {
      getAllCocktails();
    } else {
      const req = await fetch(GET_BY_FILTER + value);
      const res = await req.json();
      setCocktails(res.drinks);
    }
  };

  // Fetch all cocktails on initial render
  useEffect(() => {
    getAllCocktails();
  }, []);

  // Fetch filtered cocktails when value changes
  useEffect(() => {
    getByFilter();
  }, [value]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 bg-barcozy-gradient">
      {/* Filter Dropdown */}
      <div className="w-[80%] mx-auto mb-8 text-left">
        <label
          htmlFor="filter"
          className="mr-4 text-lg font-medium text-gray-700"
        >
          Filter by Type:
        </label>
        <select
          id="filter"
          className="bg-white border border-gray-300 text-gray-900 text-base rounded-lg py-2 px-4 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 outline-none"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        >
          <option value="All">All</option>
          <option value="Alcoholic">Alcoholic</option>
          <option value="Non_Alcoholic">Non-Alcoholic</option>
        </select>
      </div>

      {/* Cocktails Grid */}
      <div className="flex gap-6 flex-wrap justify-center items-start max-w-[90%] mx-auto p-4">
        {cocktails.length > 0 ? (
          cocktails.map((el, index) => (
            <motion.div
              key={el.idDrink}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }} // Smooth animation with delay
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <Card
                strDrinkThumb={el.strDrinkThumb}
                strDrink={el.strDrink}
                strAlcoholic={el.strAlcoholic}
                idDrink={el.idDrink}
              />
            </motion.div>
          ))
        ) : (
          <p className="text-xl font-semibold text-gray-700 mt-6">
            No cocktails found. Please try another filter.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cocktails;
