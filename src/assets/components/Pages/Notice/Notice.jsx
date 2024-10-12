import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
const Notice = () => {
  const [showhidden, setShowhidden] = useState(null);
  const [hide, setHide] = useState(null);
  const [stored, setStored] = useState(null);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [noticeData, setNoticeData] = useState({
    title: "",
    detail: "",
    PostedBy: "",
    date: "",
  });
  useEffect(() => {
    let storedData = localStorage.getItem("noticeData");
    setStored(JSON.parse(storedData));
  }, []);
  useEffect(() => {
    console.log(stored);
  }, [stored]);

  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const handleHideShow = () => {
    setHide(!hide);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoticeData({
      ...noticeData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let uniqueid =
      "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
    setNoticeData((prevData) => ({
      ...prevData,
      uniqueid: uniqueid,
    }));
    const existingData = JSON.parse(localStorage.getItem("noticeData")) || [];
    const updatedData = [...existingData, noticeData];
    setStored([...stored, noticeData]);
    localStorage.setItem("noticeData", JSON.stringify(updatedData));
    setNoticeData({
      title: "",
      detail: "",
      PostedBy: "",
      date: "",
    });
  };

  return (
    <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] animate__animated animate__fadeInLeft z-0">
      <div
        // style={{ display: close ? "none" : "block" }}
        className=" h-0 lg:w-[300px]  lg:mt-16 lg:ml-14 bg-white "
      >
        <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">Create a Notice</h1>
          <div className="flex lg:mr-1">
            <div className="flex -mt-[1px]  "></div>
            {hide ? (
              <IoIosArrowForward
                className="text-yellow-400 cursor-pointer h-7 w-7 ml-4 "
                onClick={handleHideShow}
              />
            ) : (
              <IoIosArrowDown
                className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                onClick={handleHideShow}
              />
            )}
            <TfiReload
              className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1"
              onClick={() =>
                setNoticeData({
                  title: "",
                  detail: "",
                  PostedBy: "",
                  date: "",
                })
              }
            />
            <IoClose
              className="text-red-500 cursor-pointer h-7 w-7 ml-3"
              // onClick={HandleClose}
            />
          </div>
        </div>
        <hr />
        <div
          style={{
            height: hide ? "0" : "400px",
          }}
          className="lg:h-[520px]  bg-white transition-all duration-[1000ms] overflow-hidden"
        >
          <form onSubmit={handleSubmit}>
            <div className="ml-8 mt-4 flex flex-col">
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  required
                  type="text"
                  name="title"
                  value={noticeData.title}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                />
              </div>
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Detail
                </label>
                <input
                  required
                  type="text"
                  name="detail"
                  value={noticeData.detail}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                />
              </div>
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Posted By
                </label>
                <input
                  required
                  type="text"
                  name="PostedBy"
                  value={noticeData.PostedBy}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                />
              </div>
              <div className="mt-5">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  value={noticeData.date}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 w-28 mt-6  bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" h-0 lg:w-[730px]  lg:mt-16 lg:ml-8 bg-white ">
        <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">Notice Board</h1>
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
                className="text-yellow-400 cursor-pointer h-7 w-7 ml-4 "
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
            <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
          </div>
        </div>
        <hr />
        <div
          style={{
            height: showhidden ? "0" : "470px",
          }}
          className="lg:h-[520px]  bg-white transition-all duration-[1000ms] overflow-auto"
        >
          <div>
            {stored ? (
              stored
                .filter((e) => {
                  return e.title.toUpperCase().includes(search.toUpperCase());
                })
                .map((e, index) => (
                  <div
                    key={index}
                    className="w-[650px] ml-4 mt-5 gap-1 flex flex-col"
                  >
                    <h1 className="font-extrabold text-[18px]">{e.date}</h1>
                    <h1 className="text-green-600">{e.title}</h1>
                    <p className="font-sans">{e.detail}</p>
                    <hr />
                  </div>
                ))
            ) : (
              <div>No Data Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
