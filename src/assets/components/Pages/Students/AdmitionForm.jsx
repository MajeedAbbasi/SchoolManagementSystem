import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setUpdate } from "../../../Slices/StdActionSlice";
import { NavLink } from "react-router-dom";
const AdmitionForm = () => {
  const [formData, setFormData] = useState({
    ID: "",
    studentName: "",
    class: "",
    section: "",
    gender: "",
    dob: "",
    roll: "",
    admissionNo: "",
    religion: "",
    email: "",
    fatherName: "",
    motherName: "",
    fatherOccupation: "",
    motherOccupation: "",
    phoneNumber: "",
    nationality: "",
    presentAddress: "",
    permanentAddress: "",
    StdImg: null,
    ParentImg: null,
    uniqueid: "",
  });
  const dispatch = useDispatch();
  let view = useSelector((state) => state.stdAction.stdUpdate);
  useEffect(() => {
    if (view !== null) {
      setFormData((prev) => ({
        ...prev,
        ...view,
      }));
    }
  }, [view]);
  const [showhidden, setShowhidden] = useState(false);
  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const Reload = () => {
    setShowhidden(false);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const StdImg = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          StdImg: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const ParentImg = (e) => {
    const file = e.target.files[0];
    let uniqueid =
      "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          ParentImg: reader.result,
          uniqueid: uniqueid,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("formData")) || [];
    let valueExist = existingData.filter((e) => {
      return e.ID === formData.ID;
    });

    if (valueExist.length === 0) {
      const updatedData = [...existingData, formData];
      localStorage.setItem("formData", JSON.stringify(updatedData));
      setFormData({
        ID: "",
        studentName: "",
        class: "",
        section: "",
        gender: "",
        dob: "",
        roll: "",
        admissionNo: "",
        religion: "",
        email: "",
        fatherName: "",
        motherName: "",
        fatherOccupation: "",
        motherOccupation: "",
        phoneNumber: "",
        nationality: "",
        presentAddress: "",
        permanentAddress: "",
        StdImg: null,
        ParentImg: null,
        uniqueid: "",
      });
    } else {
      alert("Id already Exist Please choose another id 😥");
    }
  };

  const handleUpdata = () => {
    let storedData = JSON.parse(localStorage.getItem("formData"));

    let updatedData = storedData.map((value) => {
      if (value.uniqueid === formData.uniqueid) {
        return { ...value, ...formData };
      }
      return value;
    });
    localStorage.setItem("formData", JSON.stringify(updatedData));
    dispatch(setUpdate(null));
  };

  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div className="h-8 ml-14 flex pt-1 lg:h-8  bg-white mt-16 w-[1080px] pl-1 ">
        <h1 className=" font-semibold  w-[300px]">Add Student Form</h1>
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
            onClick={Reload}
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
        <div className="ml-5 mt-4 ">
          <p className="font-semibold text-[18px] mb-2">Student Information</p>
          <div className=" relative w-10 h-1 bg-blue-900 -mt-2"></div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-4 gap-2 ">
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium ">
                    Student Name
                  </label>
                  <input
                    required
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium ">ID</label>
                  <input
                    required
                    type="number"
                    name="ID"
                    value={formData.ID}
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
                    value={formData.class}
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
                    value={formData.section}
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
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Please Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    required
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Roll
                  </label>
                  <input
                    required
                    type="number"
                    name="roll"
                    value={formData.roll}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Admission No
                  </label>
                  <input
                    required
                    type="number"
                    name="admissionNo"
                    value={formData.admissionNo}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Religion
                  </label>
                  <select
                    required
                    name="religion"
                    value={formData.religion}
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
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Upload Student Photo (150px x 150px)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={StdImg}
                    required
                    className="w-full h-9 "
                  />
                </div>
              </div>

              <h2 className="text-xl font-semibold my-2">
                Parents Information
              </h2>
              <div className=" relative w-10 h-1 bg-blue-900 -mt-2"></div>
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Father Name
                  </label>
                  <input
                    required
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    type="text"
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Mother Name
                  </label>
                  <input
                    required
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                    type="text"
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Father Occupation
                  </label>
                  <input
                    required
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    type="text"
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Mother Occupation
                  </label>
                  <input
                    required
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleChange}
                    type="text"
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
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nationality
                  </label>
                  <input
                    required
                    type="text"
                    name="nationality"
                    value={formData.nationality}
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
                    value={formData.presentAddress}
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
                    value={formData.permanentAddress}
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
                    onChange={ParentImg}
                    className="w-full h-9  "
                  />
                </div>
                <div className="col-span-1 mr-[73px]">
                  {view === null ? (
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
                      <NavLink to="/students/allstudents">
                        <button
                          onClick={handleUpdata}
                          className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        >
                          Update
                        </button>
                      </NavLink>
                      <NavLink to="/students/allstudents">
                        <button
                          className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                          onClick={() => dispatch(setUpdate(null))}
                        >
                          Cancel
                        </button>
                      </NavLink>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmitionForm;
