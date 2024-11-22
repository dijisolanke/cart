import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import ShoppingItems from "./Components/ShoppingItems";
import { Item } from "../src/Components/ShoppingItems/types";

function App() {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem("itemCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  const [cart, setCart] = useState<Item[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("itemCount", JSON.stringify(count));
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [count, cart]);

  return (
    <>
      <Cart itemCount={count} />
      <ShoppingItems
        countValue={count}
        setCountValue={setCount}
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}

export default App;
