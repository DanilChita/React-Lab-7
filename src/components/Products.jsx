import React, { useContext } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { AppContext } from "../context/AppContext";
import ProductItem from "./ProductItem";
import styled from "styled-components";

const Products = () => {
  const { filteredProducts, handleAddToCart , addToCart  } = useContext(AppContext);
  console.log(filteredProducts)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-8 py-4">
      {filteredProducts?.map((product) => (
        <TransitionGroup>
          <CSSTransition
            key={product.id}
            classNames="product-item"
            timeout={300}
          >
            <StyledProductItem>
              <ProductItem
                key={product.id}
                product={product}
                // addToCart={handleAddToCart}
                addToCart={addToCart}
              />
            </StyledProductItem>
          </CSSTransition>
        </TransitionGroup>
      ))}
    </div>
  );
};

const StyledProductItem = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Products;
