import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  let amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + next);
  console.log(cartData);
  return (
    <div>
      <Link to={"/"}>Go to product list page</Link>
      <h1>Cart Page</h1>
      <div className="cart-page-container">
        <table>
          <tr>
            <th>Name</th>
            <th>Color</th>
            <th>Price</th>
            <th>Brand</th>
            <th>Category</th>
          </tr>
          {cartData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{amount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>000</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
