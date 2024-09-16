import { LOGO_URL } from "../utils/constant";
// import LOGO from "../../images/download.png";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [clickbuttonName, setClickbuttonName] = useState("Login");
  const onLoginClick = () => {
    clickbuttonName === "Login"
      ? setClickbuttonName("Logout")
      : setClickbuttonName("Login");
  };

  const data = useContext(UserContext);
  // console.log(data);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    //  console.log("in useEffect of header component useEffect");
  }, [clickbuttonName]);

  /// Subscribing to Store Selector
  const carItems = useSelector((store) => store.cart.items);
  // console.log(carItems);

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg sm:bg-gray-200">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Status: {onlineStatus ? "online" : "offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>
            <Link to="/cart"> Cart ({carItems.length} items)</Link>
          </li>
          <button className="login mx-3" onClick={onLoginClick}>
            {clickbuttonName}
          </button>
          <li className="font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
