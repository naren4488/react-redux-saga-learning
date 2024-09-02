import Header from "./components/Header";
import { addToCart, emptyCart, removeToCart } from "./redux/action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const product = {
    name: "i phone 16",
    color: "red",
    price: 10000,
  };
  return (
    <>
      <Header />
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeToCart(product.name))}>
        Remove from cart
      </button>
      <button onClick={() => dispatch(emptyCart())}>Emptry cart</button>
    </>
  );
}

export default App;
