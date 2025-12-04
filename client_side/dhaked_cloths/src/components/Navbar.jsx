import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="ul1">
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/men" className="link">
          <li>Men</li>
        </Link>
        <Link to="/women" className="link">
          <li>Women</li>
        </Link>
        <Link to="/singup" className="link">
          <li>Singup</li>
        </Link>
        <Link to="/login" className="link">
          <li>Login</li>
        </Link>
        <Link to="cart" className="link">
          <li>Cart</li>
        </Link>
        <Link to="singlepage" className="link">
          <li>Singlepage</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
