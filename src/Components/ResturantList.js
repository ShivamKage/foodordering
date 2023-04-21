import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL, RESTURANT_LIST_URL } from "../Constants";
import useResturant from "../Utilies/useResturant";
import { addItem } from "../Utilies/cartSlice";
import { useDispatch } from "react-redux";

const ResturantList = () => {
  const parms = useParams();
  const restaurantdata = useResturant(RESTURANT_LIST_URL + parms.RestroId);
  const restutrantlist =
    restaurantdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  const restaurant = restaurantdata?.data?.cards[0]?.card?.card?.info;
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="ml-8 flex">
      <div className="mt-6">
        <h1 className="text-4xl">Id:{parms.RestroId}</h1>
        <img
          className="w-52"
          alt="loading "
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        ></img>
        <h3>Name: {restaurant?.name}</h3>
        <h3>Rating: {restaurant?.avgRating} star</h3>
      </div>
      <div className="m-5">
        <h1 className="text-4xl">Menu</h1>
        {Object.values(restutrantlist).map((item, index) => (
          <div key={index}>
            <h1 className=" p-2 font-bold">{item.card.card.title}</h1>
            {console.log(item)}
            {/* <h1>{item.card.card.itemCards}</h1> */}
          </div>
        ))}
        {/* {console.log(restutrantlist[1].card.card.carousel[0].title)} */}
      </div>
      {/* <div className="m-6">
      item?.card?.card?.itemCards[0]?.card?.info?.name
        <h1 className="text-4xl">Menu</h1>
        {Object.values(restaurant?.data?.menu?.items).map((items) => (
          <div key={items.id} className="flex">
            <li>{items.name}</li>
            <button
              className="ml-4 bg-cyan-300 hover:bg-sky-400"
              onClick={() => addToCart(items)}
            >
              Add
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
};
export default ResturantList;
