import React from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItems = <ul className={classes['cart-items']}>{[{ id: "c1", name: "Prasadam", amount: 2, price: 150 }].map(
    (item) => <li>{item.name}</li>)}</ul>
  return (
    <Modal onClose ={props.onClose}>
      {CartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs.500</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
