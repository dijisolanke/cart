import { Item } from "./Components/ShoppingItems/types";

// Initialize cart from localStorage
export const initializeCart = (): Item[] => {
  return JSON.parse(localStorage.getItem("cartItems") || "[]");
};

// Initialize count from localStorage
export const initializeCount = (): number => {
  return JSON.parse(localStorage.getItem("itemCount") || "0");
};

// Sync cart and count with localStorage
export const syncLocalStorage = (count: number, cart: Item[]) => {
  localStorage.setItem("itemCount", JSON.stringify(count));
  localStorage.setItem("cartItems", JSON.stringify(cart));
};

// Add item to the cart
export const addToCart = (cart: Item[], item: Item): Item[] => {
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    // Update quantity for existing item
    return cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // Add new item with quantity 1
  return [...cart, { ...item, quantity: 1 }];
};
