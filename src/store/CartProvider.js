import CartContext from "./cart-context";
import React,{useState} from "react";

const CartProvider = (props)=>{
    
    const [items,setItems] = useState([]);
    const addItemHandler=(item)=>{

        setItems([...items,item])
        
    };

    const removeItemHandler=(id)=>{
        console.log(items,id);
       setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        console.log("Delete ho gya hai");
    };

    const cartContext = {
        items:items,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;