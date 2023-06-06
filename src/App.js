import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UseProductData from "./hooks/UseProductData";
import GetCategoriesData from "./hooks/GetCategoriesData";
import useStatusData from "./hooks/UseStatusData";

import Header from "./components/Header";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import DebugRouter from "./components/Debug/DebugRouter";

import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import { AppProvider } from "./context/AppContext";

const App = () => {
  const categories = GetCategoriesData();
  const status = useStatusData(UseProductData());

  useEffect(() => {
    const handleLinkClick = (event) => {
      if (event.target.nodeName === "") {
        const link = event.target.getAttribute("href");
        handleLinkClick(link);
      }
    };
    document.addEventListener("click", handleLinkClick);
    return () => {
      document.removeEventListener("click", handleLinkClick);
    };
  }, []);

  return (
    <>
      <AppProvider>
        <Router>
          <DebugRouter>
            <div className="flex flex-col min-h-screen">
              <Header />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Menu categories={categories} />
                      {status === "Loading data..." ? (
                        <div className="flex justify-center items-center h-64">
                          <Loader />
                        </div>
                      ) : (
                        <Products />
                      )}
                    </>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <>
                      <ProductDetails />
                    </>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <>
                      <Cart />
                    </>
                  }
                />
                <Route path="/admin" element={<Admin />}></Route>
              </Routes>
              <Footer />
            </div>
          </DebugRouter>
        </Router>
      </AppProvider>
    </>
  );
};

export default App;

//  import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AppProvider } from "./context/AppContext";

// import UseProductData from "./hooks/UseProductData";
// import GetCategoriesData from "./hooks/GetCategoriesData";
// import useStatusData from "./hooks/UseStatusData";

// import Header from "./components/Header";
// import Menu from "./components/Menu";
// import Products from "./components/Products";
// import Footer from "./components/Footer";
// import Loader from "./components/Loader";
// import DebugRouter from "./components/Debug/DebugRouter";

// import ProductDetails from "./screens/ProductDetails";
// import Cart from "./screens/Cart";

// const App = () => {
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [selectedProducts, setSelectedProducts] = useState([]);
//   const [displayedProductCount, setDisplayedProductCount] = useState(0);
//   const [category, setCategory] = useState("all");
//   const [isLoading, setIsLoading] = useState(true);

//   const products = UseProductData(setIsLoading);
//   const categories = GetCategoriesData();
//   const status = useStatusData(products);

//   const addToCart = (product) => {
//     const updatedProducts = [...selectedProducts];
//     const existingProduct = updatedProducts.find((p) => p.id === product.id);
//     if (existingProduct) {
//       existingProduct.quantity += 1;
//     } else {
//       updatedProducts.push({ ...product, quantity: 1 });
//     }
//     setSelectedProducts(updatedProducts);
//   };

//   const removeFromCart = (productId) => {
//     const updatedProducts = selectedProducts.filter((p) => p.id !== productId);
//     setSelectedProducts(updatedProducts);
//   };

//   const getTotalCost = () => {
//     return selectedProducts.reduce((total, product) => {
//       return total + product.price * product.quantity;
//     }, 0);
//   };

//   const handleCategoryChange = (category) => {
//     setCategory(category);
//     const filteredProducts =
//       category === "all"
//         ? products
//         : products.filter((product) => product.category === category);
//     setDisplayedProductCount(filteredProducts.length);
//   };

//   useEffect(() => {
//     const handleLinkClick = (event) => {
//       if (event.target.nodeName === "") {
//         const link = event.target.getAttribute("href");
//         handleLinkClick(link);
//       }
//     };
//     document.addEventListener("click", handleLinkClick);
//     return () => {
//       document.removeEventListener("click", handleLinkClick);
//     };
//   }, []);

//   return (
//     <>
//       <AppProvider>
//         <Router>
//           <DebugRouter>
//             <div className="flex flex-col min-h-screen">
//               <Header
//                 loggedIn={loggedIn}
//                 setLoggedIn={setLoggedIn}
//                 selectedProductCount={selectedProducts.length}
//               />

//               <Routes>
//                 <Route
//                   path="/"
//                   element={
//                     <>
//                       <Menu
//                         category={category}
//                         handleCategoryChange={handleCategoryChange}
//                         displayedProductCount={displayedProductCount}
//                         categories={categories}
//                       />
//                       {status === "Loading data..." ? (
//                         <div className="flex justify-center items-center h-64">
//                           <Loader />
//                         </div>
//                       ) : (
//                         <Products
//                           products={products}
//                           category={category}
//                           setDisplayedProductCount={setDisplayedProductCount}
//                           addToCart={addToCart}
//                         />
//                       )}
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/product/:id"
//                   element={
//                     <>
//                       <ProductDetails
//                         products={products}
//                         addToCart={addToCart}
//                       />
//                     </>
//                   }
//                 />
//                 <Route
//                   path="/cart"
//                   element={
//                     <>
//                       <Cart
//                         selectedProducts={selectedProducts}
//                         removeFromCart={removeFromCart}
//                         getTotalCost={getTotalCost}
//                       />
//                     </>
//                   }
//                 />
//               </Routes>
//               <Footer />
//             </div>
//           </DebugRouter>
//         </Router>
//       </AppProvider>
//     </>
//   );
// };

// export default App;
