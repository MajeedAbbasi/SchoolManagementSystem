import React, { useState } from "react";
import "./SignupLogin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAccess } from "../../../Slices/AccessSlice";
const SignUpLogin = () => {
  const [signup, setSignUp] = useState({
    UserName: "",
    Password: "",
    email: "",
  });
  const [login, setLogin] = useState({
    Password: "",
    email: "",
    type: true,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUp({
      ...signup,
      [name]: value,
    });
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const SignupSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("loginData", JSON.stringify(signup));
    alert("signup hogya");
    setSignUp({
      UserName: "",
      Password: "",
      email: "",
    });
  };
  const LoginSubmit = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("loginData"));

    if (data) {
      if (data.email === login.email && data.Password === login.Password) {
        console.log("yes");
        localStorage.setItem("login", JSON.stringify(login));
        dispatch(setAccess(true));
        // setLogin((prev) => {
        //   //   const updatedLogin = { ...prev, type: true };
        //   return updatedLogin;
        // });
        // console.log(login);
        navigate("/dashboard");
      } else {
        alert("please Enter a valid Email or Password ");
      }
    } else {
      alert("please Enter a valid Email or Password ");
    }
  };
  let logindata = localStorage.getItem("login");
  console.log(logindata);
  return (
    <div>
      <div className="main mt-[8%] ml-[40%]">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form onSubmit={SignupSubmit}>
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="UserName"
              value={signup.UserName}
              onChange={handleChange}
              placeholder="User name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
              value={signup.email}
            />
            <input
              type="password"
              name="Password"
              onChange={handleChange}
              value={signup.Password}
              placeholder="Password"
              required
            />
            <button className="bg-yellow-400 hover:bg-yellow-500">
              Sign up
            </button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={LoginSubmit}>
            <label htmlFor="chk" aria-hidden="true" className="">
              Login
            </label>
            <input
              type="email"
              name="email"
              value={login.email}
              placeholder="Email"
              onChange={handlechange}
              required
            />
            <input
              type="password"
              name="Password"
              value={login.Password}
              placeholder="Password"
              onChange={handlechange}
              required
            />

            <button className="bg-yellow-400  hover:bg-yellow-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpLogin;
