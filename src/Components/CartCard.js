import { useDispatch } from "react-redux";
import { removeItem } from "../Utilies/cartSlice";

const CartCard = ({
  name,
  cloudinaryImageId,
  defaultPrice,
  description,
  id,
}) => {
  const dispatch = useDispatch();
  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };
  return (
    <div className="w-52 m-3 p-3 shadow-md bg-pink-100">
      <button
        className=" bg-cyan-300 ml-2 hover:bg-sky-400"
        onClick={() => removeFromCart(id)}
      >
        Remove
      </button>
      <img
        className="mt-2"
        alt="LOAING"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
          cloudinaryImageId
        }
      />
      <h2 className="text-2xl">{name}</h2>
      <h2>{description}</h2>
      <h3>Rs:{defaultPrice / 100}</h3>
    </div>
  );
};
export default CartCard;
