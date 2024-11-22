import items from "./items";
import { Item } from "./types";
import "./styles.css";

interface ShoppingItemsProps {
  countValue?: number;
  setCountValue?: React.Dispatch<React.SetStateAction<number>>;
  cart: Array<Item>;
  setCart: React.Dispatch<React.SetStateAction<Array<Item>>>;
}

function ShoppingItems({
  countValue,
  setCountValue,
  cart,
  setCart,
}: ShoppingItemsProps) {
  const handleAddToBasket = (item: Item) => {
    // Increment the count
    if (setCountValue && countValue !== undefined) {
      setCountValue(countValue + 1);
    }

    // Add the item to the cart array
    setCart([...cart, item]);
  };

  return (
    <div className="item-container">
      {Object.values(items).map((child) => (
        <div key={child.id} className="card-component">
          <img src={child.url} alt={`Image of item ${child.id}`} />
          <p>Item {child.name}</p>
          <p>Price: £{child.price}</p>
          <button onClick={() => handleAddToBasket(child)}>
            Add to basket
          </button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingItems;
