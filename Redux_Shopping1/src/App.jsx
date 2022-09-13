import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="text-4xl font-bold h-screen grid place-items-center">
        <h3>Loading.....</h3>
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto ">
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}

export default App;
