"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { MdAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";
import { FaEyeSlash } from "react-icons/fa";

import axios from "axios";
import { authModleState } from "../../Atoms/AuthAtom/auth";
import { useSetRecoilState } from "recoil";

function Login() {
  const router = useRouter();
  const [isToggled, setIsToggled] = useState(false);
  const [error, setErrors] = useState([]);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  const setAuthModleState = useSetRecoilState(authModleState);
  const ChangeSetAuthModleType = (type) => {
    setAuthModleState((oldType) => ({ ...oldType, type }));
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://besty-backend.vercel.app/api/login', {
        email: values.email,
        password: values.password,
      });

      const { token } = response.data; // Assuming your backend returns a token upon successful login

      // Store the token securely (e.g., in localStorage or sessionStorage)
      localStorage.setItem('token', token);

      router.push('/')
      return token;
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        setErrors(err.response.data.errors);
        console.log(err.response.data.errors);
      } else {
        setErrors([{ msg: "An unexpected error occurred." }]);
      }
    }
  };

  return (
    <div className="bg-[#9748FF] w-full lg:w-2/3  h-[550px] rounded-[20px] flex justify-center items-center flex-col text-white">
      <h2 className="text-2xl font-medium mb-7">Login in to your account</h2>
      <div className="w-[90%] md:w-[80%]">
        <form
          action=""
          className="flex flex-col space-y-1"
          onSubmit={handleSubmit}
        >
          <span className="text-white text-[14px]">
            {error.map((e) => e.path === "email" && e.msg)}
          </span>
          <div className="flex bg-white items-center py-3 px-3 border rounded-md">
            <MdAlternateEmail className="mb-[1px] text-black" />
            <input
              type="email"
              className="w-full px-2 outline-none text-black"
              placeholder="Enter your email"
              name="email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>

          <span className="text-white text-[14px]">
            {error.map((e) => e.path === "password" && e.msg)}
          </span>
          <div className="flex bg-white items-center py-3 px-3 border rounded-md">
            <HiMiniLockClosed className="mb-[1px] text-black" />
            <input
              type={isToggled ? "text" : "password"}
              className="w-full px-2 outline-none text-black"
              name="password"
              placeholder="Enter password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <button type="button" onClick={handleToggle}>
              {isToggled ? (
                <FaEyeSlash className="text-black" />
              ) : (
                <FaEye className="mb-[1px] text-black" />
              )}
            </button>
          </div>

          <button className="bg-gray-100 text-black py-2 px-2 rounded-lg">
            Login
          </button>
        </form>
        <div>
          <div
            className="flex justify-center mt-4 "
            onClick={() => ChangeSetAuthModleType("register")}
          >
            <span>
              Dont have a account?{" "}
              <span className=" hover:underline cursor-pointer">Register</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
