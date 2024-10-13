import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
const Subject = () => {
  const [showhidden, setShowhidden] = useState(null);
  const [hide, setHide] = useState(null);
  const [search, setSearch] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [update, setUpdate] = useState(false);
  const [stored, setStored] = useState(null);
  const [subjectData, setSubjectData] = useState({
    SubjectName: "",
    SubjectType: "",
    Class: "",
    SubjectCode: "",
    uniqueid: "",
  });
  useEffect(() => {
    let storedData = localStorage.getItem("subjectData");
    setStored(JSON.parse(storedData));
  }, [subjectData]);

  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const handleHideShow = () => {
    setHide(!hide);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubjectData({
      ...subjectData,
      [name]: value,
    });
  };
  const handleDelete = (id) => {
    const filteredData = stored.filter((subject) => subject.uniqueid !== id);
    setStored(filteredData);
    localStorage.setItem("subjectData", JSON.stringify(filteredData));
  };
  const handleUpdate = (id) => {
    let datatoUpdate = stored.filter((value) => {
      return value.uniqueid === id;
    });
    setSubjectData((prev) => ({
      ...prev,
      ...datatoUpdate[0],
    }));
    setUpdate(true);
    console.log(subjectData);
  };
  const updateValue = () => {
    let stored = JSON.parse(localStorage.getItem("subjectData"));
    console.log(stored);
    let updatedData = stored.map((value) => {
      if (value.uniqueid === subjectData.uniqueid) {
        console.log("object");
        return { ...value, ...subjectData };
      }
      console.log("cout");
      return value;
    });
    localStorage.setItem("subjectData", JSON.stringify(updatedData));
    setSubjectData({
      SubjectName: "",
      SubjectType: "",
      Class: "",
      SubjectCode: "",
      uniqueid: "",
    });
    setUpdate(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    let uniqueid =
      "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);

    const newSubject = { ...subjectData, uniqueid };
    const existingData = JSON.parse(localStorage.getItem("subjectData")) || [];
    const updatedData = [...existingData, newSubject];

    setStored(updatedData);
    localStorage.setItem("subjectData", JSON.stringify(updatedData));

    setSubjectData({
      SubjectName: "",
      SubjectType: "",
      Class: "",
      SubjectCode: "",
      uniqueid: "",
    });
  };

  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] animate__animated animate__fadeInLeft z-0">
        <div
          // style={{ display: close ? "none" : "block" }}
          className=" h-0 lg:w-[300px]  lg:mt-16 lg:ml-14 bg-white "
        >
          <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">Create A New Subject</h1>
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
                  setSubjectData({
                    SubjectName: "",
                    SubjectType: "",
                    Class: "",
                    SubjectCode: "",
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
                    Subject Name
                  </label>
                  <input
                    required
                    type="text"
                    name="SubjectName"
                    value={subjectData.SubjectName}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                  />
                </div>
                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Subject Type
                  </label>
                  <select
                    required
                    type="text"
                    name="SubjectType"
                    value={subjectData.SubjectType}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                  >
                    <option value="">Please Select Type</option>
                    <option value="Practical">Practical</option>
                    <option value="Theory">Theory</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Class
                  </label>
                  <select
                    required
                    type="text"
                    name="Class"
                    value={subjectData.Class}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                  >
                    <option value="">Please Select Class</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Subject Code
                  </label>
                  <input
                    required
                    type="number"
                    name="SubjectCode"
                    value={subjectData.SubjectCode}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                  />
                </div>
                {update === true ? (
                  <button
                    type="button"
                    className="px-6 py-2 w-28 mt-6  bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    onClick={updateValue}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 w-28 mt-6  bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Save
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className=" h-0 lg:w-[730px]  lg:mt-16 lg:ml-8 bg-white ">
          <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">All Subject</h1>
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
              <div className="h-8 flex pt-1 lg:h-8 font-semibold bg-white pl-2 text-sm">
                <input type="checkbox" name="" />
                <div className="flex gap-20 ml-4 mt-1">
                  <p>Subject Code</p>
                  <p>Subject Name</p>
                  <p className="">Subject Type</p>
                  <p>Class</p>
                  <p className="">Action</p>
                </div>
              </div>
              <hr />
              {stored ? (
                stored
                  .filter((e) => {
                    return e.SubjectName.toUpperCase().includes(
                      search.toUpperCase()
                    );
                  })
                  .map((e) => (
                    <div key={e.uniqueid}>
                      <div className="h-8 flex pt-1 lg:h-8 font-semibold bg-white pl-2 text-sm">
                        <input type="checkbox" name="" />
                        <div className="flex gap-20 ml-4 mt-1">
                          <p className="w-24">{e.SubjectCode}</p>
                          <p className="w-20">{e.SubjectName}</p>
                          <p className="w-20">{e.SubjectType}</p>
                          <p className="w-24">{e.Class}</p>
                        </div>
                        <div className="flex gap-2 w-[70px]">
                          <FaEdit
                            onClick={() => handleUpdate(e.uniqueid)}
                            className="h-4 w-4 text-green-500 cursor-pointer"
                          />

                          <MdDelete
                            onClick={() => handleDelete(e.uniqueid)}
                            className="h-5 w-5 -mt-[1px] text-red-500 cursor-pointer"
                          />
                        </div>
                      </div>
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
    </div>
  );
};

export default Subject;
