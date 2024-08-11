// src/pages/User/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      );
    });
  };

 

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 50 : 0; // Example: fixed shipping cost
  };

  const calculateCouponDiscount = () => {
    return 40; // Example: fixed coupon discount
  };

  const calculateOrderTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = calculateShipping();
    const couponDiscount = calculateCouponDiscount();
    return subtotal + shipping - couponDiscount;
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  
    calculateSubtotal,
    calculateShipping,
    calculateCouponDiscount,
    calculateOrderTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};


