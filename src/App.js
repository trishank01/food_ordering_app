import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [cartIsShown , setCartIsshown] = useState(false)

  const showCardHandler = () => {
    setCartIsshown(true)
  }
  const hideCardHandler = () => {
    setCartIsshown(false)
  }
  return (
    <CartProvider>
     {cartIsShown && <Cart onhideCart={hideCardHandler}/>}
      <Header onShowCart={showCardHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
