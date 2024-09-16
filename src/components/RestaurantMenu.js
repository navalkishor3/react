import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
// import { DESKTOP_WEB_LISTING_DETAIL_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);

  // const onSetShowIndex = (i) => {
  //   setShowIndex(i);
  // };
  const { restId } = useParams();
  const restaurantInfo = useRestaurantMenu(restId);

  if (!restaurantInfo) return <Shimmer />;
  const restInfo = restaurantInfo && restaurantInfo[2]?.card?.card?.info;

  const cards = restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  let itemCards = null; // Initialize with null
  let categoriesCard = null;

  if (cards) {
    for (let i = 0; i < cards.length; i++) {
      itemCards = cards[i]?.card?.card?.itemCards;
      if (itemCards) {
        break; // Exit the loop when itemCards are found
      }
    }
  }

  categoriesCard = cards.filter((card) => {
    return card?.card?.card?.categories;
  });

  //console.log(categoriesCard);

  // console.log(restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  return (
    <div className="m-4 p-2 text-center">
      <h1 className="font-bold text-2xl">{restInfo && restInfo.name}</h1>
      <p className="font-bold ">
        {restInfo && restInfo.cuisines?.join(", ")} -{" "}
        {restInfo && restInfo.costForTwoMessage}
      </p>
      {categoriesCard.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          categoryData={category.card.card}
          showItem={index == showIndex && true}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
