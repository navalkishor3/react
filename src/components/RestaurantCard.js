import { CDN_URL } from "../utils/constant";
import { Link } from "react-router-dom";
const RestaurantCard = (prop) => {
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  let { name, cuisines, avgRatingString, sla, cloudinaryImageId, id } =
    prop.resData.info;
  return (
    <Link to={"/restaurant/" + id}>
      <div className="res-card" style={styleCard}>
        <img className="res-logo" alt="" src={CDN_URL + cloudinaryImageId} />
        <h3>{id}</h3>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString}</h4>
        <h4>{sla.slaString}</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
