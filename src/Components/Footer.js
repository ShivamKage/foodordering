import { useContext } from "react";
import UserContext from "../Utilies/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h1 className="text-2xl bold border p-2 m-2 bg-pink-100">
      By-{user.name}({user.email})
    </h1>
  );
};

export default Footer;
