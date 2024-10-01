"use client";
import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";
import { FaEyeSlash } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { LuUploadCloud } from "react-icons/lu";
import Loader from "../Loading/Loader";

import axios from "axios";

import { storage } from "../../Firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";

import { authModleState } from "../../Atoms/AuthAtom/auth";
import { useSetRecoilState } from "recoil";

function Register() {
  const [isToggled, setIsToggled] = useState(false);
  const [pervViewImage, setPervViewImage] = useState("");
  const [loading, setLoading] = useState(false);
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
    username: "",
    profileImage: null,
    phoneNum: "",
  });

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const image = e.target.files[0];
      let downloadURL = "";
      const storageRef = ref(storage, `profile_images/${image.name}`);
      await uploadBytes(storageRef, image);
      downloadURL = await getDownloadURL(storageRef);
      setValues((prev) => ({ ...prev, profileImage: downloadURL }));
      setPervViewImage(downloadURL);
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrors([]);
      const response = await axios.post(
        "https://besty-backend.vercel.app/api/register",
        values,
        { withCredentials: true }
      );
      ChangeSetAuthModleType("login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors([{ msg: "An unexpected error occurred." }]);
      }
    }
  };

  return (
    <div className="bg-[#9748FF] w-full lg:w-2/3  h-[550px] rounded-[20px] flex justify-center items-center flex-col text-white">
      <h2 className="text-2xl font-medium mb-7">Create your account</h2>
      <div className="w-[90%] md:w-[80%]">
        <form
          action=""
          className="flex flex-col space-y-1"
          onSubmit={handleSubmit}
        >
          <span className="text-white text-[14px]">
            {error.map((e) => e.path === "username" && e.msg)}
          </span>
          <div className="flex bg-white items-center py-2 px-3 border rounded-md">
            <FaRegUser className="mb-[1px] text-black" />
            <input
              type="text"
              className="w-full px-2 outline-none text-black"
              placeholder="User Name"
              name="displayName"
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
          </div>
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
            {error.map((e) => e.path === "phoneNum" && e.msg)}
          </span>
          <div className="flex bg-white items-center py-3 px-3 border rounded-md">
            <MdLocalPhone className="mb-[1px] text-black" />
            <input
              type={"text"}
              className="w-full px-2 outline-none text-black"
              name="password"
              placeholder="Enter Phone Number   "
              onChange={(e) =>
                setValues({ ...values, phoneNum: e.target.value })
              }
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
          <div>
            <input
              type="file"
              className="hidden"
              id="upload"
              accept=".png, .jpg , .gif"
              onChange={handleFileChange}
            />
            {loading ? (
              <div className="bg-white rounded-md">
                <Loader />
              </div>
            ) : pervViewImage && loading === false ? (
              <div className="bg-white py-5 px-5 flex justify-center items-center rounded-md flex-col">
                <Image
                  src={pervViewImage}
                  className="rounded-full w-[60px] h-[60px]"
                  width={50}
                  height={50}
                />
              </div>
            ) : (
              <label
                htmlFor="upload"
                className="bg-white py-5 px-5 flex justify-center items-center rounded-md flex-col"
              >
                <LuUploadCloud color="black" size={25} />
                <span className="text-black text-[13px]">
                  Upload your profile image.
                </span>
              </label>
            )}
          </div>
          <button className="bg-gray-100 text-black py-2 px-2 rounded-lg">
            Sign Up
          </button>
        </form>
        <div>
          <div
            className="flex justify-center mt-4 "
            onClick={() => ChangeSetAuthModleType("login")}
          >
            <span>
              Already have a account?{" "}
              <span className=" hover:underline cursor-pointer">Login</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
