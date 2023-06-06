import React, { useState } from "react";

const CurrencyConverter = ({ price }) => {
  const [convertedPrice, setConvertedPrice] = useState(price * 40);

  const handleCurrencyChange = (e) => {
    const conversionRate = parseFloat(e.target.value);
    setConvertedPrice(price * conversionRate);
  };

  return (
    <div className="mt-4">
      <div className="flex items-center">
        <label
          htmlFor="currency-select"
          className="block text-lg mb-2 text-center"
        >
          Select Currency:
        </label>

        <select
          id="currency-select"
          onChange={handleCurrencyChange}
          className="border border-gray-400 p-2 rounded focus:outline-none focus:border-blue-500 mx-6"
        >
          <option value="40">UAH</option>
          <option value="1">USD</option>
        </select>
      </div>

      <p className="mt-2 text-lg font-bold mb-6">
        Price: {convertedPrice.toFixed(2)}
      </p>
    </div>
  );
};

export default CurrencyConverter;