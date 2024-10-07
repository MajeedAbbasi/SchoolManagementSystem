import React from "react";
import adminpic from "../../image/admin/adminpic.png";
import { GiGraduateCap } from "react-icons/gi";
import { FaGlobeEurope } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";

const Header = () => {
  //   console.log(adminpic);
  return (
    <>
      <div className="  header flex z-10  bg-white fixed  pt-2  h-12 w-full">
        <div className="text-gray-600 ml-3 mt-[-2px]">
          <GiGraduateCap className="h-10 w-8 " />
        </div>
        <div className=" mt-1 text-gray-600 hidden lg:block">
          <b className="text-black">Welcom to Majeed's</b> School Management
          System
        </div>
        <div className="text-black ml-3">
          <div className="relative ">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="bg-gray-100 h-8 px-5 pr-10 rounded-full text-sm focus:outline-none lg:w-[400px] w-[100px] ml-1"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4  w-4 fill-current mt-[-3px]"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-black rounded-full border-black flex ml-2 mt-2">
          <div className="bg-[#e9e4e4] my-auto -mt-1.5 p-1.5 rounded-full mx-auto text-gray-600 ">
            <FaGlobeEurope />
          </div>
          <div className="mt-[-4px] ">
            <select
              name="cars"
              id="cars "
              className="rounded-full border-black mr-1 cursor-pointer"
            >
              <option value="volvo">English</option>
              <option value="saab">Urdu</option>
            </select>
          </div>
        </div>
        <div className="h-6 w-[1px] bg-slate-400 mt-1"></div>
        <div className="flex gap-3 ml-3 mt-2 ">
          <div className="bg-[#e9e4e4] my-auto -mt-1.5 p-1.5 rounded-full mx-auto text-gray-600">
            <CiMail className="" />
          </div>
          <div className="bg-[#e9e4e4] my-auto -mt-1.5 p-1.5 rounded-full mx-auto text-gray-600">
            <FaRegBell />
          </div>
        </div>
        <div className="h-6 w-[1px] bg-slate-400 mt-1 ml-3"></div>
        <div className="h-8 w-30 lg:ml-6 ml-4 flex">
          <img className="rounded-full" src={adminpic} alt="" />
          <div className=" ml-2 lg:block hidden">
            <p className="text-[13px] font-bold ">Ab Majeed </p>
            <p className="absolute -mt-1">admin</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
