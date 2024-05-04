import { useState } from "react";

import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=200"
    />
  </a>
);

//React Component Functional
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const title = "Food villa";
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline? '🟢': '🔴'}</h1>
      {isLoggedIn == true ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
