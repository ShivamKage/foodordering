import { useContext, useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { ALL_RESTURANT_URL } from "../Constants";
import UserContext from "../Utilies/UserContext";

const filterData = (resturants, searchText) => {
  const data = resturants.filter((resturant) =>
    resturant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return data;
};

const Body = () => {
  const { user, setUser } = useContext(UserContext);
  const [allResturants, setAllResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    getResturant();
  }, []);
  async function getResturant() {
    const data = await fetch(ALL_RESTURANT_URL);
    const json = await data.json();
    setAllResturants(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(json);
    setFilteredResturants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return allResturants.length === 0 ? (
    <>
      <Shimmer />
    </>
  ) : (
    <>
      <div className="bg-pink-100 p-2 m-2">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-cyan-300 ml-2 hover:bg-sky-400"
          onClick={() => {
            const data = filterData(allResturants, searchText);
            setFilteredResturants(data);
          }}
        >
          Search
        </button>
        <input
          className="ml-3"
          placeholder="Name"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
        <button
          className="bg-cyan-300 ml-2 hover:bg-sky-400"
          onClick={() => setUser({ ...user, name: userName })}
        >
          Update Name
        </button>
        <input
          className="ml-3"
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
        ></input>
        <button
          className="bg-cyan-300 ml-2 hover:bg-sky-400"
          onClick={() => setUser({ ...user, email: userEmail })}
        >
          Update Email
        </button>
      </div>
      <div className="flex flex-wrap">
        {!filteredResturants.length === 0 ? (
          <h1>No Resturant Found !!!!!</h1>
        ) : (
          filteredResturants.map((resturantList) => (
            <Link
              to={"/resturant/" + resturantList.data.id}
              key={resturantList.data.id}
            >
              <ResturantCard {...resturantList.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
