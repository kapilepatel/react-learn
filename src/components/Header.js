import { useState } from "react";

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

  const title = "Food villa";
  return (
    <div className="header">
      <Title />
      <h1>{title}</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn == true ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
