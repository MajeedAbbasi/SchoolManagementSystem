import React from "react";
import { NavLink } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";
const Buttons = ({ name, to, Before }) => {
  return (
    <>
      <li className="text-white flex bg-blue-950 w-full pl-5 pt-1 h-[5%] cur">
        <Before className="text-yellow-500 relative mr-3 mt-1" />
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "#ecc94b" : "white" };
          }}
          className=" navlink"
          to={to}
        >
          {name}
        </NavLink>
        <FaArrowRight className="text-yellow-500 absolute mt-1 left-40" />
      </li>
    </>
  );
};

export default Buttons;
