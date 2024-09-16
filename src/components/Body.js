import RestaurantCard, { withPromptedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { DESKTOP_WEB_LISTING_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // local state variable
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [filterListOfRestaurant, setfilterListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const userInfo = useContext(UserContext);
  //console.log(userInfo);

  const RestaurantCardPromoted = withPromptedLabel(RestaurantCard);

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
      <div className="flex">
        <div className="search m-1  ml-2">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-0.7 bg-gray-100 m-4 rounded-lg border border-black border-solid"
            onClick={() => {
              //   console.log(searchText);
              let fileterListOfRestaurant = ListOfRestaurant.filter((resta) => {
                //  console.log(resta.info.name);
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
          <button
            className="px-4 py-0.7 bg-gray-100 rounded-lg border border-black border-solid"
            onClick={() => {
              let filterData = ListOfRestaurant.filter(
                (rest) => rest.info.avgRating >= 4.4
              );
              setfilterListOfRestaurant(filterData);
            }}
          >
            Top Rated Restaurants{" "}
          </button>
          <label className="mx-3">
            User Name:{" "}
            <input
              type="text"
              className="border border-black"
              value={userInfo.loggedInUser}
              onChange={(e) => userInfo.setUserInfo(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterListOfRestaurant.map((restaurant) => {
          // console.log(restaurant.info.avgRating);
          if (restaurant.info.avgRating >= 4.4) {
            return (
              <RestaurantCardPromoted
                key={restaurant.info.id}
                resData={restaurant}
              />
            );
          }
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
