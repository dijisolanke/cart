import { Item } from "../ShoppingItems/types";

// Calculate discount for item with id "a"
export const calculateDiscountForA = (cart: Item[]): number => {
  const discountItemA = cart.find((item) => item.id === "a");
  if (discountItemA && discountItemA.quantity >= 3) {
    return Math.floor(discountItemA.quantity / 3) * 20;
  }
  return 0;
};

// Calculate discount for item with id "b"
export const calculateDiscountForB = (cart: Item[]): number => {
  const discountItemB = cart.find((item) => item.id === "b");
  if (discountItemB && discountItemB.quantity >= 2) {
    return Math.floor(discountItemB.quantity / 2) * 15;
  }
  return 0;
};

// Calculate the total price including discounts
export const calculateTotalPrice = (cart: Item[]): number => {
  const baseTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountA = calculateDiscountForA(cart);
  const discountB = calculateDiscountForB(cart);

  return baseTotal - discountA - discountB;
};
