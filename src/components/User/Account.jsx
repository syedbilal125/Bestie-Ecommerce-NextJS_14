"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdAlternateEmail, MdEdit } from "react-icons/md";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/Firebase/firebase";
import axios from "axios";
import Loader from "../Loading/Loader";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiMiniLockClosed } from "react-icons/hi2";

function Account({ UserData }) {
  const router = useRouter();
  const [openBannerImageUploader, setOpenBannerImageUploader] = useState(false);
  const [openDeleteModle, setOpenDeleteModle] = useState(false);

  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevState) => !prevState);
  };

  const handleToggleBanner = () => {
    setOpenBannerImageUploader((prevState) => !prevState);
  };

  const handleToggleDeleteModle = () => {
    setOpenDeleteModle((prevState) => !prevState);
  };

  const [values, setValues] = useState({
    profileBanner: null,
    password: "",
    email: "",
  });
  const [pervViewImage, setPervViewImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const image = e.target.files[0];
      let downloadURL = "";
      const storageRef = ref(storage, `bannarImages/${image.name}`);
      await uploadBytes(storageRef, image);
      downloadURL = await getDownloadURL(storageRef);
      setValues((prev) => ({ ...prev, profileBanner: downloadURL }));
      setPervViewImage(downloadURL);
      setLoading(false);
    }
  };

  const UploadBanner = async () => {
    const res = await axios.put(
      `https://besty-backend.vercel.app/api/user/${UserData.userId}`,
      { profileBanner: values.profileBanner },
      {
        withCredentials: true,
      }
    );
    setOpenBannerImageUploader(false);
    router.refresh();
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token")
    const response = await axios.post(
      `https://besty-backend.vercel.app/api/deleteAccount/${UserData.userId}`,
      {
        email: values.email,
        password: values.password,
      },
      {
        withCredentials: true,
      }
    );
    console.log(values.password)
    const { token } = response.data; // Assuming your backend returns a token upon successful login

    // Store the token securely (e.g., in localStorage or sessionStorage)
    localStorage.setItem('token', token);
    router.push("/");
  };

  return (
    <>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center ">
          {UserData.profileBanner ? (
            <div className="relative w-[100%] h-[100px] lg:h-[200px] flex justify-end items-end rounded-b-2xl">
              <Image
                src={UserData?.profileBanner}
                alt="Description of the image"
                fill
                style={{ objectFit: "cover" }}
                priority
                className="rounded-b-2xl"
              />
              <MdEdit
                onClick={handleToggleBanner}
                color="#9748FF"
                size={35}
                className="p-2 bg-white rounded-full m-6 cursor-pointer relative"
              />
            </div>
          ) : (
            <div className="flex items-end justify-end w-[100%] h-[100px] lg:h-[200px] bg-[#9748FF] rounded-b-md">
              <MdEdit
                onClick={handleToggleBanner}
                color="#9748FF"
                className="p-1 lg:p-2 lg:text-[35px] text-[15px] bg-white rounded-full m-6 cursor-pointer"
              />
            </div>
          )}
          <div className="-translate-y-10">
            <div className="border-white border-[6px] relative rounded-full w-[70px] h-[70px] lg:w-[100px] lg:h-[100px]">
              <Image
                src={UserData?.profileImage}
                alt="UserProfileImage"
                style={{ objectFit: "cover" }}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-full"
                priority
              />
            </div>
            <div className="w-full">
              <div className="text-gray-900 text-center mt-[0.5px] font-bold text-[25px]">
                {UserData?.username}
                <h6 className="text-[10px]"> {UserData?.email}</h6>
              </div>
            </div>
          </div>
        </div>
        <hr className="h-[0.5px] bg-gray-600" />
        <div>hello</div>
        <hr className="h-[0.5px] bg-gray-600" />
        <div className="flex w-[70%] justify-between">
          <h2>Delete Your Account</h2>
          <div>
            <p
              className="text-blue-600 cursor-pointer"
              onClick={handleToggleDeleteModle}
            >
              Delete Account
            </p>
            <h4 className="text-[12px]">
              Deleting your Bestie account will delete all of your ads, your
              stores, and all of your data.
            </h4>
          </div>
        </div>
      </div>

      {openBannerImageUploader && (
        <div className="w-full h-screen fixed top-0  flex justify-center items-center">
          <div
            className="h-screen bg-black top-0 fixed w-full opacity-50 z-10"
            onClick={() => setOpenBannerImageUploader(false)}
          />
          <div className="flex flex-col items-center bg-white right-56 fixed w-1/2 h-[400px] z-20 py-10 rounded-md">
            <h1 className="text-[20px] font-bold">Upload a banner</h1>
            {loading ? (
              <div className="bg-white rounded-md my-auto">
                <Loader />
              </div>
            ) : pervViewImage && loading === false ? (
              <>
                <div className="relative w-[100px] h-[100px] my-16">
                  <Image
                    src={pervViewImage}
                    alt="imgToBeUpload"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="mt-auto">
                  <button
                    onClick={UploadBanner}
                    className="border-[1px] border-gray-400 py-2 px-20 rounded-md cursor-pointer"
                  >
                    Upload
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-auto">
                <input
                  type="file"
                  className="hidden"
                  id="banner"
                  onChange={handleFileChange}
                  accept=".png, .jpg , .gif, .jpeg"
                />
                <label
                  htmlFor="banner"
                  className="border-[1px] border-gray-400 py-2 px-20 rounded-md cursor-pointer"
                >
                  Upload from computer
                </label>
              </div>
            )}
          </div>
        </div>
      )}

      {openDeleteModle && (
        <div className="w-full h-screen fixed top-0  flex justify-center items-center">
          <div
            className="h-screen bg-black top-0 fixed w-full opacity-50 z-10"
            onClick={() => setOpenDeleteModle(false)}
          />
          <div className="flex flex-col items-center bg-white right-56 fixed w-1/2 h-[400px] z-20 py-10 rounded-md">
            <h1 className="text-[20px] font-bold">Delete Your Account</h1>
            <div className="mx-20 mt-5 flex flex-col items-center">
              <p className=" text-start">
                To completely delete your account, please enter your correct
                email & password. Note that this action will permanently delete
                all of your ads, data, and store.
              </p>
            </div>
            <form
              onSubmit={handleDeleteAccount}
              className="mt-10 flex flex-col space-y-2"
            >
              <div className="flex w-full bg-white items-center py-3 px-3 border rounded-md">
                <MdAlternateEmail className="mb-[1px] text-black" />
                <input
                  type="email"
                  className="w-full px-2 outline-none text-black"
                  placeholder="Enter your email"
                  name="email"
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
              <div className="flex w-full my-auto bg-white items-center py-3 px-3 border rounded-md">
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
              <div className="mt-auto ">
                <button className="border-[1px]  border-red-400 py-2 px-28 rounded-md cursor-pointer">
                  Delete Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Account;
