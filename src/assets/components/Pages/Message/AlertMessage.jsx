import React from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import "./Message.css";

const AlertMessage = ({ alertMessage, hide, setHide }) => {
  return (
    <div className="flex flex-col gap-52">
      {
        alertMessage === true ? (
          <div
            className={`h-0 lg:w-[370px] lg:mt-16 lg:ml-8 bg-white  ${
              alertMessage ? "fadeInLeftToRightCustom" : "fadeInRightBigCustom"
            } `}
          >
            <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
              <h1 className="font-semibold ">Successful Message</h1>
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
                <TfiReload className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1" />
                <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
              </div>
            </div>
            <hr />
            <div
              style={{
                height: hide ? "0" : "180px",
              }}
              className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-hidden"
            >
              <div class="success-box mt-10 ml-20">
                <div class="success-icon ml-16">
                  <span></span>
                </div>
                <p class="success-text mt-5">
                  Successfully Upload Your Message
                </p>
              </div>
            </div>
          </div>
        ) : alertMessage === false ? (
          // Error message
          <div
            className={`h-0 lg:w-[370px] lg:mt-16 lg:ml-8 bg-white ${
              alertMessage ? "fadeInRightBigCustom" : "fadeInLeftToRightCustom"
            }`}
          >
            <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
              <h1 className="font-semibold ">Error Message</h1>
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
                <TfiReload className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1" />
                <IoClose className="text-red-500 cursor-pointer h-7 w-7 ml-3" />
              </div>
            </div>
            <hr />
            <div
              style={{
                height: hide ? "0" : "180px",
              }}
              className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-hidden"
            >
              <div class="error-box -ml-5">
                <div class="error-icon">
                  <span></span>
                </div>
                <p class="error-text">Some Field Required Here</p>
              </div>
            </div>
          </div>
        ) : null /* No message when alertMessage is null */
      }
    </div>
  );
};

export default AlertMessage;
