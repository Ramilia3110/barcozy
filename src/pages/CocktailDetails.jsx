import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_DETAIL } from "../constants/api";
import { motion } from "framer-motion";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState({});
  const [ingredients, setIngredients] = useState([]);

  // Fetch cocktail details
  const getCocktailDetails = async () => {
    const req = await fetch(GET_DETAIL + id);
    const res = await req.json();
    setCocktail(res.drinks[0]);
  };

  // Extract ingredients after cocktail data is set
  useEffect(() => {
    if (cocktail) {
      const ingredientsList = [];
      for (let i = 1; i <= 15; i++) {
        const ingredient = cocktail[`strIngredient${i}`];
        if (ingredient) {
          ingredientsList.push(ingredient);
        }
      }
      setIngredients(ingredientsList);
    }
  }, [cocktail]); // Run this effect whenever the cocktail changes

  useEffect(() => {
    getCocktailDetails();
  }, []);

  return (
    <motion.div
      className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg  w-[80%] mx-auto p-8 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {cocktail && (
        <>
          <motion.h2
            className="font-bold py-10 text-center text-4xl md:text-5xl lg:text-6xl text-black"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {cocktail.strDrink}
          </motion.h2>
          <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
            <div>
              <motion.img
                className="w-[80vw] lg:w-[30vw] mx-auto rounded-2xl shadow-lg"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <p className="bg-yellow-200 text-black text-center font-semibold rounded-md py-2 my-8">
                {cocktail.strAlcoholic}
              </p>
            </div>
            <motion.div
              className="lg:w-1/2 text-black"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Ingredients:</h3>
              <ul className="list-disc list-inside space-y-2 text-lg text-left">
                {ingredients.length > 0 &&
                  ingredients.map((ingredient, index) => (
                    <motion.li
                      key={index}
                      className="capitalize"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 * index }}
                    >
                      {ingredient}
                    </motion.li>
                  ))}
              </ul>

              <h3 className="text-2xl font-semibold mt-10 mb-4">
                Instructions:
              </h3>
              <p className="leading-7 text-left">{cocktail.strInstructions}</p>
            </motion.div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default CocktailDetails;
