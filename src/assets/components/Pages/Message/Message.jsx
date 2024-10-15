import { useState } from "react";
import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import "./Message.css";
import AlertMessage from "./AlertMessage";
import { useDispatch } from "react-redux";
import { setMessageCount, setMessages } from "../../../Slices/MessageSlice";

const Message = () => {
  const [showhidden, setShowhidden] = useState(null);
  const [hide, setHide] = useState(null);
  const [alertMessage, setAlertMessage] = useState(null);
  const [message, setMessage] = useState({
    title: "",
    recipent: "",
    message: "",
    date: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage({
      ...message,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      message.title === "" ||
      message.recipent === "" ||
      message.message === ""
    ) {
      setAlertMessage(null);
      setTimeout(() => {
        setAlertMessage(false);
      }, 250);

      console.log("Some field required");
    } else {
      setAlertMessage(null);
      setTimeout(() => {
        setAlertMessage(true);
      }, 250);
      dispatch(setMessageCount(1));
      dispatch(setMessages(message));

      setMessage({
        title: "",
        recipent: "",
        message: "",
        date: "",
      });
    }
  };

  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] fadeInLeftToRightCustom z-0">
        <div className=" h-0 lg:w-[670px]  lg:mt-16 lg:ml-8 bg-white ">
          <div className="h-8 flex justify-between pt-1   lg:h-8 bg-white pl-2">
            <h1 className="font-semibold ">Write a Message</h1>
            <div className="flex lg:mr-1">
              {showhidden ? (
                <IoIosArrowForward
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4 "
                  onClick={() => setShowhidden(!showhidden)}
                />
              ) : (
                <IoIosArrowDown
                  className="text-yellow-400 cursor-pointer h-7 w-7 ml-4"
                  onClick={() => setShowhidden(!showhidden)}
                />
              )}
              <TfiReload className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1" />
              <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
            </div>
          </div>
          <hr />
          <div
            style={{
              height: showhidden ? "0" : "470px",
            }}
            className="lg:h-[520px]  bg-white transition-all duration-[1000ms] overflow-hidden"
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col ml-8 mt-5">
                <div className="w-[580px]">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={message.title}
                    className="w-full h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="w-[580px] mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Recipent
                  </label>
                  <input
                    type="text"
                    name="recipent"
                    onChange={handleChange}
                    value={message.recipent}
                    className="w-full h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <div className="w-[580px] mt-5">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="8"
                    cols="50"
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={message.message}
                    className="w-full  bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-2 w-36 mt-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* Use the AlertMessage component */}
        <AlertMessage
          alertMessage={alertMessage}
          hide={hide}
          setHide={setHide}
        />
      </div>
    </div>
  );
};

export default Message;
