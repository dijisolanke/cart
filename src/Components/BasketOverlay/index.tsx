import React from "react";
import { Item } from "../ShoppingItems/types";
import "./styles.css";

interface BasketOverlayProps {
  cart: Item[];
  isVisible: boolean;
  onClose: () => void;
}

const BasketOverlay = ({ cart, isVisible, onClose }: BasketOverlayProps) => {
  if (!isVisible) return null;

  const calculateDiscountForA = (cart: Item[]) => {
    const discountItemA = cart.find((item) => item.id === "a"); // Apply discount to item with id "a"
    if (discountItemA && discountItemA.quantity >= 3) {
      return Math.floor(discountItemA.quantity / 3) * 20;
    }
    return 0;
  };

  // Function to calculate the discount for item B
  const calculateDiscountForB = (cart: Item[]) => {
    const discountItemB = cart.find((item) => item.id === "b"); // Apply discount to item with id "b"
    if (discountItemB && discountItemB.quantity >= 2) {
      return Math.floor(discountItemB.quantity / 2) * 15;
    }
    return 0;
  };

  const calculateTotalPrice = (cart: Item[]) => {
    //sums the prices of all items in the cart, taking their quantities into account
    const baseTotal = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    const discountA = calculateDiscountForA(cart);
    const discountB = calculateDiscountForB(cart);
    return baseTotal - discountA - discountB; //The final price is the baseTotal minus both discounts
  };

  const handleClearCart = () => {
    localStorage.clear(); // Clear all local storage
    window.location.reload(); // Refresh the page
  };

  const discountA = calculateDiscountForA(cart);
  const discountB = calculateDiscountForB(cart);

  return (
    <div className="overlay">
      <div className="overlay-content">
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>Your Basket</h2>
        {cart.length === 0 ? (
          <p>Your basket is empty</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <img src={item.url} alt={`Image of item ${item.id}`} />
                <p>
                  {item.name} - £{item.price}
                  {item.quantity > 1 && <span> x{item.quantity}</span>}
                </p>
              </li>
            ))}
          </ul>
        )}
        <p>
          Total: £{calculateTotalPrice(cart)}{" "}
          <span className={cart.length ? "" : "hide-message"}>
            (Includes discounts: £{discountA + discountB})
            <br />
            <br />
            £20 off for every 3 "A"s,
            <br />
            £15 off for every 2 "B"s
          </span>
        </p>
        <button className="clear-cart-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default BasketOverlay;
