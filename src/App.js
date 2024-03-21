import React, { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showingCartHandler = () => {
    setCartIsShown(true);
  };

  const hidingCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
     {cartIsShown && <Cart onClose={hidingCartHandler}/>}
      <Header onShow={showingCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
