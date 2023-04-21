import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../Utilies/cartSlice";


const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);
  const emptyCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="flex">
        <h1 className="text-3xl">Cart Items</h1>
        <button
          className="bg-cyan-300 ml-2 p-2 hover:bg-sky-400"
          onClick={() => emptyCart()}
        >
          Clear
        </button>
      </div>
      <div className="flex">
        {cart.map((cart) => (
          <CartCard key={cart.id} {...cart} />
        ))}
      </div>
    </div>
  );
};
export default Cart;
