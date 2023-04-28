import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../Utilies/useOnline";
import UserContext from "../Utilies/UserContext";

const Title = () => {
  return (
    <a href="/foodordering/">
      <img
        className="w-24 p-1"
        alt="Logo"
        src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
      />
    </a>
  );
};
const Header = () => {
  const cart = useSelector((store) => store.cart.items);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between border-2">
      <Title />

      <div className="self-center">
        <ul className="flex m-4 p-">
          <li className=" ml-3 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-3 hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="ml-3 hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="ml-3 hover:underline">
            <Link to="/Instamart">InstaMart</Link>
          </li>
          <li className="ml-3 hover:underline">
            <Link to="/Cart">Cart-{cart.length}</Link>
          </li>
          <div className="ml-4 flex">
          <h1>Hi,{user.name} </h1>
          {!isOnline ? <h2> , is Offline🔴</h2> : <h2> , is Onine🟢</h2>}
        </div>
        </ul>
        
      </div>
    </div>
  );
};

export default Header;
