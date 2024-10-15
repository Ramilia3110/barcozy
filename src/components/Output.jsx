import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";

const Output = ({ cocktails, clearCocktails }) => {
  return (
    <div className="flex flex-col gap-4 w-[90%] sm:w-[80%] mx-auto relative px-8 py-14 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg">
      <button
        className="absolute right-4 top-4 p-2 rounded-full bg-blue-300 text-white hover:bg-blue-500 transition duration-200"
        onClick={clearCocktails}
      >
        <IoCloseSharp className="w-4 h-4" />
      </button>

      <div className="flex gap-4 flex-wrap justify-center">
        {cocktails.length > 0 &&
          cocktails.map((el, index) => (
            <motion.div
              key={el.idDrink}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }} // Delay based on index
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // Responsive widths
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

export default Output;
