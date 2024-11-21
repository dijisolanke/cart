import "./App.css";
import Cart from "./Components/Cart";
import ShoppingItems from "./Components/ShoppingItems";

function App() {
  return (
    <>
      <Cart itemCount={0} />
      <ShoppingItems />
    </>
  );
}

export default App;
