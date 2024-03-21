import React from "react";
import Card from "../UI/Card";
const CartItem = (props) => {
  return (
    <Card>
      <header>Prasadam</header>
      <div>
        <p>Total Amount <h3>Rs.150</h3> </p>
      </div>
      <footer>
        <button>Close</button>
        <button>Order</button>
      </footer>
    </Card>
  );
};

export default CartItem;
