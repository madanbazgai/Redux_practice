import { useDispatch } from "react-redux";
import cartActions from "./../store/cartSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();
  const incrementItem = () => {
    dispatch(
      cartActions.actions.addToCart({
        name,
        id,
        price,
      })
    );
  };

  const decrementItem = () => {
    dispatch(cartActions.actions.removeFromCart(id));
  };

  return (
    <div className="flex items-center justify-around bg-slate-600 text-white py-2 font-bold">
      <h2> {name}</h2>
      <p>${total} /-</p>
      <p>x{quantity}</p>
      <article>Total ${price}</article>
      <button
        className="px-4 py-2 bg-slate-800 rounded"
        onClick={decrementItem}
      >
        -
      </button>
      <button
        className="px-4 py-2 bg-slate-800 rounded"
        onClick={incrementItem}
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
