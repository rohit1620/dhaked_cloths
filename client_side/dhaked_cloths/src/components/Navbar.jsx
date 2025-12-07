import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const classA = "sm:hidden cursor-pointer";

  return (
    <div
      className="max-w-full border-2  border-black border-solid  h-12 bg-black text-white flex justify-between
      px-5 sm:px-0
    sm:justify-around items-center relative"
    >
      <div className="text-xl italic font-bold text-yellow-400">
        Dhaked-Cloths
      </div>
      <ul
        className={
          // open
          // ? "hidden sm:block sm:flex sm:gap-8  sm:items-center"
          // : "block sm:block sm:flex sm:gap-8  sm:items-center"
          `${
            open ? "hidden" : "block"
          } sm:block sm:flex sm:gap-8  sm:items-center ${
            !open
              ? " fixed h-screen w-screen bg-green-600 text-white absolute top-11 left-0 flex items-center flex-col  gap-6 pt-10 transform translate-x-0 transition-transform duration-300"
              : " fixed h-screen w-screen bg-green-600 text-white absolute top-11 left-0 flex items-center flex-col  gap-6 pt-10 transform -translate-x-full transition-transform duration-300"
          }`
        }
      >
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
      <div className="hidden sm:block">
        <FontAwesomeIcon icon={faBasketShopping} />
      </div>
      <div className={classA} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={faList} />
      </div>
    </div>
  );
};

export default Navbar;
