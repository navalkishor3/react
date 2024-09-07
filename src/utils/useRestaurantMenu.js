import { useState, useEffect } from "react";
import { DESKTOP_WEB_LISTING_DETAIL_URL } from "./constant";

const useRestaurantMenu = (restId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  // fetch the data
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

  return restaurantInfo;
};

export default useRestaurantMenu;
