import items from "./items";
import "./styles.css";

function ShoppingItems() {
  return (
    <div className="item-container">
      {Object.values(items).map((child, index) => (
        <div key={child.id} className="card-component">
          <img src={child.url} alt={`Image of item ${child.id}`} />
          <p>Item {child.name}</p>
          <p>Price: £{child.price}</p>
          <button onClick={() => null}> Add to basket</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingItems;
