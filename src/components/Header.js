import { LOGO_URL } from "../utils/constant";
import LOGO from "../../images/download.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [clickbuttonName, setClickbuttonName] = useState("Login");
  const onLoginClick = () => {
    clickbuttonName === "Login"
      ? setClickbuttonName("Logout")
      : setClickbuttonName("Login");
  };

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    console.log("in useEffect of header component useEffect");
  }, [clickbuttonName]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery"> Grocery</Link>
          </li>
          <li>Cart</li>
          <button className="login" onClick={onLoginClick}>
            {clickbuttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
