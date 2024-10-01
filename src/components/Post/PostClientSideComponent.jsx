"use client"
import React from "react";
import PostModelClient from "./FeedModel";
import { FaFileCircleXmark } from "react-icons/fa6";

function PostClientSideComponent() {

  return (
    <div className="mt-24 mb-10 max-w-5xl mx-auto lg:space-x-5 lg:flex-row flex-col flex">
      <PostModelClient />
      <div className="w-full p-5 lg:p-0 lg:w-[30%] flex flex-col space-y-8">
        <div className="p-4 border-[0.5px] rounded-md border-gray-300 text-gray-600">
          <h6 className="text-[15px]">Free Ad Limit</h6>
          <div className="flex items-center space-x-2 mt-1">
            <FaFileCircleXmark size={20} />
            <span className="text-[12px]">9/10</span>
          </div>
        </div>
        <div className="p-4 border-[0.5px] rounded-md border-gray-300">
          <h1 className="text-[20px] font-semibold text-gray-700">
            How To Sell Quickly?
          </h1>
          <ul className="flex flex-col space-y-4 text-gray-600 text-[13px] mt-4">
            <li>Use a brief title and description of the item.</li>
            <li>Make sure you post in the correct category</li>
            <li>Add nice photos to your ad</li>
            <li>Put a reasonable price</li>
            <li>Check the item before publish</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostClientSideComponent;
