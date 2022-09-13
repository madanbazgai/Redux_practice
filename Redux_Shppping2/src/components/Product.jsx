import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import cartActions from "../store/cartSlice";

const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(
      cartActions.actions.addToCart({
        name,
        id,
        price,
      })
    );
  };
  return (
    <div className=" shadow-md text-center p-3">
      <img className="h-20 w-full rounded-md mb-3 " src={imgURL} alt={name} />
      <h2 className="font-bold">{name}</h2>
      <p>$ {price}</p>
      <button
        onClick={addToCart}
        className=" bg-slate-500 mt-2 text-white px-3 py-2 rounded-md "
      >
        Add to cart
      </button>
    </div>
  );
};
export default Product;
