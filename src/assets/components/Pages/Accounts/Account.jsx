import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";

const Account = () => {
  const [showhidden, setShowhidden] = useState(false);
  const [hide, setHide] = useState(false);
  const [stored, setStored] = useState(null);
  const [accountData, setAccountData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    IMG: "",
  });
  useEffect(() => {
    let storedData = localStorage.getItem("accountData");
    if (storedData) {
      setStored(JSON.parse(storedData));
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccountData({
      ...accountData,
      [name]: value,
    });
  };
  const AdminPictur = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAccountData((prevData) => ({
          ...prevData,
          IMG: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("accountData");
    localStorage.setItem("accountData", JSON.stringify(accountData));
    setStored(accountData);

    setAccountData({
      Name: "",
      Email: "",
      Phone: "",
      IMG: "",
    });
  };
  return (
    <div className="bg-gray-300  lg:h-full flex  lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div className=" h-0 lg:w-[300px]  lg:mt-16 lg:ml-14 bg-white ">
        <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">Account Setting</h1>
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
            height: hide ? "0" : "400px",
          }}
          className="lg:h-[520px] bg-white transition-all duration-[1000ms] overflow-hidden"
        >
          <form onSubmit={handleSubmit}>
            <div className="ml-8 mt-4 flex gap-3 flex-col">
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="Name"
                  value={accountData.Name}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  required
                  type="number"
                  name="Phone"
                  value={accountData.Phone}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="Email"
                  value={accountData.Email}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100 shadow-sm focus:outline-none pl-2 focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Photo (150px x 150px)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={AdminPictur}
                  required
                  className="w-full h-9 "
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 w-28 mt-6 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className=" h-0 lg:w-[730px]  lg:mt-16 lg:ml-8 bg-white ">
        <div className="h-8 flex justify-between pt-1 lg:h-8 bg-white pl-2">
          <h1 className="font-semibold ">User Profile</h1>
          <div className="flex lg:mr-1">
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
          {stored ? (
            <div className="flex  mt-10 ml-8">
              <div className=" h-48 w-48">
                <img src={stored.IMG} alt="image not found" />
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex gap-16 ml-10">
                  <div>Name: </div>
                  <div>{stored.Name} </div>
                </div>
                <div className="flex gap-16 ml-10">
                  <div>Phone: </div>
                  <div>{stored.Phone} </div>
                </div>
                <div className="flex gap-16 ml-10">
                  <div>Email: </div>
                  <div>{stored.Email}</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
