import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { setExpenseUpdate } from "../../../Slices/PaymentSlice";
import { useDispatch } from "react-redux";
const AllExpense = () => {
  const [showhidden, setShowhidden] = useState(false);
  const [addExpense, setAddExpense] = useState([]);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    let storeddata = JSON.parse(localStorage.getItem("addExpense")) || [];

    if (storeddata) {
      setAddExpense(storeddata);
    }
  }, []);
  const handleDelete = (uniqueid) => {
    let data = addExpense.filter((value) => {
      return uniqueid !== value.uniqueid;
    });

    localStorage.setItem("addExpense", JSON.stringify(data));
    setAddExpense(data);
  };

  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
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
                onClick={() => setSearch("")}
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
            <div className="flex gap-4 ml-3 mt-1">
              <p className="w-10">ID</p>
              <p className="w-32">Name </p>
              <p className="w-28 ml-10">Expense Type</p>
              <p className="w-24">Amount</p>
              <p className="w-28">Status </p>
              <p className="w-28">Phone</p>
              <p className="w-28">Email</p>
              <p className="w-28 ml-6">Date</p>
              <p className="w-20 -ml-6">Action</p>
            </div>
          </div>
          <hr />
          <div
            style={{
              height: showhidden ? "0" : "470px",
            }}
            className="lg:h-[520px]  bg-white transition-all duration-[1000ms] overflow-hidden"
          >
            {addExpense && addExpense.length > 0 ? (
              addExpense
                .filter((e) => {
                  return e.name.toUpperCase().includes(search.toUpperCase());
                })
                .map((e, key) => (
                  <div key={key}>
                    <div className="flex font-semibold h-8 py-1">
                      <input className="ml-2" type="checkbox" />
                      <div className="flex flex-row gap-6 ml-3 pt-1 text-[12px]">
                        <p className="w-8">123</p>
                        <p className="w-36">{e.name}</p>
                        <p className=" w-24 ml-6">{e.expensetype}</p>
                        <p className="w-28 ml-2">{e.amount}</p>
                        {e.status == "Due" ? (
                          <p className="w-12 bg-red-700 text-center border rounded-3xl text-white -ml-3 h-6 -mt-1 pt-[2px]">
                            {e.status}
                          </p>
                        ) : (
                          <p className="w-12 bg-green-700 text-center border rounded-3xl text-white -ml-9  h-6 -mt-1 pt-[2px]">
                            {e.status}
                          </p>
                        )}
                        <p className="w-28 ml-10">{e.phone}</p>
                        <p className="w-28 ">{e.email}</p>
                        <p className="w-28 ml-7">{e.date}</p>

                        <div className="flex gap-2 w-[70px] -ml-8">
                          <NavLink to="/payment/addexpenses">
                            <FaEdit
                              onClick={() =>
                                dispatch(setExpenseUpdate(e.uniqueid))
                              }
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
            ) : (
              <div className="flex font-semibold h-8 py-1">Data not found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllExpense;
