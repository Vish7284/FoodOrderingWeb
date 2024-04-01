import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
 // removeItem: (id) => {},
  changeQuantity: (id, Quantity) => {},
});

export default CartContext;