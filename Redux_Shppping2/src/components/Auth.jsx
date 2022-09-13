import { useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <div className=" mt-20 max-w-md  mx-auto  bg-slate-300 py-10">
      <h1 className="text-xl font-bold text-center">Login</h1>
      <form className="flex flex-col p-5" onSubmit={handleSubmit}>
        <label htmlFor="id">Id: </label>
        <input className="h-10 rounded " type="text" name="id" id="id" />
        <label htmlFor="password">Password: </label>
        <input
          className="h-10 rounded"
          type="password"
          name="password"
          id="password"
        />
        <button
          className=" bg-gray-500 text-white px-3 py-2 rounded-md mt-3"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default Auth;
