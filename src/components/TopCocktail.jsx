import React, { useState, useEffect } from "react";
import Card from "./Card";
import { GET_ALL_COCKTAILS } from "../constants/api";
import { motion } from "framer-motion";

const TopCocktail = () => {
  const [topCocktails, setTopCocktails] = useState([]);

  const getAllCocktails = async () => {
    const req = await fetch(GET_ALL_COCKTAILS);
    const res = await req.json();

    setTopCocktails(res.drinks.slice(-12)); // Get last 10 cocktails
  };

  useEffect(() => {
    getAllCocktails();
  }, []);

  return (
    <div className="my-10">
      {topCocktails.length > 0 && (
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-gray-800 mb-8"
        >
          Our Latest Cocktails
        </motion.h3>
      )}
      <div className="flex flex-wrap gap-4 justify-center w-[90%] mx-auto p-4">
        {topCocktails.length > 0 &&
          topCocktails.map((el, index) => (
            <motion.div
              key={el.idDrink}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%] flex-shrink-0"
            >
              <Card
                strDrinkThumb={el.strDrinkThumb}
                strDrink={el.strDrink}
                strAlcoholic={el.strAlcoholic}
                idDrink={el.idDrink}
              />
            </motion.div>
          ))}
      </div>
    </div>
  );
};

export default TopCocktail;
