import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

const ExamGrade = () => {
  const [hide, setHide] = useState(false);
  const [showhidden, setShowhidden] = useState(false);

  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] animate__animated animate__fadeInLeft z-0">
        <div className=" h-0 lg:w-[300px]  lg:mt-16 lg:ml-14 bg-white ">
          <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">Add New Grade</h1>
            <div className="flex lg:mr-1">
              {hide ? (
                <IoIosArrowForward
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setHide(!hide)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setHide(!hide)}
                />
              )}
              <TfiReload
                className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1"
                // onClick={() =>
                //   setNoticeData({
                //     title: "",
                //     detail: "",
                //     PostedBy: "",
                //     date: "",
                //   })
                // }
              />
              <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
            </div>
          </div>
          <hr />
          <div
            style={{
              height: hide ? "0" : "400px",
            }}
            className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-hidden"
          ></div>
        </div>
        <div className=" h-0 lg:w-[730px]  lg:mt-16 lg:ml-8 bg-white ">
          <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">Exam Grade List</h1>
            <div className="flex lg:mr-1">
              <div className="flex -mt-[1px]">
                <div className="">
                  <input
                    type="search"
                    name="search"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Type Name..."
                    className="bg-gray-100 h-6 px-5 rounded-full text-sm focus:outline-none lg:w-[150px] w-[100px] ml-1 font-semibold text-[11px]"
                  />
                </div>
              </div>
              <button
                className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px]"
                onClick={() => {
                  setSearch(searchValue);
                  setSearchValue("");
                }}
              >
                Search
              </button>
              {showhidden ? (
                <IoIosArrowForward
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setShowhidden(!showhidden)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setShowhidden(!showhidden)}
                />
              )}
              <TfiReload
                className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1"
                // onClick={() => setSearch("")}
              />
              <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
            </div>
          </div>
          <hr />
          <div
            style={{
              height: showhidden ? "0" : "470px",
            }}
            className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-auto"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ExamGrade;
