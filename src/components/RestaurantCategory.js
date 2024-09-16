import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = (prop) => {
  //console.log(prop);
  // const [ShowItem, setShowItem] = useState(false);
  const handleClick = () => {
    //setShowItem(!ShowItem);
    //console.log(e);
    prop.setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-2 mx-auto my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {prop.categoryData.title} (
            {prop.categoryData.categories[0].itemCards.length})
          </span>
          <span> ⬇ </span>
        </div>
        {prop.showItem && (
          <ItemList
            items={prop.categoryData.categories[0].itemCards}
            addButton={true}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
