import { useState, useEffect } from "react";
import Cart from "./Components/Cart";
import ShoppingItems from "./Components/ShoppingItems";
import BasketOverlay from "./Components/BasketOverlay";
import { Item } from "./Components/ShoppingItems/types";
import {
  initializeCart,
  initializeCount,
  syncLocalStorage,
  addToCart,
} from "./helperFunctions";

function App() {
  // Initialize state for cart and count
  const [count, setCount] = useState<number>(initializeCount);
  const [cart, setCart] = useState<Item[]>(initializeCart);

  // Overlay visibility state
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Toggle the overlay visibility
  const toggleOverlay = () => setIsOverlayVisible((prev) => !prev);

  // Sync cart and count with localStorage on changes
  useEffect(() => {
    syncLocalStorage(count, cart);
  }, [count, cart]);

  // Handle adding an item to the basket
  const handleAddToBasket = (item: Item) => {
    setCount((prev) => prev + 1); // Increment count
    setCart((prevCart) => addToCart(prevCart, item)); // Update cart
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
