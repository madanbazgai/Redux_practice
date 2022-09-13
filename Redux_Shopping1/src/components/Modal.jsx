import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
   
      <div className="text-emerald-600 border-emerald-600 shadow-lg bg-white font-bold absolute top-1/3 left-1/4 z-10 h-60 flex flex-col justify-between items-end  rounded-2xl p-10">
      <h4 className="text-lg">Remove all items from your shopping cart </h4>
      <div>
        <button className="text-white bg-emerald-600 rounded-md px-2 py-1 mr-3
"
          onClick={() => {
            dispatch(clearCart());
            dispatch(closeModal());
          }}
        >
          Confirm
        </button>
        <button className="text-white bg-emerald-600 rounded-md px-2 py-1"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default Modal;
