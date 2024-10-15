import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg p-4 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Barcozy. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Terms of Service
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-700">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
