import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import cartActions from "../store/cartSlice";

const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.actions.setShowCart());
  };
  return (
    <div className="font-bold bg-slate-500 text-white px-3 py-2 rounded-md cursor-pointer ">
      <h3 onClick={showCart}>Cart: {quantity} Items</h3>
    </div>
  );
};

export default Cart;
