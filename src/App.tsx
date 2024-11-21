import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import ShoppingItems from "./Components/ShoppingItems";

function App() {
  const [count, setCount] = useState<number>(() => {
    const savedCount = localStorage.getItem("itemCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  useEffect(() => {
    localStorage.setItem("itemCount", JSON.stringify(count));
  }, [count]);

  return (
    <>
      <Cart itemCount={count} />
      <ShoppingItems countValue={count} setCountValue={setCount} />
    </>
  );
}

export default App;
