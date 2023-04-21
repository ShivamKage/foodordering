import { IMG_CDN_URL } from "../Constants";

const ResturantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  avgRating,
}) => {
  return (
    <div className="w-52 m-3 p-3 shadow-md bg-pink-100">
      <img alt="Pizza" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="text-2xl">{name}</h2>
      <h3 className=" break-words">{cuisines.join(",")}</h3>
      <h4 className="bg-pink-50">{costForTwoString}</h4>
      <h4 className="bg-green-400 w-10">☆{avgRating}</h4>
    </div>
  );
};

export default ResturantCard;
