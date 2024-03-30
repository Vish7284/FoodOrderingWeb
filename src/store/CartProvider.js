import CartContext from "./cart-context";
import React,{useState} from "react";

const CartProvider = (props)=>{

    const [items,setItems] = useState([]);
    const addItemHandler=(item)=>{

        setItems([...items,item])
        
    };
    
  const updateItemQuantity = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log("Quantity updated ho gya");
  };

   const removeItemHandler = (id) => {
     const existingItemIndex = items.findIndex((item) => item.id === id);
     if (existingItemIndex === -1) {
       return;
     }

     const existingItem = items[existingItemIndex];
     if (existingItem.quantity > 1) {
       const updatedItems = [...items];
       updatedItems[existingItemIndex] = {
         ...existingItem,
         quantity: existingItem.quantity - 1,
       };
       setItems(updatedItems);
     } else {
       setItems((prevItems) => prevItems.filter((item) => item.id !== id));
     }
     console.log("item quantity remove ho gya");
   };


    const cartContext = {
        items:items,
        totalAmount:0,
        addItem:addItemHandler,
        removeItem:removeItemHandler,
        updateQuantity:updateItemQuantity
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;