import React, { useEffect, useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { setView, setUpdate } from "../../../Slices/ThrActionSlice";
import { useDispatch } from "react-redux";
const AllTeachers = () => {
  const [searchValue, setSearchValue] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    let storeddata = JSON.parse(localStorage.getItem("teacherData"));
    setData(storeddata);
  }, [data]);
  const [showhidden, setShowhidden] = useState(false);
  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const dispatch = useDispatch();
  const handleUpdate = (uniqueid) => {
    let latestData = storeddata.filter((item) => item.uniqueid == uniqueid);
    dispatch(setUpdate(latestData[0]));
  };
  const handleDelete = (uniqueid) => {
    setData((prev) => {
      const updatedData = prev.filter((item) => item.uniqueid !== uniqueid);
      localStorage.setItem("teacherData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  const HandleView = (uniqueid) => {
    let latestData = data.filter((item) => item.uniqueid == uniqueid);

    dispatch(setView(latestData));
  };
  const handleClear = () => {
    localStorage.clear("teacherData");
  };
  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div
        // style={{ display: close ? "none" : "block" }}
        className=" h-0 lg:w-[1080px]  lg:mt-16 lg:ml-14 bg-white "
      >
        <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">All Teachers</h1>
          <div className="flex lg:mr-1">
            <div className="flex -mt-[1px]  ">
              <div className=" ">
                <input
                  type="search"
                  name="search"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  placeholder="Type Name..."
                  className="bg-gray-100 h-6 px-5 rounded-full text-sm focus:outline-none lg:w-[150px] w-[100px] ml-1 font-semibold text-[11px]"
                />
              </div>
            </div>
            <button
              className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px] "
              onClick={() => setSearch(searchValue)}
            >
              Search
            </button>
            <button
              className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px] "
              onClick={handleClear}
            >
              Clear All
            </button>
            {showhidden ? (
              <IoIosArrowForward
                className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                onClick={HideShow}
              />
            ) : (
              <IoIosArrowDown
                className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                onClick={HideShow}
              />
            )}
            <TfiReload
              className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1"
              onClick={() => setSearchValue("")}
            />
            <IoClose
              className="text-red-500 cursor-pointer h-7 w-7 ml-3"
              // onClick={HandleClose}
            />
          </div>
        </div>
        <hr />
        <div className="h-8 flex pt-1 lg:h-8 font-semibold bg-white pl-2 text-sm">
          <input type="checkbox" name="" />
          <div className="flex gap-6 ml-3 mt-1">
            <p>ID</p>
            <p>Photo</p>
            <p className="w-28">Teacher Name</p>
            <p>Gender</p>
            <p className="w-20">Subject</p>
            <p>Class</p>
            <p>Section</p>
            <p className="w-28 ">Address</p>
            <p className=" overflow-hidden w-[100px] ">Mobile</p>
            <p className=" w-[155px] ">Email</p>
            <p className=" ">Action</p>
          </div>
        </div>
        <hr />
        <div
          style={{
            height: showhidden ? "0" : "470px",
          }}
          className="lg:h-[520px]  bg-white transition-all duration-[1000ms] overflow-hidden"
        >
          {data
            ? data
                .filter((e) => {
                  return e.teacherName
                    .toUpperCase()
                    .includes(search.toUpperCase());
                })
                .map((e, key) => {
                  return (
                    <div key={e.uniqueid}>
                      <div className="flex font-semibold h-8 py-1" key={key}>
                        <input className="ml-2" type="checkbox" name="" />
                        <div className="flex flex-row gap-6 ml-3 pt-1 text-[12px]">
                          <p className=" w-7">{e.ID}</p>
                          <img
                            className=" h-6 w-6 rounded-full -mt-1"
                            src={e.TeacherImg}
                            alt=""
                          />
                          <p className=" text-[12px] ml-3 w-28 overflow-hidden">
                            {e.teacherName}
                          </p>
                          <p className=" w-6 mr-2">{e.gender}</p>
                          <p className="text-[12px] ml-4  w-20 overflow-hidden">
                            {e.subject}
                          </p>
                          <p className="ml-4">{e.class}</p>
                          <p className="ml-6">{e.section}</p>
                          <p className="ml-6 w-28  overflow-hidden">
                            {e.presentAddress}
                          </p>

                          <p className=" w-[100px]  overflow-hidden">
                            {e.phoneNumber}
                          </p>
                          <p className=" w-[160px] overflow-hidden ">
                            {e.email}
                          </p>
                          <div className="flex gap-2  mr-2 w-[70px]">
                            <NavLink to="/teachers/detail">
                              <FaEye
                                onClick={() => HandleView(e.uniqueid)}
                                className="h-5 w-5 -mt-[1px] text-red-500 cursor-pointer"
                              />
                            </NavLink>
                            <NavLink to="/teachers/form">
                              <FaEdit
                                onClick={() => handleUpdate(e.uniqueid)}
                                className="h-4 w-4 text-green-500 cursor-pointer"
                              />
                            </NavLink>
                            <MdDelete
                              className="h-5 w-5 -mt-[1px] text-red-500 cursor-pointer"
                              onClick={() => handleDelete(e.uniqueid)}
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default AllTeachers;
