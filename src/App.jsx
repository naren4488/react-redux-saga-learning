import { useDispatch } from "react-redux";
import { productList } from "./redux/productAction";
import { useSelector } from "react-redux";
import { addToCart, emptyCart, removeToCart } from "./redux/action";

import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);
  const product = {
    name: "i Phone",
    category: "mobile",
    price: 10000,
    color: "red",
  };
  return (
    <div>
      <Header />
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
      <div>
        <button onClick={() => dispatch(removeToCart(product.name))}>
          Remove from Cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div>
        <button onClick={() => dispatch(productList())}>
          Call Product List
        </button>
      </div>
    </div>
  );
}

export default App;
