import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (prop) => {
  //console.log(prop.resData);
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  let { name, cuisines, avgRatingString, sla, cloudinaryImageId, id } =
    prop.resData.info;
  return (
    <Link to={"/restaurant/" + id}>
      <div
        data-testid="restCard"
        className="m-4 p-4 w-[250px] shadow-lg h-auto rounded-lg bg-gray-100 hover:bg-gray-200 min-h-[450px]"
      >
        <img
          className="res-logo rounded-lg"
          alt=""
          src={CDN_URL + cloudinaryImageId}
        />
        <h3 className="font-bold py-2 text-l">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating: {avgRatingString}</h4>
        <h4>Time: {sla.slaString}</h4>
      </div>
    </Link>
  );
};
// Highr Order Component
export const withPromptedLabel = (RestaurantCard) => {
  return (prop) => {
    // console.log(prop);
    return (
      <div>
        <label className="absolute bg-black border border-solid border-x-cyan-50 shadow-lg text-white m-4  p-1 rounded-md">
          Promoted
        </label>
        <RestaurantCard {...prop} />
      </div>
    );
  };
};

export default RestaurantCard;
