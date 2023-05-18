import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, quantity) => {
    const newItem = { ...item, quantity };
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id ? newItem : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.id !== itemId)
    );
  };

  const clear = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.some((cartItem) => cartItem.id === id);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};