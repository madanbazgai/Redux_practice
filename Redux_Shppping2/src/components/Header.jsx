import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";
import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className=" shadow-md p-2 ">
      <nav className="h-10 mt-2 ">
        <ul className="flex justify-between">
          <li>
            <h2 className="font-bold text-xl">Redux Shopping App</h2>
          </li>
          <li>
            <Cart />
          </li>
          <li>
            <button
              onClick={logoutHandler}
              className="bg-slate-500 mt-2 text-white px-3 py-2 rounded-md"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
