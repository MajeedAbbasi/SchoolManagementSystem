import React, { useState, useEffect } from "react";
import { AiFillDashboard } from "react-icons/ai";
import { IoSettingsSharp, IoCalendarOutline } from "react-icons/io5";
import { IoIosArrowForward, IoMdPersonAdd, IoIosPeople } from "react-icons/io";
import { MdLocalLibrary, MdMenuBook, MdOutlinePayment } from "react-icons/md";
import { FaRegNoteSticky, FaPeopleRoof } from "react-icons/fa6";

import {
  FaArrowDown,
  FaArrowRight,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaMap,
} from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Buttons from "./Buttons";
import logo from "../../image/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(true);
  const [activated, setActivated] = useState(false);

  const MouseEnter = () => {
    setActive(!active);
    setActivated(true);
  };

  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === "/students/allstudents" ||
      location.pathname === "/students/detail" ||
      location.pathname === "/students/form"
    ) {
      setActivated(true);
    } else {
      setActivated(false);
    }
  }, [location]);

  return (
    <>
      <div className="bg-blue-950 lg:fixed  lg:block hidden h-full w-[200px] text-white z-10">
        <div style={{ background: "#edbd14" }} className=" h-12">
          <img className="h-12 w-36 overflow-hidden" src={logo} alt="" />
        </div>
        <Buttons name={"Dashboard"} to={"/"} Before={AiFillDashboard} />
        <hr className=" border-yellow-400" />
        <div className=" h-8 bg-blue-950 transition-all duration-[1000ms] active:h-32 hover:h-32 overflow-hidden  ">
          <li className="text-white flex bg-blue-950 w-full pl-5 pt-1 h-[5%] cursor-pointer">
            <FaPeopleRoof className="text-yellow-500 relative mr-3 mt-1" />
            <nav>
              Students
              <ul>
                <li className="list-none mt-2 flex">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/students/allstudents"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    All Students
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex text-yellow-500">
                  <IoIosArrowForward className="mt-1 " />
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                    to="/students/detail"
                  >
                    Student Detail
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/students/form"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    Admition Form
                  </NavLink>
                </li>
              </ul>
            </nav>
            {active ? (
              <FaArrowRight className="text-yellow-500 absolute mt-1 left-40" />
            ) : (
              <FaArrowDown className="text-yellow-500 absolute mt-1 left-40" />
            )}
          </li>
        </div>
        <hr className=" border-yellow-400" />
        <div className=" h-8 bg-blue-950 transition-all duration-[1000ms] active:h-28 hover:h-32 overflow-hidden ">
          <li className="text-white flex bg-blue-950 w-full pl-5 pt-1 h-[5%] cursor-pointer">
            <IoIosPeople className="text-yellow-500 relative mr-3 mt-1 " />
            <nav>
              Teachers
              <ul>
                <li className="list-none mt-2 flex">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/teachers/allteachers"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    All Teachers
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex text-yellow-500">
                  <IoIosArrowForward className="mt-1 " />
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                    to="/teachers/detail"
                  >
                    Teacher Detail
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/teachers/form"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    Teacher Form
                  </NavLink>
                </li>
              </ul>
            </nav>
            {active ? (
              <FaArrowRight className="text-yellow-500 absolute mt-1 left-40" />
            ) : (
              <FaArrowDown className="text-yellow-500 absolute mt-1 left-40" />
            )}
          </li>
        </div>
        <hr className=" border-yellow-400" />
        <Buttons name={"Parents"} to={"/parents"} Before={IoMdPersonAdd} />
        <hr className=" border-yellow-400" />
        <div className=" h-8 bg-blue-950 transition-all duration-[1000ms] hover:h-24 overflow-hidden cursor-pointer">
          <li className="text-white flex bg-blue-950 w-full pl-5 pt-1 h-[5%] cursor-pointer">
            <MdLocalLibrary className="text-yellow-500 relative mr-3 mt-1" />
            <nav>
              Library
              <ul>
                <li className="list-none mt-2 flex text-yellow-500">
                  <IoIosArrowForward className="mt-1 " />
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                    to="/library/allbooks"
                  >
                    All books
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/library/addbook"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    Add book
                  </NavLink>
                </li>
              </ul>
            </nav>
            {active ? (
              <FaArrowRight className="text-yellow-500 absolute mt-1 left-40" />
            ) : (
              <FaArrowDown className="text-yellow-500 absolute mt-1 left-40" />
            )}
          </li>
        </div>
        <hr className=" border-yellow-400" />
        <div className=" h-8 bg-blue-950 transition-all duration-[1000ms] hover:h-48 overflow-hidden ">
          <li className="text-white flex bg-blue-950 w-full pl-5 pt-1 h-[5%] cursor-pointer">
            <MdOutlinePayment className="text-yellow-500 relative mr-3 mt-1" />
            <nav>
              Payment
              <ul>
                <li className="list-none mt-2 flex text-yellow-500">
                  <IoIosArrowForward className="mt-1 " />
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                    to="/payment/feecollection"
                  >
                    Fee Collection
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/payment/createstudentpayment"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    Create Student Payment
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/payment/allexpenses"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    All Expenses
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/payment/addexpenses"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    Add Expenses
                  </NavLink>
                </li>
              </ul>
            </nav>
            {active ? (
              <FaArrowRight className="text-yellow-500 absolute mt-1 left-40" />
            ) : (
              <FaArrowDown className="text-yellow-500 absolute mt-1 left-40" />
            )}
          </li>
        </div>
        <hr className=" border-yellow-400" />
        <Buttons name={"Subject"} to={"/subject"} Before={MdMenuBook} />
        <hr className=" border-yellow-400" />
        <Buttons
          name={"Class Routine"}
          to={"/routine"}
          Before={IoCalendarOutline}
        />
        <hr className=" border-yellow-400" />
        <div className=" h-8 bg-blue-950 transition-all duration-[1000ms] hover:h-24 overflow-hidden ">
          <li className="text-white flex bg-blue-950 w-full pl-5 pt-1 h-[5%] cursor-pointer">
            <FaRegNoteSticky className="text-yellow-500 relative mr-3 mt-1" />
            <nav>
              Exam
              <ul>
                <li className="list-none mt-2 flex text-yellow-500">
                  <IoIosArrowForward className="mt-1 " />
                  <NavLink
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                    to="/exam/examschedule"
                  >
                    Exam Schedule
                  </NavLink>
                </li>
                <li className="list-none mt-2 flex ">
                  <IoIosArrowForward className="mt-1 text-yellow-500" />
                  <NavLink
                    to="/exam/examgrade"
                    style={({ isActive }) => {
                      return { color: isActive ? "#ecc94b" : "white" };
                    }}
                  >
                    Exam Grade
                  </NavLink>
                </li>
              </ul>
            </nav>
            {active ? (
              <FaArrowRight className="text-yellow-500 absolute mt-1 left-40" />
            ) : (
              <FaArrowDown className="text-yellow-500 absolute mt-1 left-40" />
            )}
          </li>
        </div>
        <hr className=" border-yellow-400" />
        <Buttons name={"Notice"} to={"/notice"} Before={FaMap} />
        <hr className=" border-yellow-400" />
        <Buttons name={"Message"} to={"/message"} Before={FaRegEnvelope} />
        <hr className=" border-yellow-400" />
        <Buttons name={"Map"} to={"/map"} Before={FaMapMarkerAlt} />
        <hr className=" border-yellow-400" />
        <Buttons name={"Account"} to={"/account"} Before={IoSettingsSharp} />
        <hr className=" border-yellow-400" />
      </div>
    </>
  );
};

export default Navbar;
