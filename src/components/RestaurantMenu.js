//import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { DESKTOP_WEB_LISTING_DETAIL_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  // const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { restId } = useParams();
  const restaurantInfo = useRestaurantMenu(restId);
  // console.log(restId);
  /*
  useEffect(() => {
    fetchData();
  }, []);



  const fetchData = async () => {
    const data = await fetch(DESKTOP_WEB_LISTING_DETAIL_URL + restId);
    const dataJson = await data.json();

    // console.log(dataJson?.data?.cards);
    setRestaurantInfo(dataJson?.data?.cards);

    //  console.log(restaurantInfo);
  };

    */
  //console.log(restaurantInfo[2]?.card?.card?.info);
  //   const { name, cuisines, costForTwoMessage } =
  //     restaurantInfo[2]?.card?.card?.info;
  if (!restaurantInfo) return <Shimmer />;
  const restInfo = restaurantInfo && restaurantInfo[2]?.card?.card?.info;
  const itemCards =
    restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards ||
    restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  // console.log(itemCards);
  return (
    <div className="menu">
      <h1>{restInfo && restInfo.name}</h1>
      <h5>
        {restInfo && restInfo.cuisines?.join(", ")} -{" "}
        {restInfo && restInfo.costForTwoMessage}
      </h5>

      <h2>Menu</h2>
      <ul>
        {itemCards &&
          itemCards.map((item) => {
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} - Rs{" "}
                {(item?.card?.info?.defaultPrice || item?.card?.info?.price) /
                  100}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
