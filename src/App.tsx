import { useState, useEffect } from "react";
import Cart from "./Components/Cart";
import ShoppingItems from "./Components/ShoppingItems";
import BasketOverlay from "./Components/BasketOverlay";
import { Item } from "./Components/ShoppingItems/types";
import "./App.css";

function App() {
  // initializes a state variable for mumber of items in cart
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("itemCount") || "0")
  );

  // initializing a state variable for our cart items
  const [cart, setCart] = useState<Item[]>(() =>
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleOverlay = () => setIsOverlayVisible((prev) => !prev); // toggle boolean value between possible optons

  // Sync cart and count with localStorage on change
  useEffect(() => {
    localStorage.setItem("itemCount", JSON.stringify(count));
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [count, cart]);

  const handleAddToBasket = (item: Item) => {
    // Increment count
    setCount((prev: number) => prev + 1);

    //checks if the item is already in the cart
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Update quantity for existing item
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      // Add new item with quantity 1
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  return (
    <>
      <Cart itemCount={count} toggleOverlay={toggleOverlay} />
      <ShoppingItems
        countValue={count}
        setCountValue={setCount}
        cart={cart}
        setCart={setCart}
        handleAddToBasket={handleAddToBasket}
      />
      <BasketOverlay
        cart={cart}
        isVisible={isOverlayVisible}
        onClose={toggleOverlay}
      />
    </>
  );
}

export default App;
