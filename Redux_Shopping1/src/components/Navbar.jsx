import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const quantity = useSelector((store) => store.cart.quantity);
  return (
    <nav className="flex justify-between bg-emerald-600 text-white p-4 shadow-md  ">
      <h3 className="font-bold text-xl">Redux shopping</h3>
      <div className="icon relative">
        <ShoppingCartIcon className="h-8" />
        <div className="rounded-full text-white px-2 absolute top-0 -right-3 text-center bg-red-600 ">
          {quantity}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
