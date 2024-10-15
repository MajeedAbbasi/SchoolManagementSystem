import React, { useState, useEffect } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
const ExamSchedule = () => {
  const [hide, setHide] = useState(false);
  const [showhidden, setShowhidden] = useState(false);
  const [stored, setStored] = useState(null);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [examSchedule, setExamSchedule] = useState({
    ExamName: "",
    Type: "",
    Class: "",
    Section: "",
    date: "",
    time: "",
    uniqueid: "",
  });
  useEffect(() => {
    let storedData = localStorage.getItem("examSchedule");
    if (storedData) {
      setStored(JSON.parse(storedData));
    }
  }, [update]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExamSchedule({
      ...examSchedule,
      [name]: value,
    });
  };
  const handleDelete = (id) => {
    const filteredData = stored.filter((subject) => subject.uniqueid !== id);
    setStored(filteredData);
    localStorage.setItem("examSchedule", JSON.stringify(filteredData));
  };
  const handleUpdate = (id) => {
    let datatoUpdate = stored.filter((value) => {
      return value.uniqueid === id;
    });
    setExamSchedule((prev) => ({
      ...prev,
      ...datatoUpdate[0],
    }));
    setUpdate(true);
  };
  const updateValue = () => {
    let stored = JSON.parse(localStorage.getItem("examSchedule"));
    console.log(stored);
    let updatedData = stored.map((value) => {
      if (value.uniqueid === examSchedule.uniqueid) {
        return { ...value, ...examSchedule };
      }
      console.log("cout");
      return value;
    });
    console.log(updatedData);
    localStorage.setItem("examSchedule", JSON.stringify(updatedData));
    setUpdate(false);
    setExamSchedule({
      ExamName: "",
      Type: "",
      Class: "",
      Section: "",
      date: "",
      time: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let uniqueid =
      "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);

    const newExam = {
      ...examSchedule,
      uniqueid,
    };

    const existingData = JSON.parse(localStorage.getItem("examSchedule")) || [];
    const updatedData = [...existingData, newExam];
    setStored(updatedData);

    localStorage.setItem("examSchedule", JSON.stringify(updatedData));
    setExamSchedule({
      ExamName: "",
      Type: "",
      Class: "",
      Section: "",
      date: "",
      time: "",
    });
  };

  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] fadeInLeftToRightCustom z-0">
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
                onClick={() =>
                  setExamSchedule({
                    ExamName: "",
                    Type: "",
                    Class: "",
                    Section: "",
                    date: "",
                    time: "",
                  })
                }
              />
              <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
            </div>
          </div>
          <hr />
          <div
            style={{
              height: hide ? "0" : "480px",
            }}
            className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-hidden"
          >
            <form onSubmit={handleSubmit}>
              <div className="ml-8 mt-4 flex flex-col">
                <div className="">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Exam Name
                  </label>
                  <input
                    required
                    type="text"
                    name="ExamName"
                    value={examSchedule.ExamName}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    required
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                    name="Type"
                    value={examSchedule.Type}
                    onChange={handleChange}
                  />
                </div>

                <div className="mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Select Class
                  </label>
                  <select
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                    name="Class"
                    required
                    value={examSchedule.Class}
                    onChange={handleChange}
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
                    name="Section"
                    value={examSchedule.Section}
                    onChange={handleChange}
                  >
                    <option value="">Please Select Section</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
                <div className="flex gap-3 mt-5">
                  <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Select Time
                    </label>
                    <input
                      required
                      type="time"
                      name="time"
                      value={examSchedule.time}
                      onChange={handleChange}
                      className="w-[105px] h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                    />
                  </div>
                  <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Select Date
                    </label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={examSchedule.date}
                      onChange={handleChange}
                      className="w-[105px] h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                    />
                  </div>
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
                onClick={() => setSearch("")}
              />
              <IoClose
                className="text-red-500 cursor-pointer h-7 w-7 ml-3"
                onClick={() => localStorage.removeItem("examSchedule")}
              />
            </div>
          </div>
          <hr />
          <div className="h-8 flex pt-1 lg:h-8 font-semibold bg-white pl-3 text-sm">
            <input type="checkbox" name="" />
            <div className="flex gap-[50px] ml-3 mt-1">
              <p>Exam Name</p>
              <p>Select Type</p>
              <p className="">Select Class</p>
              <p>Section</p>
              <p className="">Time</p>
              <p className="">Date</p>
              <p className="ml-8">Action</p>
            </div>
          </div>
          <hr />
          <div
            style={{
              height: showhidden ? "0" : "480px",
            }}
            className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-auto "
          >
            {stored && stored.length > 0 ? (
              stored
                .filter((e) => {
                  return e.ExamName.toUpperCase().includes(
                    search.toUpperCase()
                  );
                })
                .map((e) => (
                  <div>
                    <div className="flex  ml-3 mt-1 ">
                      <input type="checkbox" name="" />
                      <p className="w-36 ml-3">{e.ExamName}</p>
                      <p className="w-32">{e.Type}</p>
                      <p className="w-24">{e.Class}</p>
                      <p className="w-24 ">{e.Section}</p>
                      <p className="w-16">{e.time}</p>
                      <p className="w-32">{e.date}</p>
                      <div className="flex gap-2 -ml-2  ">
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
              <div>Data not Found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamSchedule;
