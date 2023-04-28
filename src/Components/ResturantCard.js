import { IMG_CDN_URL } from "../Constants";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  avgRating,
}) => {
  const goodrating = avgRating >= 4 ? true : false
  return (
    <div className="w-52 m-3 p-3 hover:border hover:shadow-lg">
      <img alt="Pizza" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-xl">{name}</h2>
      <h3 className="text-sm break-words">{cuisines.join(", ")}</h3>
      <h4 className="">{costForTwoString}</h4>
      <h4 className= {goodrating ? "bg-green-400 " +"w-10" : "bg-orange-600 " +"w-10"}>☆{avgRating}</h4>
    </div>
  );
};

export default ResturantCard;
