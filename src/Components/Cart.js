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
            className="ml-2 px-3 border border-gray-100 rounded shadow-md hover:bg-gray-100"
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
