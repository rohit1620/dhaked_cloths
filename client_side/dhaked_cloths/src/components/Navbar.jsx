import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <div className="max-w-full border-2 border-black border-solid  h-12 bg-black text-white flex justify-around items-center">
      <div className="text-xl italic font-bold text-yellow-400">
        Dhaked-Cloths
      </div>
      <ul className="flex gap-8  items-center">
        <Link to="/" className="">
          <li>Home</li>
        </Link>
        <Link to="/men" className="">
          <li>Men</li>
        </Link>
        <Link to="/women" className="">
          <li>Women</li>
        </Link>
        <Link to="/singup" className="">
          <li>Singup</li>
        </Link>
        <Link to="/login" className="">
          <li>Login</li>
        </Link>
        {/* <Link to="cart" className="">
          <li>Cart</li>
        </Link>
        <Link to="singlepage" className="">
          <li>Singlepage</li>
        </Link> */}
      </ul>
      <div>
        <FontAwesomeIcon icon={faBars} className="text-xl" />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faSquareWhatsapp} />
      </div>
    </div>
  );
};

export default Navbar;
