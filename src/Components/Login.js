import { useState } from "react";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const user = { username: "Shivi4264", password: "qWerty@321" };
  const [notVerified, setNotVariefied] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = () => {
    username === user.username && password === user.password
      ? setIsLoggedIn(true)
      : setNotVariefied(true);
  };
  return notVerified ? (
    <h1 className="text-4xl text-red-500">Incorrect Input</h1>
  ) : (
    <div className="ml-auto mr-auto w-60 p-6 mt-28 bg-pink-50">
      <h3 className="text-2xl mt-4">Username</h3>
      <input
        placeholder="Username"
        className="mt-2"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <h3 className="text-2xl mt-2">Password</h3>
      <input
        placeholder="Password"
        type="password"
        className="mt-2"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <div className="bg-cyan-300 mt-2 hover:bg-sky-400 w-11">
        <button onClick={() => auth()}>Login</button>
      </div>
    </div>
  );
};
export default Login;
