import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div
      key={product.id}
      className="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <Link to={`/product/${product.id}`}>
        <img
          className="w-full h-56 object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
        </div>
      </Link>
      <div className="flex justify-between items-center px-6 py-4">
        <span className="text-gray-700 text-base font-bold">
          Price: ${product.price}
        </span>

        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
          onClick={() => addToCart(product)}
        > */}
          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
        {/* </button> */}
      </div>
    </div>
  );
};

export default ProductItem;
