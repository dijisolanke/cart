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
          Total: £
          {cart.reduce((total, item) => total + item.price * item.quantity, 0)}
        </p>
      </div>
    </div>
  );
};

export default BasketOverlay;
