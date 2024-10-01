"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrFormNextLink } from "react-icons/gr";
import FeedModel from "./FeedModel";
import { useRecoilState, useSetRecoilState } from "recoil";
import { StoreModel } from "@/Atoms/FeedAtom/feed";

const getFollowedStores = async (followedStores) => {
  try {
    const res = await axios.post(
      "https://besty-backend.vercel.app/api/store/getfollowedstore",
      { storeIds: followedStores },
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching followed stores", error);
    return null;
  }
};

const getCurrentUser = async () => {
  const jwtToken = localStorage.getItem("token");
  try {
    const response = await axios.get("https://besty-backend.vercel.app/api/currentuser", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const currentUser = response.data;
    return currentUser;
  } catch (error) {
    console.error("Failed to fetch current user:", error);
    throw error;
  }
};

const getLogginedUserStoreProducts = async (id) => {
  try {
    const res = await axios.get(
      `https://besty-backend.vercel.app/api/users/products/${id}`,
      {
        withCredentials: true,
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching stores:", error);
    throw error;
  }
};

function FeedClientSideComponent({ storesData, allProducts, storeData }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [followedStoresData, setFollowedStoresData] = useState([]);
  const [loginedUserProducts, setLoginedUserProducts] = useState([]);
  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      setCurrentUser(user);
      console.log(user)
      const loginedUserProducts = await getLogginedUserStoreProducts(user.storeId);
      setLoginedUserProducts(loginedUserProducts)
      if (user && user.followedStores.length > 0) {
        const followedStores = await getFollowedStores(user.followedStores);
        setFollowedStoresData(followedStores);
      }
    };
    fetchCurrentUser();
  }, []);

  const setFeedsState = useSetRecoilState(StoreModel);
  const [feedsState, setFeedsStatE] = useRecoilState(StoreModel);

  const ChangeSetAuthModleType = (type) => {
    setFeedsState((oldType) => ({ ...oldType, type }));
    setFeedsStatE((oldType) => ({ ...oldType, type }));
  };

  return (
    <div className="mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex lg:space-x-5 w-full justify-between">
          {/* Followed Stores */}
          <div className="lg:block hidden w-[22%] sticky top-[130px] overflow-x-auto overflow-y-hidden h-[100%]">
            <div className=" mb-4">
              <div className="border-[0.5px] flex space-x-3 items-center border-gray-300 py-4 px-3 rounded-lg">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => ChangeSetAuthModleType("allFeeds")}
                    className={`py-2 px-5 rounded-full border-[2px] hover:bg-[#6f00ff] border-[#6f00ff] bg-[#eddfff] hover:text-white duration-500 text-[#9748FF] ${
                      feedsState.type === "allFeeds" &&
                      "bg-[#7827e2] text-white"
                    }`}
                  >
                    All Feed
                  </button>
                  <button
                    onClick={() => ChangeSetAuthModleType("followings")}
                    className={`py-2 px-5 rounded-full border-[2px] hover:bg-[#6f00ff] border-[#6f00ff] bg-[#eddfff] hover:text-white duration-500 text-[#9748FF] ${
                      feedsState.type === "followings" &&
                      "bg-[#7827e2] text-white"
                    }`}
                  >
                    Following
                  </button>
                </div>
              </div>
            </div>
            <div className=" mb-10">
              <div className="border-[0.5px] border-b-[0px] flex space-x-3 items-center border-gray-300 py-4 px-5 rounded-t-lg">
                <span className="text-[20px] text-gray-900 font-semibold">
                  Followed Feeds
                </span>
                <span className="py-1.5 text-[13px] text-white px-4 rounded-full bg-[#bc88ff]">
                  {followedStoresData.length}
                </span>
              </div>
              <div className="border-[0.5px] border-gray-300 flex flex-col justify-center space-y-3">
                {followedStoresData.map((item) => (
                  <div
                    className="border-t-[0.5px] py-2 justify-between rounded-lg flex items-center space-x-2"
                    key={item._id}
                  >
                    <Link href={`/profile/${item._id}`}>
                      <div className="flex items-center space-x-2 mx-4 my-2">
                        <div className="relative w-[40px] h-[40px]">
                          <Image
                            src={item.storeLogo}
                            alt={item.storeName}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="w-full rounded-full"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <h4 className="text-[12px] w-1/2 truncate">
                          {item.storeName}
                        </h4>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full mx-5 lg:mx-0 lg:w-1/2 mb-10">
            <div className="grid lg:grid-cols-1 ">
              <FeedModel
                storesData={storesData}
                allProducts={allProducts}
                storeData={storeData}
                loginedUserProducts={loginedUserProducts}
              />
            </div>
          </div>
          <div className="lg:block hidden w-[22%] sticky top-[130px] overflow-x-auto overflow-y-hidden h-[100%]">
            <div className=" mb-4">
              <div className="border-[0.5px] flex space-x-3 items-center border-gray-300 py-4 px-3 rounded-lg">
                <div className="flex items-center space-x-1">
                  <div className="border-white border-[6px] relative rounded-full w-[20px] h-[20px] lg:w-[50px] lg:h-[50px]">
                    <Image
                      src={currentUser?.profileImage}
                      alt="user profile image"
                      style={{ objectFit: "cover" }}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
                      className="rounded-full"
                      priority
                    />
                  </div>
                  <div
                    onClick={() => ChangeSetAuthModleType("currentUser")}
                    className="flex items-center space-x-2 group cursor-pointer"
                  >
                    <span>Profile</span>{" "}
                    <GrFormNextLink className="group-hover:translate-x-1 duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedClientSideComponent;
