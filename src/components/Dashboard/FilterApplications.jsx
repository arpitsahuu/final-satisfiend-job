import React, { useState } from "react";
const FilterApplications = ({ applicationFilter, setapplicationFilters }) => {
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setapplicationFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };
  return (
    <div className="form-container flex  flex-col md:flex-row justify-evenly w-full p-8 bg-gray-100 rounded shadow-md transition-all duration-300">
      <div className="form-group mb-4 transition-transform duration-300 hover:scale-105">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-600"
        >
          Email:
        </label>
        <input
          type="text"
          id="email"
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-sky-500 transition-all duration-300"
        />
      </div>

      <div className="form-group mb-4 transition-transform duration-300 hover:scale-105">
        <label
          htmlFor="contact"
          className="block text-sm font-medium text-gray-600"
        >
          Contact:
        </label>
        <input
          type="text"
          id="contact"
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-sky-500 transition-all duration-300"
        />
      </div>

      <div className="form-group mb-4 transition-transform duration-300 hover:scale-105">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-600"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-sky-500 transition-all duration-300"
        />
      </div>

      {/* Other JSX for your component */}
    </div>
  );
};
export default FilterApplications;
