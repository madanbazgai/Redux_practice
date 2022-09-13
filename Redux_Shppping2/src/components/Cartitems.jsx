import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul className="flex flex-col mb-2 ">
        {cartItems.map((item) => (
          <li className="" key={item.id}>
            <CartItem
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              name={item.name}
              total={item.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
