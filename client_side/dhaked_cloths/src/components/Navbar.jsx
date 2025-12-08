// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
// import { faList } from "@fortawesome/free-solid-svg-icons";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const classA = "sm:hidden cursor-pointer";

//   return (
//     <div
//       className="max-w-full border-2  border-black border-solid  h-12 bg-black text-white flex justify-between
//       px-5 sm:px-0
//     sm:justify-around items-center relative"
//     >
//       <div className="text-xl italic font-bold text-yellow-400">
//         Dhaked-Cloths
//       </div>
//       <ul
//         className={
//           // open
//           // ? "hidden sm:block sm:flex sm:gap-8  sm:items-center"
//           // : "block sm:block sm:flex sm:gap-8  sm:items-center"
//           `${
//             open ? "hidden" : "block"
//           } sm:block sm:flex sm:gap-8  sm:items-center ${
//             !open
//               ? "fixed top-11 left-0 sm:static h-screen sm:h-0  w-64 sm:max-w-max   bg-black sm:bg-none  text-white   flex items-center flex-col sm:flex-row  gap-6 pt-10 sm:pt-0 transform translate-x-0   transition-transform duration-900"
//               : "fixed top-11 left-0 sm:static h-screen sm:h-0  w-64 sm:max-w-max   bg-black sm:bg-none  text-white   flex items-center flex-col sm:flex-row  gap-6 pt-10 sm:pt-0 transform -translate-x-full   transition-transform duration-900"
//           }`
//         }
//       >
//         <li>
//           <Link to="/" className="" onClick={() => setOpen(!open)}>
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link to="/men" className="" onClick={() => setOpen(!open)}>
//             Men
//           </Link>
//         </li>
//         <li>
//           <Link to="/women" className="" onClick={() => setOpen(!open)}>
//             Women
//           </Link>
//         </li>
//         <li>
//           <Link to="/singup" className="" onClick={() => setOpen(!open)}>
//             Singup
//           </Link>
//         </li>
//         <li>
//           <Link to="/login" className="" onClick={() => setOpen(!open)}>
//             Login
//           </Link>
//         </li>
//         {/* <Link to="cart" className="">
//           Cart</li>
//         </Link></li>
//         <Link to="singlepage" className="">
//           Singlepage</li>
//         </Link> */}
//       </ul>
//       <div className="hidden sm:block">
//         <FontAwesomeIcon icon={faBasketShopping} />
//       </div>
//       <div className={classA} onClick={() => setOpen(!open)}>
//         <FontAwesomeIcon icon={faList} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-black text-white flex justify-between items-center px-5 h-16 sm:justify-around">
      {/* Logo */}
      <div className="text-xl italic font-bold text-yellow-400">
        Dhaked-Cloths
      </div>

      {/* Hamburger */}
      <button className="sm:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </button>

      {/* MENU */}
      <ul
        className={`
          /* Desktop View */
          sm:flex sm:gap-8 sm:items-center sm:static sm:w-auto sm:h-auto
          sm:bg-transparent sm:flex-row sm:translate-x-0

          /* Mobile View */
          fixed top-16 left-0 h-screen w-64 bg-black text-white 
          flex flex-col gap-6 pt-10 px-6 
          transform transition-transform duration-300

          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <li onClick={() => setOpen(false)}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/men">Men</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/women">Women</Link>
        </li>

        <li onClick={() => setOpen(false)}>
          <Link to="/kids">Kids</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
