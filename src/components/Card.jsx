import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ strDrinkThumb, strDrink, strAlcoholic, idDrink }) => {
  return (
    <motion.div className="border rounded shadow-lg p-4">
      <img
        className="w-full h-48 object-cover rounded"
        src={strDrinkThumb}
        alt={strDrink}
      />
      <h3 className="mt-2 font-semibold min-h-12">{strDrink}</h3>
      {strAlcoholic && <p>{strAlcoholic}</p>}
      <Link to={`/cocktails/${idDrink}`}>
        <button className="bg-green-500 text-white py-1 px-2 rounded mt-2">
          More details ...
        </button>
      </Link>
    </motion.div>
  );
};

export default Card;
