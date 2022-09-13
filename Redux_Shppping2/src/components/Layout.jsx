import { useSelector } from "react-redux";
import CartItems from "./Cartitems";
import Header from "./Header";
import Products from "./Products";

const Layout = () => {
  let total = 0;
  const itemList = useSelector((state) => state.cart.itemList);
  itemList.forEach((item) => {
    total += item.price;
  });
  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <div className="flex flex-col ">
      <Header />
      <Products />
      {showCart && <CartItems />}
      <div className="text-center mx-7">
        <h3 className="font-bold mb-2">Total: ${total}</h3>
        <button className="bg-slate-500 text-white px-3 py-2 rounded-md">
          Place Order
        </button>
      </div>
    </div>
  );
};
export default Layout;
