import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  let cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  // let clearItem = useReducer(clearCart);

  const dispatch = useDispatch();

  const handleCartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="bg-black text-white rounded-md p-2"
          onClick={handleCartClear}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h3 className="font-bold p-2 m-2">Please add items to cart</h3>
        ) : (
          <ItemList items={cartItems} addButton={false} />
        )}
      </div>
    </div>
  );
};

export default Cart;
