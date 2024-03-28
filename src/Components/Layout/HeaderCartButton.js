import React,{useContext,useEffect} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/cart-context";

const HeaderCartButton =(props)=>{


    const cartctx = useContext(CartContext);
    useEffect(()=>{

    },[cartctx])
   let quantity = 0;
   cartctx.items.forEach(
     (item) => (quantity = quantity + Number(item.quantity))
   );
    return (
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>
      </button>
    );
}
export default HeaderCartButton;