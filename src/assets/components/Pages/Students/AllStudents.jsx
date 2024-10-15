import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setUpdate, setView } from "../../../Slices/StdActionSlice";
const AllStudents = () => {
  const [showhidden, setShowhidden] = useState(false);
  const [close, setClose] = useState(false);

  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [formData, setFormData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("formData");

    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  const handleSearch = () => {
    setSearch(searchValue);
  };

  const handleClear = () => {
    setClear(() => {
      localStorage.clear("formData");
      return true;
    });
  };

  const handleView = (uniqueid) => {
    let latestData = formData.filter((item) => item.uniqueid == uniqueid);
    console.log(latestData);
    dispatch(setView(latestData));
  };
  const handleDelete = (uniqueid) => {
    setFormData((prev) => {
      const updatedData = prev.filter((item) => item.uniqueid !== uniqueid);
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  const handleUpdate = (uniqueid) => {
    let latestData = formData.filter((item) => item.uniqueid == uniqueid);
    dispatch(setUpdate(latestData[0]));
  };

  return (
    <div className="bg-gray-300 lg:h-full flex lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div
        style={{ display: close ? "none" : "block" }}
        className="h-0 lg:w-[1080px] lg:mt-16 lg:ml-14 bg-white"
      >
        <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
          <h1 className="font-semibold">All Students</h1>
          <div className="flex lg:mr-1">
            <div className="flex -mt-[1px]">
              <div className="">
                <input
                  type="search"
                  name="search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Type Name..."
                  className="bg-gray-100 h-6 px-5 rounded-full text-sm focus:outline-none lg:w-[150px] w-[100px] ml-1 font-semibold text-[11px]"
                />
              </div>
            </div>
            <button
              className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px]"
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px]"
              onClick={handleClear}
            >
              Clear All
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
              onClick={() => setSearch("")}
            />
            <IoClose
              className="text-red-500 cursor-pointer h-7 w-7 ml-3"
              onClick={() => setClose(true)}
            />
          </div>
        </div>
        <hr />
        <div className="h-8 flex pt-1 lg:h-8 font-semibold bg-white pl-2 text-sm">
          <input type="checkbox" name="" />
          <div className="flex gap-6 ml-3 mt-1">
            <p>Roll</p>
            <p>Photo</p>
            <p className="w-28">Name</p>
            <p>Gender</p>
            <p className="w-24">Parent Name</p>
            <p>Class</p>
            <p>Section</p>
            <p className="w-28 overflow-hidden">Address</p>
            <p>Date of Birth</p>
            <p className="w-[155px]">Email</p>
            <p>Action</p>
          </div>
        </div>
        <hr />
        <div
          style={{ height: showhidden ? "0" : "470px" }}
          className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-hidden"
        >
          {formData && formData.length > 0
            ? formData
                .filter((e) => {
                  return e.studentName
                    .toUpperCase()
                    .includes(search.toUpperCase());
                })
                .map((e) => (
                  <div key={e.uniqueid}>
                    <div className="flex font-semibold h-8 py-1">
                      <input className="ml-2" type="checkbox" />
                      <div className="flex flex-row gap-6 ml-3 pt-1 text-[12px]">
                        <p className="w-7">{e.roll}</p>
                        <img
                          className="h-6 w-6 rounded-full -mt-1"
                          src={e.StdImg}
                          alt="student"
                        />
                        <p className="text-[12px] ml-3 w-28 overflow-hidden">
                          {e.studentName}
                        </p>
                        <p className="ml-1 w-6">{e.gender}</p>
                        <p className="text-[12px] ml-4 w-24 overflow-hidden">
                          {e.fatherName}
                        </p>
                        <p className="ml-4">{e.class}</p>
                        <p className="ml-6">{e.section}</p>
                        <p className="ml-6 w-[120px] overflow-hidden">
                          {e.presentAddress}
                        </p>
                        <p>{e.dob}</p>
                        <p className="ml-1 w-[160px] overflow-hidden">
                          {e.email}
                        </p>
                        <div className="flex gap-2 w-[70px]">
                          <NavLink to="/students/detail">
                            <FaEye
                              onClick={() => handleView(e.uniqueid)}
                              className="h-5 w-5 -mt-[1px] text-red-500 cursor-pointer"
                            />
                          </NavLink>
                          <NavLink to="/students/form">
                            <FaEdit
                              onClick={() => handleUpdate(e.uniqueid)}
                              className="h-4 w-4 text-green-500 cursor-pointer"
                            />
                          </NavLink>
                          <MdDelete
                            onClick={() => handleDelete(e.uniqueid)}
                            className="h-5 w-5 -mt-[1px] text-red-500 cursor-pointer"
                          />
                        </div>
                      </div>
                      <hr />
                    </div>
                    <hr />
                  </div>
                ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
