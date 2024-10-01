"use client";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { userPageModle } from "@/Atoms/UserAtom/user";
import UserModle from "../User/UserPage";
import axios from "axios";
import { useRouter } from "next/navigation";

function UserClientSide({ userData }) {
  const router = useRouter();
  // For Change the components
  const setUserModleState = useSetRecoilState(userPageModle);
  const ChangeUserState = (type) => {
    setUserModleState((oldtype) => ({ ...oldtype, type }));
  };

  const logout = async () => {
    localStorage.removeItem("token")
    try {
      const res = await axios.post("https://besty-backend.vercel.app/api/logout", {}, {
        withCredentials: true,
      });
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="flex">
      {/* Side bar */}
      <div className="bg-[#9748FF] h-screen sticky top-0 w-1/4 py-20 hidden md:block">
        <div className="mx-10 flex flex-col justify-between h-full">
          <div className="text-white">
            {userData.isAdmin ? (
              <ul className="mt-5 space-y-4">
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() => ChangeAdminModelState("accountSettings")}
                >
                  Account Settings
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() => ChangeAdminModelState("staffPanal")}
                >
                  Staff Panal
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() => ChangeAdminModelState("getAllUser")}
                >
                  Get All Users
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() => ChangeAdminModelState("getAllEnrollements")}
                >
                  Get All Enrollements
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() => ChangeAdminModelState("getAllFAQ")}
                >
                  Get All FAQS
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() => ChangeAdminModelState("MakeCourse")}
                >
                  Make A Course
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                // onClick={() =>
                //   ChangeAdminModelState("Youtube_testimonials")
                // }
                >
                  Add Youtube Video
                </li>
              </ul>
            ) : (
              <ul className="mt-7 space-y-4">
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                  onClick={() => ChangeUserState("account")}
                >
                  Account Settings
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                  onClick={() => ChangeUserState("yourorders")}
                >
                  Your Orders
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                  onClick={() => ChangeUserState("logindetails")}
                >
                  Login Details
                </li>
                <li
                  className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer"
                  onClick={() => ChangeUserState("customerservice")}
                >
                  Customer Service
                </li>
              </ul>
            )}
          </div>
          <div>
            <div
              className="text-[18px] hover:translate-x-2 duration-500 cursor-pointer text-white flex items-center space-x-2"
              onClick={logout}
            >
              <HiOutlineLogout /> <span>Logout</span>
            </div>
            <Link
              href="/"
              className="flex items-center mt-3 space-x-2 text-[18px] hover:translate-x-2 duration-500 cursor-pointer text-white"
            >
              <IoArrowBackOutline className="mb-[3px] " /> <span>Go Back</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <UserModle userData={userData} />
      </div>
    </div>
  );
}

export default UserClientSide;
