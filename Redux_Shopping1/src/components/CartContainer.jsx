import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openModal } from "../features/modal/modalSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  if (quantity < 1) {
    return (
      <section className="p-10 text-center">
        <h2 className="font-bold text-gray-800 text-xl" >Your Cart</h2>
        <h4>is currently empty.</h4>
      </section>
    );
  }

  return (
    <section className="bg-green-50">
      <header className="border-b">
        <h2 className="py-4 text-lg font-bold text-center">Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <h4 className="text-right font-bold text-xl p-3">
          Total: <span>${total.toFixed(2)}</span>
        </h4>
        <button
          onClick={() => dispatch(openModal())}
          className="border border-emerald-500 p-2 rounded-md m-3 float-right"
        >
          Clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
