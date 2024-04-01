import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  // const removeItemHandler = (id) => {
  //   cartctx.removeItem(id);
  // };

  // const addItemHandler = (item) => {
  //   cartctx.addItem(item);
  //   // const index = cartctx.items.findIndex((obj) => obj.id === item.id);
  //   // if (index >= 0) {
  //   //   const updatedItems = [...cartctx.items];
  //   //   updatedItems[index].quantity += parseInt(item.quantity);
  //   //   cartctx.updateQuantity(updatedItems[index]);
  //   // } else {
  //   //   cartctx.addItem({ ...item, quantity: item.quantity++ });
  //   // }
  // };
const handleIncrement = (id)=>{
  cartctx.changeQuantity(id,1)
}
const handleDecrement = (id)=>{
  cartctx.changeQuantity(id,-1)
}

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <>
          <li key={item.id}>
            {item.name} Rs.{item.price} {item.quantity}
            <button onClick={() => handleDecrement(item.id)}>-</button>
            <button onClick={() => handleIncrement(item.id)}>+</button>
          </li>
          <hr />
        </>
      ))}
    </ul>
  );

  const total = cartctx.items.reduce(
    (acc, curr) => (acc = acc + curr.quantity * curr.price),
    0
  );
  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.{total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
