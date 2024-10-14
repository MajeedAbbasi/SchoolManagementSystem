import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Map = () => {
  const [hide, setHide] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] animate__animated animate__fadeInLeft z-0">
        <div className="h-8  ml-14 flex justify-between pt-1 mt-20 w-[1080px] lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">Marker Map</h1>
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
            <IoClose
              className="text-red-500 cursor-pointer h-7 w-7 ml-3"
              onClick={() => navigate("/")}
            />
          </div>
        </div>

        <div
          className="w-[1080px] h-[503px] transition-all duration-[1000ms] overflow-hidden bg-white ml-14  shadow-2xl"
          style={{
            height: hide ? "0" : "503px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.335228194243!2d71.71009267460401!3d29.389747949294655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91c866914697%3A0xe58907dce2ee1358!2sEnigmatix%20(Pvt)%20Ltd!5e0!3m2!1sen!2s!4v1728841464803!5m2!1sen!2s"
            width="1100"
            height="600"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
