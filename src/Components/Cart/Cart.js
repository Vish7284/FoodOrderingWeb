import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartctx = useContext(CartContext);

  const removeItemHandler = (id) => {
    cartctx.removeItem(id);
  };

  const addItemHandler = (item) => {
    const index = cartctx.items.findIndex((obj) => obj.id === item.id);
    if (index !== -1) {
      cartctx.addItem({quantity: parseInt(item.quantity)+1 });
    }else{
      cartctx.addItem({ ...item, quantity: parseInt(item.quantity) });
    }
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item) => (
        <>
          <li key={item.id}>
            {item.name} Rs.{item.price} {parseInt(item.quantity)}
            <button onClick={() => removeItemHandler(item.id)}>-</button>
            <button onClick={() => addItemHandler(item)}>+</button>
          </li>
          <hr />
        </>
      ))}
    </ul>
  );
  console.log(CartItems);

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
