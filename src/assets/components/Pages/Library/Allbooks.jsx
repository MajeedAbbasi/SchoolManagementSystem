import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUpdate } from "../../../Slices/BookSlice";
const Allbooks = () => {
  const [showhidden, setShowhidden] = useState(false);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [bookData, setBookData] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("bookData"));
    setBookData(data);
  }, []);
  const dispatch = useDispatch();
  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const handleUpdate = (uniqueid) => {
    let latestData = bookData.filter((item) => item.uniqueid == uniqueid);
    dispatch(setUpdate(latestData[0]));
  };
  const handleDelete = (uniqueid) => {
    setBookData((prev) => {
      const updatedData = prev.filter((item) => item.uniqueid !== uniqueid);
      localStorage.setItem("bookData", JSON.stringify(updatedData));
      return updatedData;
    });
  };
  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div
        // style={{ display: close ? "none" : "block" }}
        className=" h-0 lg:w-[1080px]  lg:mt-16 lg:ml-14 bg-white "
      >
        <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">All Books</h1>
          <div className="flex lg:mr-1">
            <div className="flex -mt-[1px]  ">
              <div className=" ">
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
              className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px] "
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
              onClick={() => setSearch("")}
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
          <div className="flex gap-24 ml-3 mt-1">
            <p>ID</p>
            <p>Book Name</p>
            <p className="">Writer</p>
            <p className="">Subject</p>
            <p>Class</p>
            <p>Year</p>
            <p className=" ">Upload Date</p>
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
          {bookData
            ? bookData
                .filter((e) => {
                  return e.bookName
                    .toUpperCase()
                    .includes(search.toUpperCase());
                })
                .map((e) => {
                  return (
                    <>
                      <div className="flex font-semibold  h-8 py-1" key={e.ID}>
                        <input className="ml-2" type="checkbox" name="" />
                        <div className="flex flex-row  ml-3 pt-1 text-[12px]">
                          <p className="  w-24">{e.ID}</p>

                          <p className="w-28 ml-5 ">{e.bookName}</p>
                          <p className="ml-12 w-24">{e.writerName}</p>
                          <p className="ml-12 w-32">{e.subject}</p>
                          <p className="ml-4 w-28">{e.class}</p>
                          <p className="ml-3 w-32">{e.publishing}</p>

                          <p className="w-40 ">{e.uploadDate}</p>

                          <div className="flex gap-2">
                            <NavLink to="/library/addbook">
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
                    </>
                  );
                })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Allbooks;
