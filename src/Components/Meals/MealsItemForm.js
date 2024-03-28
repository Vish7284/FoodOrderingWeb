import { useContext } from "react";
import classes from "./MealsItem.module.css";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";
const MealsItemForm = (props) => {
const cartctx = useContext(CartContext)
    const addItemToCart =(event)=>{
        event.preventDefault();
        const quantity = document.getElementById("amount_" + props.id).value;
        //console.log(quantity,props.id);
        cartctx.addItem({ ...props.item, quantity: quantity });
    }
  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+Add</button>
    </form>
  );
};

export default MealsItemForm;
