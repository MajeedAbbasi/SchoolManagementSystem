import React, { useState, useEffect } from "react";
import adminpic from "../../image/admin/adminpic.png";
import { MdDelete } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import { FaGlobeEurope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegBell } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  setNotification,
  setNotifications,
} from "../../Slices/NotificationSlice";
import { setMessageCount, setMessages } from "../../Slices/MessageSlice";
import { useNavigate } from "react-router-dom";
import { setAccess } from "../../Slices/AccessSlice";
const Header = () => {
  const [close, setClose] = useState(true);
  const [closeNotification, setCloseNotification] = useState(true);
  const [logoutNotifi, setLogoutNotifi] = useState(true);
  let Stored = JSON.parse(localStorage.getItem("loginData"));

  const dispatch = useDispatch();
  const notificationCount = useSelector(
    (state) => state.NotificationSlice.notification
  );
  const notificationData = useSelector(
    (state) => state.NotificationSlice.notifications
  );
  const MessageCount = useSelector((state) => state.MessageSlice.messageSlice);
  const Messages = useSelector((state) => state.MessageSlice.messages);
  console.log(Messages);
  const navigate = useNavigate();
  const handleLogout = () => {
    let data = JSON.parse(localStorage.getItem("login"));
    const update = { ...data, type: false };
    localStorage.setItem("login", JSON.stringify(update));
    setLogoutNotifi(true);
    dispatch(setAccess(false));
    navigate("/");
  };
  return (
    <>
      <div className="  header flex z-10  bg-white fixed  pt-2  h-12 w-full">
        <div className="text-gray-600 ml-3 mt-[-2px]">
          <GiGraduateCap className="h-10 w-8 " />
        </div>
        <div className=" mt-1 text-gray-600 hidden lg:block">
          <b className="text-black">Welcom to Majeed's</b> School Management
          System
        </div>
        <div className="text-black ml-3">
          <div className="relative ">
            <input
              type="search"
              name="serch"
              placeholder="Search"
              className="bg-gray-100 h-8 px-5 pr-10 rounded-full text-sm focus:outline-none lg:w-[400px] w-[100px] ml-1"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
              <svg
                className="h-4  w-4 fill-current mt-[-3px]"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="text-black rounded-full border-black flex ml-2 mt-2">
          <div className="bg-[#e9e4e4] my-auto -mt-1.5 p-1.5 rounded-full mx-auto text-gray-600 cursor-pointer ">
            <FaGlobeEurope />
          </div>
          <div className="mt-[-4px] ">
            <select
              name="cars"
              id="cars "
              className="rounded-full border-black mr-1 cursor-pointer"
            >
              <option value="volvo">English</option>
              <option value="saab">Urdu</option>
            </select>
          </div>
        </div>
        <div className="h-6 w-[1px] bg-slate-400 mt-1"></div>
        <div className="flex gap-3 ml-3 mt-2 ">
          <div
            className="bg-[#e9e4e4] my-auto -mt-1.5 p-1.5 rounded-full mx-auto text-gray-600 cursor-pointer"
            onClick={() => {
              dispatch(setMessageCount(0));
              setClose(!close);
              setCloseNotification(true);
              setLogoutNotifi(true);
            }}
          >
            {MessageCount ? (
              <p className="absolute text-[10px] ml-3 -mt-3 w-4 h-4 border  rounded-full text-white bg-green-400 pl-[5px] pb-[5px]">
                {MessageCount}
              </p>
            ) : (
              ""
            )}
            <CiMail />
          </div>
          <div
            className={`absolute  bg-gray-100 shadow-md h-56 w-56 top-9 rounded-sm -ml-[200px] ${
              close ? "hidden" : "visible"
            }`}
          >
            <div className="flex ml-2 gap-32">
              <p>Messages</p>
              <div
                className="absolute right-10 text-green-600 m-[5px] -mr-3 cursor-pointer"
                onClick={() => dispatch(setMessages(0))}
              >
                <MdDelete />
              </div>
              <div
                className="text-red-600 mt-1 cursor-pointer"
                onClick={() => {
                  setClose(true);
                }}
              >
                <IoClose className="w-5 h-5" />
              </div>
            </div>
            <hr />
            <div className="flex flex-col ml-2 mt-2 gap-1 overflow-auto w-52 h-44">
              <div>
                {Messages && Messages.length > 0 ? (
                  Messages.map((e, index) => (
                    <div key={index} className="">
                      <div className="flex flex-col">
                        <p className="font-bold">{e.title}</p>
                        <p className="text-green-400">{e.recipent}</p>
                        <p>{e.message}</p>
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
          <div
            className="bg-[#e9e4e4] my-auto -mt-1.5 p-1.5 rounded-full mx-auto text-gray-600 cursor-pointer"
            onClick={() => {
              dispatch(setNotification(0));
              setCloseNotification(!closeNotification);
              setClose(true);
              setLogoutNotifi(true);
            }}
          >
            {notificationCount ? (
              <p className="absolute text-[10px] ml-3 -mt-3 w-4 h-4 border  rounded-full text-white bg-red-400 pl-[5px] pb-[5px] ">
                {notificationCount}
              </p>
            ) : (
              ""
            )}

            <FaRegBell />
          </div>
          <div
            className={`absolute  bg-gray-100 shadow-md h-56 w-56 top-9 rounded-sm -ml-40 ${
              closeNotification ? "hidden" : "visible"
            }`}
          >
            <div className="flex ml-2 gap-32">
              <p>Notification</p>
              <div
                className="absolute right-10 text-green-600 m-[5px] -mr-3 cursor-pointer"
                onClick={() => dispatch(setNotifications(0))}
              >
                <MdDelete />
              </div>
              <div
                className="text-red-600 mt-1 cursor-pointer -ml-3"
                onClick={() => {
                  setCloseNotification(true);
                }}
              >
                <IoClose className="w-5 h-5" />
              </div>
            </div>
            <hr />
            <div className="flex flex-col ml-2 mt-2 gap-1 overflow-auto w-52 h-44">
              {notificationData && notificationData.length > 0 ? (
                notificationData.map((e, index) => (
                  <div key={index} className="">
                    <div className="flex flex-col">
                      <p className="font-bold">{e.title}</p>
                      <div className="flex gap-20">
                        <p className="text-green-400">{e.PostedBy}</p>
                        <p className="text-amber-950">{e.date}</p>
                      </div>
                      <p>{e.detail}</p>
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
        <div className="h-6 w-[1px] bg-slate-400 mt-1 ml-3"></div>
        <div
          className="h-8 w-30 lg:ml-6 ml-4 flex cursor-pointer"
          onClick={() => {
            setLogoutNotifi(!logoutNotifi);
            setClose(true);
            setCloseNotification(true);
          }}
        >
          <img className="rounded-full" src={adminpic} alt="" />
          <div className=" ml-2 lg:block hidden">
            <p className="text-[13px] font-bold ">{Stored.UserName} </p>
            <p className="absolute -mt-1">admin</p>
          </div>
        </div>
        <div
          className={`absolute bg-gray-100 shadow-md h-28 right-52 w-36 top-12 rounded-sm -ml-40  ${
            logoutNotifi ? "hidden" : "visible"
          }`}
        >
          <div
            className="text-red-600 mt-1 cursor-pointer ml-28"
            onClick={() => {
              setLogoutNotifi(true);
            }}
          >
            <IoClose className="w-5 h-5" />
          </div>
          <button
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-4 ml-6"
            onClick={handleLogout}
          >
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
