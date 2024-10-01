"use client";
import { PostModel } from "@/Atoms/PostAtom/post";
import React from "react";
import { BiSolidBrushAlt } from "react-icons/bi";
import { CiMobile3 } from "react-icons/ci";
import { FaTshirt } from "react-icons/fa";
import { FaCar, FaHeadphones, FaHouseChimney, FaKey } from "react-icons/fa6";
import { GiSecretBook, GiSofa } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdBriefcase } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import {
  MdArrowForwardIos,
  MdBusinessCenter,
  MdOutlinePets,
} from "react-icons/md";
import { useRecoilState, useSetRecoilState } from "recoil";

function Select() {
  const setFeedsState = useSetRecoilState(PostModel);
  const [feedsState, setFeedsStatE] = useRecoilState(PostModel);

  const ChangeSetAuthModleType = (type) => {
    setFeedsState((oldType) => ({ ...oldType, type }));
    setFeedsStatE((oldType) => ({ ...oldType, type }));
  };
  return (
    <div className="mx-5 lg:mx-0 rounded-md border-gray-300 border-[0.5px] px-2 py-5 md:p-6">
      <h1 className="text-center font-semibold text-3xl text-gray-800">
        POST AD
      </h1>
      <h4 className="font-extrabold ml-3 lg:ml-0 text-gray-700 text-[20px] mb-3">
        Select Category
      </h4>
      <div className=" grid grid-cols-1 mx-3 md:mx-0 md:grid-cols-2 gap-3">
        <div
          onClick={() => ChangeSetAuthModleType("Mobiles")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full text-orange-900 bg-orange-200">
              <CiMobile3 size={20} />
            </div>
            <span>Mobiles</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Vehicles")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-purple-200 text-purple-900">
              <FaCar />
            </div>
            <span>Vehicles</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Propertys")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-green-200 text-green-900">
              <FaHouseChimney />
            </div>
            <span>Propertys</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("RentPropertys")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-lime-200 text-lime-900">
              <FaKey />
            </div>
            <span>Rent Propertys</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Electronics")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-red-200 text-red-900">
              <FaHeadphones />
            </div>
            <span>Electronics</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Business")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-cyan-200 text-cyan-900">
              <MdBusinessCenter />
            </div>
            <span>Business</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Services")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-yellow-200 text-yellow-900">
              <BiSolidBrushAlt />
            </div>
            <span>Services</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Jobs")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-indigo-200 text-indigo-900">
              <IoMdBriefcase />
            </div>
            <span>Jobs</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Animals")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-emerald-200 text-emerald-900">
              <MdOutlinePets />
            </div>
            <span>Animals</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Furniture")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-violet-200 text-violet-900">
              <GiSofa />
            </div>
            <span>Furniture</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Fashion")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-teal-200 text-teal-900">
              <IoDiamondOutline />
            </div>
            <span>Fashion</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Books")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-indigo-200 text-indigo-900">
              <GiSecretBook />
            </div>
            <span>Books</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Kids")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-fuchsia-200 text-fuchsia-900">
              <FaTshirt />
            </div>
            <span>Kids</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
        <div
          onClick={() => ChangeSetAuthModleType("Food")}
          className="border-gray-300 flex border-[0.5px] rounded-md px-5 justify-between group py-4 cursor-pointer items-center"
        >
          <div className="flex space-x-3 items-center">
            <div className="p-4 rounded-full bg-sky-200 text-sky-900">
              <ImSpoonKnife />
            </div>
            <span>Food</span>
          </div>
          <div className="group-hover:translate-x-1 duration-300">
            <MdArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
