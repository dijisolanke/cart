import items from "./items";
import "./styles.css";

interface ShoppingItemsProps {
  countValue?: number;
  setCountValue?: React.Dispatch<React.SetStateAction<number>>;
}

function ShoppingItems({ countValue, setCountValue }: ShoppingItemsProps) {
  const handleAddToBasket = () => {
    if (setCountValue && countValue !== undefined) {
      setCountValue(countValue + 1);
    }
  };

  return (
    <div className="item-container">
      {Object.values(items).map((child) => (
        <div key={child.id} className="card-component">
          <img src={child.url} alt={`Image of item ${child.id}`} />
          <p>Item {child.name}</p>
          <p>Price: £{child.price}</p>
          <button onClick={handleAddToBasket}> Add to basket</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingItems;
