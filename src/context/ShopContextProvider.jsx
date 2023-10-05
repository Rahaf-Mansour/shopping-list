import React, { useState } from "react";
import { PRODUCTS } from "../data/productsData";

export const ShopContext = React.createContext();

function getDefaultProducts() {
  let cartDefaultCounter = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cartDefaultCounter[i] = 0;
  }
  return cartDefaultCounter;
}

export default function ShopContextProvider(props) {
  const [cartItemCounter, setCartItemCounter] = useState(getDefaultProducts());

  const addOneMoreItemToCart = (itemId) => {
    setCartItemCounter((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeOneMoreItemFromCart = (itemId) => {
    setCartItemCounter((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const deleteItemFromCart = (itemId) => {
    setCartItemCounter((prev) => ({ ...prev, [itemId]: 0 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItemCounter((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItemCounter) {
      if (cartItemCounter[item] > 0) {
        let foundItem = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItemCounter[item] * foundItem.productPrice;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItemCounter,
    addOneMoreItemToCart,
    removeOneMoreItemFromCart,
    deleteItemFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
