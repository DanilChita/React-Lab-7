import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DialogBox from "./DialogBox/DialogBox";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { loggedIn, setLoggedIn, selectedProductCount } =
    useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  const handleLogout = () => {
    setLoggedIn(false);
  };

  const openDialogBox = () => {
    setIsOpen(true);
  };
  const closeDialogBox = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-800 sticky top-0 text-white py-4 px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">
          <Link to="/">Fake-Store</Link>
        </h1>
        <nav>
          <ul className="flex items-center">
            <li>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mr-4"
                onClick={openDialogBox}
              >
                Open Dialog Box
              </button>
              <DialogBox isOpen={isOpen} onClose={closeDialogBox} />
            </li>
            <li className="mr-4">
              <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />

                {selectedProductCount > 0 && (
                  <span className="text-xs bg-red-500 text-white px-1 rounded-full ml-1">
                    {selectedProductCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              {loggedIn ? (
                <button
                  className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
                  onClick={handleLogin}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
