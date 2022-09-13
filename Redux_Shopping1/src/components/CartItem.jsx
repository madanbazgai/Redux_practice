import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "../features/cart/cartSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex px-5 py-3 items-center justify-between drop-shadow-md border-b ">
      <img className="w-20 flex-1" src={img} alt={title} />
      <div className=" flex-[3]">
        <h4 className="font-bold text-lg text-gray-800">{title}</h4>
        <h4 className="text-sm">Total price: ${price * amount}</h4>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="bg-emerald-600 text-white font-bold px-2 py-1 mt-1 rounded-md"
        >
          Remove
        </button>
      </div>
      <div className="flex flex-col items-center flex-1">
        <button
          onClick={() => {
            dispatch(increaseQuantity(id));
          }}
          className="bg-emerald-600 text-white rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
        <p className="font-bold text-lg">{amount}</p>
        <button
          onClick={() => {
            if (amount === 0) {
              return;
            }
            dispatch(decreaseQuantity(id));
          }}
          className="bg-emerald-600 text-white rounded-full "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default CartItem;
