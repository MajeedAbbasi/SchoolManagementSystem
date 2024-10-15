import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const TeacherDetail = () => {
  const view = useSelector((state) => state.tchrAction.tchrAction);
  console.log(view);
  const [showhidden, setShowhidden] = useState(false);

  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      {view ? (
        <>
          <div className="h-8 ml-14 flex pt-1 lg:h-8 bg-white mt-16 w-[1080px] pl-1 ">
            <h1 className=" font-semibold  w-[300px] ml-4">
              {view[0].teacherName} Details
            </h1>
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
              <NavLink to="/teachers/allteachers">
                <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
              </NavLink>
            </div>
            <hr />
          </div>
          <div
            className="w-[1080px] h-[503px] transition-all duration-[1000ms] overflow-hidden bg-white ml-14 mt-[0.5px]"
            style={{
              height: showhidden ? "0" : "503px",
            }}
          >
            <div
              className="
        flex"
            >
              <img
                className="h-48 w-52 mt-8 ml-8"
                src={view[0].TeacherImg}
                alt=""
              />
              <div className="mt-6 ml-7 flex flex-col ">
                <div className="flex  font-semibold  mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Name:</p>
                  <p className="font-semibold -mt-[1px]">
                    {" "}
                    {view[0].teacherName}
                  </p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Gender: </p>
                  <p className="font-semibold -mt-[1px]">{view[0].gender}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Date of Birth:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].doj}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Religion:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].religion}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Email:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].email}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Subject:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].subject}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Class:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].class}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Section:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].section}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">ID:</p>
                  <p className="font-semibold -mt-[1px]">{view[0].ID}</p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Address:</p>
                  <p className="font-semibold -mt-[1px]">
                    {view[0].presentAddress}
                  </p>
                </div>
                <div className="flex  font-semibold mb-2 ">
                  <p className="text-gray-600 w-32 text-sm">Phone:</p>
                  <p className="font-semibold -mt-[1px]">
                    +{view[0].phoneNumber}
                  </p>
                </div>
              </div>
              {/* <div className="mt-6 ml-7 flex flex-col ">
            <p className="text-2xl font-semibold">About Me</p>
            <div className="  w-10 h-1 bg-blue-900 mb-2 "></div>
            <div className="flex  font-semibold mb-2 ">
              <p className="text-gray-600 w-32 text-sm">Father Name:</p>
              <p className="font-semibold -mt-[1px]">{view[0].fatherName}</p>
            </div>
            <div className="flex  font-semibold mb-2 ">
              <p className="text-gray-600 w-32 text-sm">Mother Name:</p>
              <p className="font-semibold -mt-[1px]">{view[0].motherName}</p>
            </div>

            <div className="flex  font-semibold mb-2 ">
              <p className="text-gray-600 w-32 text-sm">Father Occupation:</p>
              <p className="font-semibold -mt-[1px]">
                {view[0].fatherOccupation}
              </p>
            </div>
            <div className="flex  font-semibold mb-2 ">
              <p className="text-gray-600 w-32 text-sm">Admission Date:</p>
              <p className="font-semibold -mt-[1px]">29/04/2002</p>
            </div>
            <div className="flex  font-semibold mb-2 ">
              <p className="text-gray-600 w-32 text-sm">Roll:</p>
              <p className="font-semibold -mt-[1px]">{view[0].roll}</p>
            </div>
          </div>*/}
            </div>
          </div>
        </>
      ) : (
        <>
          <>
            <div className="h-8 ml-14 flex pt-1 lg:h-8 bg-white mt-16 w-[1080px] pl-1 ">
              <h1 className=" font-semibold  w-[300px] ml-4">No Details</h1>
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
                <NavLink to="/students/allstudents">
                  <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
                </NavLink>
              </div>
              <hr />
            </div>
          </>
        </>
      )}
    </div>
  );
};

export default TeacherDetail;
