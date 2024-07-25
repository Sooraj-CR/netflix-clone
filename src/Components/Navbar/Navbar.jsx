import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useState } from "react";
import { logout } from "../../firebase";

function Navbar() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "navbar navbar-bg" : "navbar"}>
      <div className="navbar-left">
        <img src={logo} alt="netflix logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="search icon" className="icon" />
        <p>Children</p>
        <img src={bell_icon} alt="bell icon" className="icon" />
        <div className="navbar_profile">
          <img src={profile_img} alt="profile" className="profile" />
          <img src={caret_icon} alt="caret" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign out from Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
