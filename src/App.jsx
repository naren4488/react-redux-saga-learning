import { addToCart } from "./redux/action";
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
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
    </>
  );
}

export default App;
