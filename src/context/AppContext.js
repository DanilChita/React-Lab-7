import React, { createContext, useState, useEffect } from "react";
import UseProductData from "../hooks/UseProductData";
import UseSingleProductData from "../hooks/UseSingleProductData";

const { AppContext } = createContext();

const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [displayedProductCount, setDisplayedProductCount] = useState(0);
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = UseProductData();

  useEffect(() => {
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    setFilteredProducts(filteredProducts);
    setDisplayedProductCount(filteredProducts.length);
  }, [category, products]);

  const addToCart = (product) => {
    const updatedProducts = [...selectedProducts];
    const existingProduct = updatedProducts.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      updatedProducts.push({ ...product, quantity: 1 });
    }
    setSelectedProducts(updatedProducts);
  };

  const removeFromCart = (productId) => {
    const updatedProducts = selectedProducts.filter((p) => p.id !== productId);
    setSelectedProducts(updatedProducts);
  };

  const getTotalCost = () => {
    return selectedProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((product) => product.category === category);
    setDisplayedProductCount(filteredProducts.length);
  };

  const selectProduct = async (productId) => {
    const product = await UseSingleProductData(productId);
    setSelectedProduct(product);
  };

  console.log(selectProduct);

  const contextValues = {
    loggedIn,
    setLoggedIn,
    selectedProducts,
    setSelectedProducts,
    displayedProductCount,
    setDisplayedProductCount,
    category,
    setCategory,
    addToCart,
    removeFromCart,
    getTotalCost,
    handleCategoryChange,
    filteredProducts,
    selectedProduct,
    selectProduct,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export { AppContext, AppProvider };
