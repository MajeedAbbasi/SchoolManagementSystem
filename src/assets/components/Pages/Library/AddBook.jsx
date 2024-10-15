import React, { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setUpdate } from "../../../Slices/BookSlice";
const AddBook = () => {
  const [showhidden, setShowhidden] = useState(false);
  const [bookData, setBookData] = useState({
    bookName: "",
    subject: "",
    writerName: "",
    class: "",
    publishing: "",
    uploadDate: "",
    ID: "",
    uniqueid: "",
  });
  const dispatch = useDispatch();
  let view = useSelector((state) => state.BookSlice.BookUpdate);

  useEffect(() => {
    if (view !== null) {
      setBookData((prev) => ({
        ...prev,
        ...view,
      }));
    }
  }, [view]);
  const HideShow = () => {
    setShowhidden(!showhidden);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let unique =
      "id-" + Date.now() + "-" + Math.random().toString(36).substr(2, 9);
    console.log(unique);
    const updatedBookData = {
      ...bookData,
      uniqueid: unique,
    };
    const existingData = JSON.parse(localStorage.getItem("bookData")) || [];
    const updatedData = [...existingData, updatedBookData];
    localStorage.setItem("bookData", JSON.stringify(updatedData));
    setBookData({
      bookName: "",
      subject: "",
      writerName: "",
      class: "",
      publishing: "",
      uploadDate: "",
      ID: "",
      uniqueid: "",
    });
  };

  const handleUpdata = () => {
    let storedData = JSON.parse(localStorage.getItem("bookData"));
    console.log(storedData);
    let updatedData = storedData.map((value) => {
      if (value.uniqueid === bookData.uniqueid) {
        return { ...value, ...bookData };
      }
      return value;
    });
    localStorage.setItem("bookData", JSON.stringify(updatedData));
    dispatch(setUpdate(null));
  };

  const HandleClose = () => {
    localStorage.clear("bookData");
  };

  return (
    <div className="bg-gray-300  lg:h-full flex flex-col lg:w-[100%] fadeInLeftToRightCustom z-0">
      <div className="h-8 ml-14 flex pt-1 lg:h-8  bg-white mt-16 w-[1080px] pl-1 ">
        <h1 className=" font-semibold  w-[300px]">Add Books</h1>
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
          <IoClose
            className="text-red-500 cursor-pointer h-7 w-7 ml-3"
            onClick={HandleClose}
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
                  Book Name
                </label>
                <input
                  required
                  type="text"
                  name="bookName"
                  value={bookData.bookName}
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
                  value={bookData.subject}
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
                  Writer Name
                </label>
                <input
                  required
                  type="text"
                  name="writerName"
                  value={bookData.writerName}
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
                  value={bookData.class}
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
                  Publishing Year
                </label>
                <input
                  required
                  type="text"
                  name="publishing"
                  value={bookData.publishing}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-1">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Upload Date
                </label>
                <input
                  required
                  type="date"
                  name="uploadDate"
                  value={bookData.uploadDate}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  ID No
                </label>
                <input
                  required
                  type="number"
                  name="ID"
                  value={bookData.ID}
                  onChange={handleChange}
                  className="w-56 h-8 bg-gray-100  shadow-sm focus:outline-none  pl-2  focus:ring-1 focus:ring-gray-400 focus:border rounded-sm"
                />
              </div>

              <div className="col-span-1 mr-[73px]">
                {view === null ? (
                  <div className="mt-6 ml-52 flex justify-end space-x-4">
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
                  <div className="mt-6 ml-52 flex justify-end space-x-4">
                    <NavLink to="/library/allbooks">
                      <button
                        onClick={handleUpdata}
                        className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      >
                        Update
                      </button>
                    </NavLink>
                    <NavLink to="/library/allbooks">
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
  );
};

export default AddBook;
