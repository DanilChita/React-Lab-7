import React, { useContext } from "react";
import {AppContext} from "../context/AppContext";

const Menu = ({ categories }) => {
  const { category, displayedProductCount, handleCategoryChange } =
    useContext(AppContext);

  const handleChange = (e) => {
    const selectedCategory = e.target.value;
    handleCategoryChange(selectedCategory);
  };

  return (
    <div className="bg-gray-200 py-4 px-8">
      <div className="flex justify-between items-center">
        <span className="text-lg">
          Displayed Products: {displayedProductCount}
        </span>
        <select
          className="bg-white text-gray-800 py-2 px-4 rounded"
          value={category}
          onChange={handleChange}
        >
          {[...categories].map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Menu;
