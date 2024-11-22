import React from "react";
import "./styles.css";
import { Item } from "../ShoppingItems/types";

interface BasketOverlayProps {
  cart: Item[];
  isVisible: boolean;
  onClose: () => void;
}

const BasketOverlay = ({ cart, isVisible, onClose }: BasketOverlayProps) => {
  return (
    <div className={`overlay ${isVisible ? "show" : ""}`}>
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
                </p>
              </li>
            ))}
          </ul>
        )}
        <p>Total: £{cart.reduce((total, item) => total + item.price, 0)}</p>
      </div>
    </div>
  );
};

export default BasketOverlay;
