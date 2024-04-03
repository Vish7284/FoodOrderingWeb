import CartContext from "./cart-context";
import React,{useState} from "react";

const CartProvider = (props)=>{

    const [items,setItems] = useState([]);
    const addItemHandler=(item)=>{

        setItems([...items,item])
        
    };
  const changeQuantityHandler = (id, Quantity) => {
    console.log("id",id);
 const itemIndex = items.findIndex((item) => item.id === id);

console.log("itemIndex",itemIndex);
  let updatedItems = [...items];
console.log(typeof updatedItems[itemIndex].quantity);
let q = Number(updatedItems[itemIndex].quantity);
  updatedItems[itemIndex].quantity = q + Quantity;
console.log(typeof q);
  if (updatedItems[itemIndex].quantity === 0) {
    updatedItems = updatedItems.filter((item) => item.id !== id);
  }

  setItems(updatedItems);
  }

  //  const removeItemHandler = (id) => {
  //    const existingItemIndex = items.findIndex((item) => item.id === id);
  //    if (existingItemIndex === -1) {
  //      return;
  //    }

  //    const existingItem = items[existingItemIndex];
  //    if (existingItem.quantity > 1) {
  //      const updatedItems = [...items];
  //      updatedItems[existingItemIndex] = {
  //        ...existingItem,
  //        quantity: existingItem.quantity - 1,
  //      };
  //      setItems(updatedItems);
  //    } else {
  //      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  //    }
  //    console.log("item quantity remove ho gya");
  //  };


    const cartContext = {
        items:items,
        totalAmount:0,
        addItem:addItemHandler,
      //  removeItem:removeItemHandler,
        changeQuantity:changeQuantityHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;