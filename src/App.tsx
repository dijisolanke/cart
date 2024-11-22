import { useState, useEffect } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import ShoppingItems from "./Components/ShoppingItems";
import BasketOverlay from "./Components/BasketOverlay";
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

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    localStorage.setItem("itemCount", JSON.stringify(count));
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [count, cart]);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <>
      <Cart
        itemCount={count}
        toggleOverlay={toggleOverlay} // Passing the toggle function to Cart
      />
      <BasketOverlay
        cart={cart}
        isVisible={isOverlayVisible}
        onClose={toggleOverlay} // Passing the function to close the overlay
      />
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

// import { useState, useEffect } from "react";
// import "./App.css";
// import Cart from "./Components/Cart";
// import ShoppingItems from "./Components/ShoppingItems";
// import { Item } from "../src/Components/ShoppingItems/types";

// function App() {
//   const [count, setCount] = useState<number>(() => {
//     const savedCount = localStorage.getItem("itemCount");
//     return savedCount ? JSON.parse(savedCount) : 0;
//   });

//   const [cart, setCart] = useState<Item[]>(() => {
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("itemCount", JSON.stringify(count));
//     localStorage.setItem("cartItems", JSON.stringify(cart));
//   }, [count, cart]);

//   return (
//     <>
//       <Cart itemCount={count} />
//       <ShoppingItems
//         countValue={count}
//         setCountValue={setCount}
//         cart={cart}
//         setCart={setCart}
//       />
//     </>
//   );
// }

// export default App;
