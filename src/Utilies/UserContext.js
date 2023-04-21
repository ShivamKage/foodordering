import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy",
    email: "Dummy@gmail.com",
  },
});
export default UserContext;
