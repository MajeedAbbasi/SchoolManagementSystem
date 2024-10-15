import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setUpdate } from "../../../Slices/ThrActionSlice";
import { NavLink } from "react-router-dom";

const AddTeacher = () => {
  const [showhidden, setShowhidden] = useState(false);
  const HideShow = () => {
    setShowhidden(!showhidden);
  };

  const [teacherData, setTeacherData] = useState({
    teacherName: "",
    class: "",
    section: "",
    gender: "",
    doj: "",
    ID: "",
    subject: "",
    religion: "",
    email: "",
    phoneNumber: "",
    presentAddress: "",
    permanentAddress: "",
    TeacherImg: null,
    uniqueid: "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherData({
      ...teacherData,
      [name]: value,
    });
  };
  let DatatoUpdate = useSelector((state) => state.tchrAction.tchrUpdate);
  console.log("this is updated data", DatatoUpdate);
  useEffect(() => {
    if (DatatoUpdate !== null) {
      setTeacherData((prev) => ({
        ...prev,
        ...DatatoUpdate,
      }));
    }
  }, [DatatoUpdate]);

  const StdImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        let uniqueid =
          "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
        setTeacherData((prevData) => ({
          ...prevData,
          TeacherImg: reader.result,
          uniqueid: uniqueid,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    console.log(typeof teacherData);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("teacherData")) || [];
    const updatedData = [...existingData, teacherData];
    console.log(typeof updatedData);
    localStorage.setItem("teacherData", JSON.stringify(updatedData));
    setTeacherData({
      teacherName: "",
      class: "",
      section: "",
      gender: "",
      doj: "",
      ID: "",
      subject: "",
      religion: "",
      email: "",
      phoneNumber: "",
      presentAddress: "",
      permanentAddress: "",
      TeacherImg: null,
      uniqueid: "",
    });
  };
  const handleUpdata = () => {
    let storedData = JSON.parse(localStorage.getItem("teacherData"));
    console.log(storedData);
    let updatedData = storedData.map((value) => {
      if (value.uniqueid === teacherData.uniqueid) {
        return { ...value, ...teacherData };
      }
      return value;
    });
    localStorage.setItem("teacherData", JSON.stringify(updatedData));
    dispatch(setUpdate(null));
  };

  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div className="h-8 ml-14 flex pt-1 lg:h-8  bg-white mt-16 w-[1080px] pl-1 ">
        <h1 className=" font-semibold  w-[300px]">Add Teacher</h1>
        <div className="flex ml-[656px]">
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
            // onClick={Reload}
          />
          <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
        </div>
        <hr />
      </div>
      <div
        className="w-[1080px] h-[503px] transition-all duration-[1000ms] overflow-hidden bg-white ml-14 mt-[0.5px] shadow-2xl "
        style={{
          height: showhidden ? "0" : "503px",
        }}
      >
        <div className="ml-5 mt-4">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-4 gap-2 ">
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Teacher Name
                </label>
                <input
                  required
                  type="text"
                  name="teacherName"
                  value={teacherData.teacherName}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>

              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Class
                </label>
                <select
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm "
                  name="class"
                  required
                  value={teacherData.class}
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
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Section
                </label>
                <select
                  required
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  name="section"
                  value={teacherData.section}
                  onChange={handleChange}
                >
                  <option value="">Please Select Section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  required
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  name="gender"
                  value={teacherData.gender}
                  onChange={handleChange}
                >
                  <option value="">Please Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Date of Joining
                </label>
                <input
                  required
                  type="date"
                  name="doj"
                  value={teacherData.doj}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  ID No
                </label>
                <input
                  required
                  type="number"
                  name="ID"
                  value={teacherData.ID}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Subject
                </label>
                <select
                  required
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  name="subject"
                  value={teacherData.subject}
                  onChange={handleChange}
                >
                  <option value="">Please Select Section</option>
                  <option value="English">English</option>
                  <option value="Urdu">Urdu</option>
                  <option value="Math">Math</option>
                  <option value="Computer">Computer</option>
                  <option value="Science">Science</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Religion
                </label>
                <select
                  required
                  name="religion"
                  value={teacherData.religion}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                >
                  <option value="">Please Select Religion</option>
                  <option value="Muslim">Muslim</option>
                  <option value="Non Muslim">Non Muslim</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  required
                  name="email"
                  value={teacherData.email}
                  onChange={handleChange}
                  type="email"
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  required
                  type="text"
                  name="phoneNumber"
                  value={teacherData.phoneNumber}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Present Address
                </label>
                <input
                  required
                  type="text"
                  name="presentAddress"
                  value={teacherData.presentAddress}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Permanent Address
                </label>
                <input
                  required
                  type="text"
                  name="permanentAddress"
                  value={teacherData.permanentAddress}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Parents Photo (150px x 150px)
                </label>
                <input
                  required
                  type="file"
                  accept="image/*"
                  onChange={StdImg}
                  className="w-full h-9  "
                />
              </div>
              <div className="col-span-1 mr-[73px]">
                {DatatoUpdate === null ? (
                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    >
                      Save
                    </button>
                    <button
                      type="reset"
                      className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      Reset
                    </button>
                  </div>
                ) : (
                  <div className="mt-6 flex justify-end space-x-4">
                    <NavLink to="/teachers/allteachers">
                      <button
                        onClick={handleUpdata}
                        className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        Update
                      </button>
                    </NavLink>
                    <NavLink to="/teachers/allteachers">
                      <button
                        className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={() => dispatch(setUpdate(null))}
                      >
                        Cancel
                      </button>
                    </NavLink>
                    /
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
