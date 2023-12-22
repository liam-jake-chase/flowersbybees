import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteCart: () => {},
  getTotalCost: () => {},
  getCartQuantity: () => {},
});

export const Cartprovider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const getCartQuantity = () => {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addOneToCart = (id) => {
    const quantity = getCartQuantity(id);

    if (quantity === 0) {
      setCartItems([
        ...cartItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  };

  const removeOneFromCart = () => {
    const quantity = getCartQuantity(id);

    if (quantity === 1) {
      deleteCart(id);
    } else {
      setCartItems(
        cartItems.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  };

  const deleteCart = (id) => {
    setCartItems((cartItems) =>
      cartItems.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  };

  const getTotalCost = () => {
    let totalCost = 0;
  }

  const contextValue = {
    items: cartItems,
    addOneToCart,
    removeOneFromCart,
    deleteCart,
    getTotalCost,
    getCartQuantity,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
