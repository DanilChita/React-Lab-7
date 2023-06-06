import React, { useContext } from "react";
import ScrollToTopOnMount from "../hooks/ScrollToTopOnMount";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { selectedProducts, removeFromCart, getTotalCost } =
    useContext(AppContext);

  return (
    <>
      <ScrollToTopOnMount />

      <div className="flex flex-col items-center mt-8">
        <h2 className="text-3xl mb-4">Cart</h2>
        {selectedProducts.length === 0 ? (
          <p className="text-lg mb-4">No items in the cart.</p>
        ) : (
          <div>
            <ul className="text-lg">
              {selectedProducts.map((product) => (
                <li key={product.id} className="flex items-center my-4">
                  <img
                    className="w-20 h-20 object-contain mr-4"
                    src={product.image}
                    alt={product.title}
                  />
                  <div>
                    <p className="font-bold">{product.title}</p>
                    <p className="text-gray-700">${product.price} per 1</p>
                    <p className="text-gray-700">
                      Quantity: {product.quantity}
                    </p>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg mt-4 text-center mb-4">
              Total Cost: ${getTotalCost().toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
