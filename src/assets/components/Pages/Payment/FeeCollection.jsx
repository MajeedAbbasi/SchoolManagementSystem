import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const FeeCollection = () => {
  const [showhidden, setShowhidden] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  useEffect(() => {
    let feeData = localStorage.getItem("paymentData");
    console.log(feeData);
    let stdData = localStorage.getItem("formData");
    console.log(stdData);
  }, []);
  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] animate__animated animate__fadeInLeft z-0">
        <div
          // style={{ display: close ? "none" : "block" }}
          className=" h-0 lg:w-[1080px]  lg:mt-16 lg:ml-14 bg-white "
        >
          <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">Student Collection Fee Table</h1>
            <div className="flex lg:mr-1">
              <div className="flex -mt-[1px]  ">
                <div className=" ">
                  <input
                    type="search"
                    name="search"
                    // onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Type Name..."
                    className="bg-gray-100 h-6 px-5 rounded-full text-sm focus:outline-none lg:w-[150px] w-[100px] ml-1 font-semibold text-[11px]"
                  />
                </div>
              </div>
              <button
                className="bg-blue-900 h-6 px-5 pr-6 rounded-full text-sm focus:outline-none lg:w-[100px] w-[100px] ml-3 font-bold text-white text-[11px] mt-[1px] "
                // onClick={() => {
                //   setSearch(searchValue);
                //   setSearchValue("");
                // }}
              >
                Search
              </button>
              {showhidden ? (
                <IoIosArrowForward
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setShowhidden(false)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setShowhidden(true)}
                />
              )}
              <TfiReload
                className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1"
                // onClick={() => setSearch("")}
              />
              <IoClose
                className="text-red-500 cursor-pointer h-7 w-7 ml-3"
                // onClick={HandleClose}
              />
            </div>
          </div>
          <hr />
          <div className="h-8 flex  pt-1 lg:h-8 font-semibold bg-white pl-2 text-sm">
            <input type="checkbox" name="" />
            <div className="flex ml-3 mt-1">
              <p className="w-10">ID</p>
              <p className="w-10">Photo</p>
              <p className="w-24 ml-10">Name</p>
              <p className="w-24">Gender</p>
              <p className="w-28">Parents Name</p>
              <p className="w-20">Class</p>
              <p className="w-20">Section</p>
              <p className="w-20">Fee</p>
              <p className="w-20">Status</p>
              <p className="w-28">Phone</p>
              <p className="w-32">Date</p>
              <p>Action</p>
            </div>
          </div>
          <hr />
          <div
            style={{
              height: showhidden ? "0" : "470px",
            }}
            className="lg:h-[520px]  bg-white transition-all duration-[1000ms] overflow-hidden"
          >
            {paymentData ? (
              <>
                <div className="flex font-semibold h-8 py-1">
                  <input className="ml-2" type="checkbox" />
                  <div className="flex flex-row gap-6 ml-3 pt-1 text-[12px]">
                    <p className="">123</p>
                    <img
                      className="h-6 w-6 rounded-full -mt-1"
                      // src={e.StdImg}
                      alt="student"
                    />
                    <p className="text-[12px] ml-3 w-28 overflow-hidden">
                      {/* {e.studentName} */}
                      student Name
                    </p>
                    <p className=" -ml-5 w-20">
                      {/* {e.gender} */}
                      gender
                    </p>
                    <p className="text-[12px]  w-20   overflow-hidden">
                      {/* {e.fatherName} */}
                      fatherName
                    </p>
                    <p className="w-14 ">
                      {/* {e.class} */}
                      class
                    </p>
                    <p className="w-14 ">
                      {/* {e.section} */}
                      section
                    </p>
                    <p className="w-16">
                      {/* {e.section} */}
                      Fee
                    </p>
                    <p className="w-12">
                      {/* {e.section} */}
                      Status
                    </p>
                    <p className="w-28 -ml-2">
                      {/* {e.section} */}
                      +325043714
                    </p>
                    <p className="w-28  -ml-5">
                      {/* {e.section} */}
                      2024-10-04
                    </p>
                    <div className="flex gap-2 w-[70px]">
                      <NavLink to="/payment/createstudentpayment">
                        <FaEdit
                          // onClick={() => handleUpdate(e.uniqueid)}
                          className="h-4 w-4 text-green-500 cursor-pointer"
                        />
                      </NavLink>
                      <MdDelete
                        // onClick={() => handleDelete(e.uniqueid)}
                        className="h-5 w-5 -mt-[1px] text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                  <hr />
                </div>
                <hr />
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCollection;
