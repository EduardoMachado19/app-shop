import React, { createContext, useState, ReactNode } from 'react';

interface Product {
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: Product[];
  addToCart: (item: Product) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (item: Product) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
