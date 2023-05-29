import React, { createContext, useState, useContext } from 'react';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

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

  const createOrder = async (orderData) => {
    const db = getFirestore();

    try {
      const ordersCollection = collection(db, 'orders');
      const timestamp = Timestamp.fromDate(new Date());

      const order = {
        buyer: {
          name: orderData.buyer.name,
          phone: orderData.buyer.phone,
          email: orderData.buyer.email,
        },
        items: orderData.items.map((item) => ({
          id: item.id,
          title: item.title,
          price: item.price,
        })),
        date: timestamp,
        total: orderData.total,
      };

      const newOrderRef = await addDoc(ordersCollection, order);
      const orderId = newOrderRef.id;
      console.log('Pedido criado com sucesso! ID:', orderId);
      return orderId;
    } catch (error) {
      console.error('Erro ao criar o pedido:', error);
      return null;
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clear,
        isInCart,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};