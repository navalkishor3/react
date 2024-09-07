import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { DESKTOP_WEB_LISTING_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterListOfRestaurant, setfilterListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DESKTOP_WEB_LISTING_URL);

    const jsonData = await data.json();
    const restaurantsList =
      jsonData?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurant(restaurantsList);
    setfilterListOfRestaurant(restaurantsList);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like ur offline. Please check your internet connection.</h1>
    );
  }

  return filterListOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);
              let fileterListOfRestaurant = ListOfRestaurant.filter((resta) => {
                console.log(resta.info.name);
                return (
                  resta.info.name
                    .toLowerCase()
                    .indexOf(searchText.toLowerCase()) !== -1
                );
              });

              setfilterListOfRestaurant(fileterListOfRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            filterData = ListOfRestaurant.filter(
              (rest) => rest.info.avgRating > 4.5
            );
            setfilterListOfRestaurant(filterData);
          }}
        >
          Top Rated Restaurants{" "}
        </button>
      </div>

      <div className="res-container">
        {filterListOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
