import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setPaymentUpdate } from "../../../Slices/PaymentSlice";
const CreateStudentPayment = () => {
  const [showhidden, setShowhidden] = useState(false);
  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [paymentData, setPaymentData] = useState({
    name: "",
    ID: "",
    totalFee: "",
    paymentMethod: "",
    status: "",
    date: "",
    uniqueid: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({
      ...paymentData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let uniqueid =
      "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
    setPaymentData((prevData) => ({
      ...prevData,
      uniqueid,
    }));

    const formData = JSON.parse(localStorage.getItem("formData")) || [];
    const valueExist = formData.filter((e) => {
      return e.ID === paymentData.ID && e.studentName === paymentData.name;
    });
    if (valueExist.length !== 0) {
      const existingData =
        JSON.parse(localStorage.getItem("paymentData")) || [];
      let ExistValue = existingData.filter((e) => {
        return e.ID === paymentData.ID;
      });
      const updatedData = [...existingData, paymentData];
      localStorage.setItem("paymentData", JSON.stringify(updatedData));
      setPaymentData({
        name: "",
        ID: "",
        class: "",
        section: "",
        totalFee: "",
        paymentMethod: "",
        status: "",
        date: "",
        uniqueid: "",
      });
    } else {
      alert("Student Doesn't Exist");
    }
  };

  let view = useSelector((state) => state.PaymentSlice.paymentUpdate);
  useEffect(() => {
    if (view.length != 0) {
      setPaymentData(view[0]);
    }
  }, []);

  const handleUpdata = () => {
    let storedData = JSON.parse(localStorage.getItem("paymentData"));

    let updatedData = storedData.map((value) => {
      if (value.uniqueid === paymentData.uniqueid) {
        return { ...value, ...paymentData };
      }
      return value;
    });
    localStorage.setItem("paymentData", JSON.stringify(updatedData));
    dispatch(setPaymentUpdate(null));
  };

  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div className="h-8 ml-14 flex pt-1 lg:h-8  bg-white mt-16 w-[1080px] pl-1 ">
        <h1 className=" font-semibold  w-[300px]">Payment Information</h1>
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
          <TfiReload className="text-green-400 cursor-pointer h-5 w-5 ml-3 mt-1" />
          <IoClose
            className="text-red-500 cursor-pointer h-7 w-7 ml-3"
            onClick={() => navigate("/payment/feecollection")}
          />
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
                  Name
                </label>
                <input
                  required
                  type="text"
                  name="name"
                  value={paymentData.name}
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
                  value={paymentData.ID}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>

              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Total Fee
                </label>
                <input
                  required
                  type="number"
                  name="totalFee"
                  value={paymentData.totalFee}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Payment Method
                </label>
                <input
                  required
                  type="text"
                  name="paymentMethod"
                  value={paymentData.paymentMethod}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  required
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                  name="status"
                  value={paymentData.status}
                  onChange={handleChange}
                >
                  <option value="">Please Select Section</option>
                  <option value="Paid">Paid</option>
                  <option value="Due">Due</option>
                </select>
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Date
                </label>
                <input
                  required
                  type="date"
                  name="date"
                  value={paymentData.date}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1 mr-[73px]">
                {view.length === 0 ? (
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
                    <NavLink to="/payment/feecollection">
                      <button
                        onClick={handleUpdata}
                        className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        Update
                      </button>
                    </NavLink>
                    <NavLink to="/payment/feecollection">
                      <button
                        className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
                        onClick={() => dispatch(setPaymentUpdate(null))}
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
  );
};

export default CreateStudentPayment;
