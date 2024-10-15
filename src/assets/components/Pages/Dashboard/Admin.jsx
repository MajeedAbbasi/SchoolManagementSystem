import React, { useState } from "react";
import { IoMdPersonAdd, IoIosPeople } from "react-icons/io";
import Calendar from "react-calendar";
import { FaPeopleRoof, FaLinkedinIn } from "react-icons/fa6";
import "react-calendar/dist/Calendar.css";
import {
  FaDonate,
  FaFacebookF,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";

import Chart from "./Chart";
import "../Dashboard/Admin.css";
const Admin = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };

  return (
    <>
      <div className=" bg-gray-300   h-full  fadeInLeftToRightCustom z-0 ">
        <div className="bg-gray-300  flex flex-col lg:w-[100%]   mt-10  p-3 ">
          <div className="flex flex-col  lg:flex-row ">
            <div className=" flex pt-3 pl-10 ">
              <div className="flex  lg:h-24 h-36 w-[300px] lg:w-[230px] bg-white pt-5 pl-5 lg:pt-3 lg:pl-4 rounded-sm shadow-xl">
                <div className="text-black  pl-3 ">
                  <div>
                    <FaPeopleRoof className="lg:h-10 lg:w-10 h-16 w-12 text-green-500" />
                  </div>
                  <p>Students</p>
                </div>

                <div className="ml-5  h-8 w-[1px] bg-slate-400 lg:mt-3 mt-7"></div>
                <h1 className="relative  font-semibold lg:text-2xl text-4xl lg:mt-3 mt-6 ml-4">
                  50,000
                </h1>
              </div>
            </div>
            <div className=" flex pt-3 pl-10 ">
              <div className="flex lg:h-24 h-36 w-[300px] lg:w-[230px] bg-white pt-5 pl-5 lg:pt-3 lg:pl-4 rounded-sm shadow-xl">
                <div className="text-black  pl-3 ">
                  <div>
                    <IoIosPeople className="lg:h-10 lg:w-10 h-16 w-12 text-blue-500" />
                  </div>
                  <p>Teachers</p>
                </div>
                <div className="ml-5  h-8 w-[1px] bg-slate-400 lg:mt-3 mt-7"></div>
                <h1 className="relative  font-semibold lg:text-2xl text-4xl lg:mt-3 mt-6 ml-4">
                  10,000
                </h1>
              </div>
            </div>
            <div className=" flex pt-3 pl-10 ">
              <div className="flex lg:h-24 h-36 w-[300px] lg:w-[230px] bg-white pt-5 pl-5 lg:pt-3 lg:pl-4 rounded-sm shadow-xl">
                <div className="text-black  pl-3 ">
                  <div>
                    <IoMdPersonAdd className="lg:h-10 lg:w-10 h-16 w-12 text-yellow-300" />
                  </div>
                  <p>Parents</p>
                </div>
                <div className="ml-5  h-8 w-[1px] bg-slate-400 lg:mt-3 mt-7"></div>
                <h1 className="relative  font-semibold lg:text-2xl text-4xl lg:mt-3 mt-6 ml-4">
                  20,000
                </h1>
              </div>
            </div>
            <div className=" flex pt-3 pl-10 ">
              <div className="flex lg:h-24 h-36 w-[300px] lg:w-[230px] bg-white pt-5 pl-5 lg:pt-3 lg:pl-4 rounded-sm shadow-xl">
                <div className="text-black  pl-3 ">
                  <div>
                    <FaDonate className="lg:h-10 lg:w-10 h-16 w-12 text-gray-400 mt-1 ml-1" />
                  </div>
                  <p>Earning</p>
                </div>
                <div className="ml-5  h-8 w-[1px] bg-slate-400 lg:mt-3 mt-7"></div>
                <h1 className="relative  font-semibold lg:text-2xl text-4xl lg:mt-3 mt-6 ml-4">
                  90,000$
                </h1>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col">
            <div className="mt-10 ml-10 flex lg:h-[200] lg:w-[500px] h-[100] w-[300px] bg-white lg:pt-3 lg:-pl-1 rounded-sm shadow-xl">
              <Chart />
            </div>
            <div className="mt-10 ml-10 flex gap-8  lg:flex-wrap lg:flex-row flex-col w-[50%] h-[50%]">
              <div className="flex lg:h-[80%]  lg:w-[230px] w-[300px] h-[150px] bg-gradient-to-r from-blue-950 to-blue-800 ... lg:pt-3 lg:pl-4 rounded-sm shadow-xl pt-8 pl-5">
                <div className="text-white   ">
                  <div>
                    <FaFacebookF className="h-10 w-10 text-white mt-1 ml-1 lg:ml-5 lg:h-8 lg:w-8" />
                  </div>
                  <p className="">Like us on Facebook</p>
                </div>
                <div className="flex lg:mr-1 mr-8 mt-3 ">
                  <div className="lg:mr-3 mr-6 h-10 w-[1px] bg-slate-400 mt-3"></div>
                  <h1 className=" font-semibold text-4xl lg:text-3xl mt-3 mr-4 text-white">
                    30,000
                  </h1>
                </div>
              </div>
              <div className="flex lg:h-[80%]  lg:w-[230px] w-[300px] h-[150px] bg-gradient-to-r from-blue-600 to-blue-400 ... lg:pt-3 lg:pl-4 rounded-sm shadow-xl pt-8 pl-5 lg:ml-2">
                <div className="text-white ">
                  <div>
                    <FaTwitter className="h-10 w-10 text-white mt-1 ml-1 lg:ml-5 lg:h-8 lg:w-8" />
                  </div>
                  <p className="">Like us on Twitter</p>
                </div>
                <div className="flex mr-5 mt-3 lg:mr-1">
                  <div className="mr-3 h-10 w-[1px] bg-slate-400 mt-3"></div>
                  <h1 className=" font-semibold text-4xl lg:text-3xl mt-3 mr-4 text-white">
                    20,000
                  </h1>
                </div>
              </div>
              <div className="flex lg:h-[80%]  lg:w-[230px] w-[300px] h-[150px]  bg-gradient-to-r from-fuchsia-900 to-pink-500 ... lg:pt-1 lg:pl-4 rounded-sm shadow-xl pt-8 pl-5 lg:-mt-3">
                <div className="text-white   ">
                  <div>
                    <FaInstagramSquare className="h-10 w-10 text-gradient-to-r from-fuchsia-900 to-pink-500 ... mt-1 ml-1 lg:ml-5 lg:h-10 lg:w-10 " />
                  </div>
                  <p className="mt-">Follow us on Instagram</p>
                </div>
                <div className="flex mr-1 mt-3 lg:mr-1">
                  <div className="mr-3 h-10 w-[1px] bg-slate-400 mt-3"></div>
                  <h1 className=" font-semibold text-4xl lg:text-3xl mt-3 mr-4 text-white">
                    3,000
                  </h1>
                </div>
              </div>
              <div className="flex lg:h-[80%]  lg:w-[230px] w-[300px] h-[150px] bg-gradient-to-r from-blue-900 to-blue-500 ... lg:pt-3 lg:pl-4 rounded-sm shadow-xl pt-8 pl-5 lg:ml-2 lg:-mt-3">
                <div className="text-white   ">
                  <div>
                    <FaLinkedinIn className="h-10 w-10 text-white mt-1 ml-1 lg:ml-5 lg:h-8 lg:w-8 " />
                  </div>
                  <p className="">Like us on Linkedin</p>
                </div>
                <div className="flex mr-5 mt-3 lg:mr-1">
                  <div className="mr-3 h-10 w-[1px] bg-slate-400 mt-3"></div>
                  <h1 className=" font-semibold text-4xl lg:text-3xl mt-3 mr-4 text-white">
                    40,000
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex lg:flex-row flex-col lg:h-[400px] h-full  w-[100%] ">
            <div
              className="mt-8 ml-10  lg:h-[350px]
            lg:w-[500px]  pl-2 w-[74%] rounded border bg-white   border-white shadow-xl"
            >
              <h1 className="h-8 px-2 py-1 font-semibold">Event Calender</h1>
              <hr />
              <Calendar
                className=" border-none h-[20%] w-[100%] lg:w-[100%] lg:h-[70%] mt-3"
                onChange={onChange}
                value={date}
              />
            </div>
            <div className=" w-[74%] lg:w-[230px] lg:h-[350px] bg-white mt-8 ml-10 rounded-sm shadow-xl">
              <div>
                <h1 className="h-8 px-2 py-1 font-semibold">Notice Board</h1>
                <hr />
                <div className="text-gray-700 overflow-hidden  h-[318px]">
                  <div className="h-[270px] mt-5 overflow-auto">
                    <div className=" mt-3 ml-9 ">
                      <p className="text-sm">29 August,2024</p>
                      <div className="flex">
                        <p className="text-red-700 font-semibold">
                          Faheem Abbasi
                        </p>
                        <p className="text-[10px] mt-[6px] ml-1">
                          5 minutes ago
                        </p>
                      </div>

                      <p className="text-sm">
                        a book or other written or printed work, regarded in
                        terms of its content rather than its physical form
                      </p>
                    </div>
                    <div className=" mt-3 ml-9">
                      <p className="text-sm">29 August,2024</p>
                      <div className="flex">
                        <p className="text-green-500 font-semibold">
                          Sarim Abbasi
                        </p>
                        <p className="text-[10px] mt-[6px] ml-1">
                          5 minutes ago
                        </p>
                      </div>

                      <p className="text-sm">
                        a book or other written or printed work, regarded in
                        terms of its content rather than its physical form
                      </p>
                    </div>
                    <div className=" mt-3 ml-9">
                      <p className="text-sm">29 August,2024</p>
                      <div className="flex">
                        <p className="text-violet-700 font-semibold">
                          Mustufa Abbasi
                        </p>
                        <p className="text-[10px] mt-[6px] ml-1">
                          5 minutes ago
                        </p>
                      </div>
                      <p className="text-sm">
                        a book or other written or printed work, regarded in
                        terms of its content rather than its physical form
                      </p>
                    </div>
                    <div className=" mt-3 ml-9">
                      <p className="text-sm">29 August,2024</p>
                      <div className="flex">
                        <p className="text-blue-700 font-semibold">
                          Majeed Abbasi
                        </p>
                        <p className="text-[10px] mt-[6px] ml-1">
                          5 minutes ago
                        </p>
                      </div>

                      <p className="text-sm">
                        a book or other written or printed work, regarded in
                        terms of its content rather than its physical form
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[74%] lg:w-[230px] lg:h-[350px] bg-white mt-8 ml-10 rounded-sm shadow-xl ">
              <h1 className="h-8 px-2 py-1 font-semibold recent-activities">
                Recent Activities
              </h1>
              <hr />

              <ul className="activity-list mt-8">
                <li className="activity-item">
                  <span className="time">9 minutes ago {""}</span>
                  <span className="activity-text">
                    You <span className="highlight">Followed</span> Olivia
                    Williamson
                  </span>
                </li>
                <li className="activity-item">
                  <span className="time">20 minutes ago {""}</span>
                  <span className="activity-text">
                    You <span className="highlight">Subscribed</span> to Harold
                    Fuller
                  </span>
                </li>
                <li className="activity-item">
                  <span className="time">30 minutes ago {""}</span>
                  <span className="activity-text">
                    You <span className="highlight">Updated</span> your profile
                    picture
                  </span>
                </li>
                <li className="activity-item">
                  <span className="time">35 minutes ago {""}</span>
                  <span className="activity-text">
                    You <span className="highlight">Deleted</span> homepage.psd
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
