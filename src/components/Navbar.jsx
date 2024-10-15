import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F7F7F7] text-black p-4">
      <div className="container mx-auto flex justify-between items-center w-[80%]">
        <div className="text-2xl font-bold">
          <Link to="/">Barcozy</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to="/cocktails"
            className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
          >
            Cocktails
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Home
          </Link>
          <Link
            to="/cocktails"
            onClick={toggleMenu}
            className="block py-2 px-4 hover:bg-gray-700"
          >
            Cocktails
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
