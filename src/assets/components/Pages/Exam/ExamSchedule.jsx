import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
const ExamSchedule = () => {
  const [hide, setHide] = useState(false);
  const [showhidden, setShowhidden] = useState(false);

  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] animate__animated animate__fadeInLeft z-0">
        <div className=" h-0 lg:w-[300px]  lg:mt-16 lg:ml-14 bg-white ">
          <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">Add New Exam</h1>
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
          >
            <form>
              <div className="ml-8 mt-4 flex flex-col">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Exam Name
                  </label>
                  <input
                    required
                    type="text"
                    name="title"
                    // value={noticeData.title}
                    // onChange={handleChange}
                    className="w-56 h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Type
                  </label>
                  <select
                    required
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                    name="status"
                    // value={paymentData.status}
                    // onChange={handleChange}
                  >
                    <option value="">Please Select Type</option>
                    <option value="Paid">Class Test</option>
                    <option value="Due">Annual Test</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Class
                  </label>
                  <select
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                    name="class"
                    required
                    // value={formData.class}
                    // onChange={handleChange}
                  >
                    <option className="hover:bg-gray-700" value="">
                      Please Select Class
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Section
                  </label>
                  <select
                    required
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                    name="section"
                    // value={formData.section}
                    // onChange={handleChange}
                  >
                    <option value="">Please Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 w-28 mt-6 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" h-0 lg:w-[730px]  lg:mt-16 lg:ml-8 bg-white ">
          <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">All Exam Scedule</h1>
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

export default ExamSchedule;
