import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = (prop) => {
  //console.log(prop.dummyDataForPropDrill);
  const addButton = prop.addButton;
  return (
    <div>
      {prop.items.map((item, i) => {
        const dispatch = useDispatch();
        const handleAddItem = (item) => {
          //dispatch a action
          dispatch(addItem(item));
        };
        return (
          <div
            data-testid="foodItems"
            key={item.card.info.id + "_" + i}
            className="p-1 m-1  border-gray-200 border-b-2 text-left flex"
          >
            {/* {console.log(prop.parent + " " + item.card.info.id + "_" + i)} */}
            <div className="w-9/12">
              <div className="py-2">
                <div>{item.card.info.name}</div>
                <div>
                  ₹{" "}
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
                </div>
              </div>
              <p className="text-sm ">{item.card.info.description}</p>
            </div>
            <div className="w-3/12">
              <div className="absolute">
                {addButton && (
                  <button
                    className="p-1 bg-black text-white m-auto mx-11 mb-3 rounded-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                )}
              </div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-32 m-2"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
