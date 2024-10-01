"use client";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaLocationDot, FaShareNodes, FaStar } from "react-icons/fa6";
import { GrFormNextLink } from "react-icons/gr";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoCallOutline, IoSearchOutline } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiDotsHorizontal } from "react-icons/hi";
import { storage } from "@/Firebase/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Loader from "../Loading/Loader";
import axios from "axios";
import { useRouter } from "next/navigation";
import { MdOutlineDone } from "react-icons/md";

function CurrrentUserStore({ storeData }) {
  const router = useRouter();
  const modileProducts = [
    {
      id: 1,
      name: "Galaxy S21",
      model: "SM-G991B",
      price: 799.99,
      city: "Lahore",

      image:
        "https://www.cnet.com/a/img/resize/7f200ddcfc7e2e3b2e5fabdb62050058f6f00b25/hub/2021/01/14/6d35fb74-a413-4726-9668-e2fc754f44cb/samsung-galaxy-s21-06173.jpg?auto=webp&fit=crop&height=1200&width=1200",
      date: "2021-01-29",
      description:
        "The Galaxy S21 features a 6.2-inch display, triple rear cameras, and the Exynos 2100 processor.",
    },
    {
      name: "iPhone 13",
      id: 2,
      model: "A2633",
      price: 899.0,
      date: "2021-09-24",
      city: "Lahore",
      image:
        "https://static-01.daraz.pk/p/d897087a1022be8d2b368903f2470ad0.jpg_750x750.jpg_.webp",
      description:
        "iPhone 13 offers a new design, improved cameras, and the powerful A15 Bionic chip.",
    },
    {
      id: 3,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
    {
      id: 4,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
    {
      id: 5,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
    {
      id: 6,
      name: "Pixel 6",
      model: "GA01341-US",
      price: 599.0,
      city: "Lahore",
      date: "2021-10-28",
      image:
        "https://mobiletrade.pk/wp-content/uploads/2023/12/Pixel-6-Pro-2.jpg.webp",
      description:
        "Google Pixel 6 comes with a 6.4-inch display, Google Tensor processor, and advanced camera features.",
    },
  ];
  const [values, setValues] = useState({
    storeBanner: null,
    password: "",
    email: "",
    storeName: "",
    storeDescription: "",
    sellerAddress: "",
  });
  const [results, setResults] = useState(modileProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const searchQueryFunction = (e) => {
    e.preventDefault();

    function searchByName(name) {
      return modileProducts.filter((product) =>
        product.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    const results = searchByName(searchTerm);
    setResults(results);
  };

  const [openBannerImageUploader, setOpenBannerImageUploader] = useState(false);
  const handleToggleBanner = () => {
    setOpenBannerImageUploader((prevState) => !prevState);
  };

  const [openStoreDescription, setOpenStoreDescription] = useState(false);
  const handleToggleStoreDescription = () => {
    setOpenStoreDescription((prevState) => !prevState);
  };

  const [openStoreLocation, setOpenStoreLocation] = useState(false);
  const handleToggleStoreLocation = () => {
    setOpenStoreLocation((prevState) => !prevState);
  };

  const [storeName, setStoreName] = useState(false);
  const handleToggleStoreName = () => {
    setStoreName((prevState) => !prevState);
  };
  const [pervViewImage, setPervViewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleFileChange = async (e) => {
    if (e.target.files && e.target.files[0]) {
      setLoading(true);
      const image = e.target.files[0];
      let downloadURL = "";
      const storageRef = ref(storage, `storeBannerImages/${image.name}`);
      await uploadBytes(storageRef, image);
      downloadURL = await getDownloadURL(storageRef);
      setValues((prev) => ({ ...prev, storeBanner: downloadURL }));
      setPervViewImage(downloadURL);
      setLoading(false);
    }
  };

  const UploadBanner = async () => {
    const res = await axios.put(
      `https://besty-backend.vercel.app/api/store/updateStoreBanner/${storeData.map(
        (item) => item._id
      )}`,
      { storeBanner: values.storeBanner },
      {
        withCredentials: true,
      }
    );
    setOpenBannerImageUploader(false);
    router.refresh();
  };

  const UpdateStoreName = async () => {
    const res = await axios.put(
      `https://besty-backend.vercel.app/api/store/updateStoreName/${storeData.map(
        (item) => item._id
      )}`,
      { storeName: values.storeName },
      {
        withCredentials: true,
      }
    );
    setStoreName(false);
    router.refresh();
  };

  const UpdateStoreDescription = async () => {
    const res = await axios.put(
      `https://besty-backend.vercel.app/api/store/updateStoreDescription/${storeData.map(
        (item) => item._id
      )}`,
      { storeDescription: values.storeDescription },
      {
        withCredentials: true,
      }
    );
    setOpenStoreDescription(false);
    router.refresh();
  };
  const UpdateStoreLocation = async () => {
    const res = await axios.put(
      `https://besty-backend.vercel.app/api/store/updateStoreLocation/${storeData.map(
        (item) => item._id
      )}`,
      { sellerAddress: values.sellerAddress },
      {
        withCredentials: true,
      }
    );
    setOpenStoreDescription(false);
    router.refresh();
  };
  return (
    <div className="w-full">
      <div className="max-w-6xl mx-auto m-32 mb-10">
        {storeData.map((item) => (
          <div key={item._id}>
            <div>
              <div className="flex justify-between space-x-10">
                <div className="w-full ">
                  <div className="w-full md:border-[0.5px] lg:border-[0.5px] border-gray-300 rounded-t-lg">
                    {item.storeBanner ? (
                      <div className="relative w-[100%] h-[100px] lg:h-[300px]  flex justify-end items-end">
                        <Image
                          src={item.storeBanner}
                          alt={item.storeName}
                          fill
                          style={{ objectFit: "cover" }}
                          className="rounded-t-lg"
                          priority
                        />
                        <MdEdit
                          onClick={handleToggleBanner}
                          color="#9748FF"
                          size={35}
                          className="p-2 bg-white rounded-full m-6 cursor-pointer relative"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-[350px] bg-[#q] rounded-t-lg flex justify-end items-end">
                        <MdEdit
                          onClick={handleToggleBanner}
                          color="#9748FF"
                          size={35}
                          className="p-2 bg-white rounded-full m-6 cursor-pointer relative"
                        />
                      </div>
                    )}
                    <div className="">
                      <div className="flex items-center justify-between m-5 lg:p-5">
                        <div className="flex md:flex-row flex-col items-start space-x-3 lg:items-center ">
                          <Image
                            src={item.storeLogo}
                            className="w-[100px] h-[100px] rounded-full"
                            alt="logo"
                            width={300}
                            height={300}
                          />
                          <div className="flex flex-col space-y-[0.5px]">
                            <h1 className="text-[24px] text-gray-800 flex items-center space-x-2">
                              {storeName ? (
                                <input
                                  type="text"
                                  className="outline-none"
                                  autoFocus
                                  placeholder={item.storeName}
                                  onChange={(e) =>
                                    setValues({
                                      storeName: e.target.value,
                                    })
                                  }
                                />
                              ) : (
                                <span>{item.storeName}</span>
                              )}
                              {storeName ? (
                                <MdOutlineDone
                                  onClick={UpdateStoreName}
                                  className="cursor-pointer"
                                />
                              ) : (
                                <MdEdit
                                  color="#9748FF"
                                  size={17}
                                  onClick={handleToggleStoreName}
                                  className=" rounded-full cursor-pointer relative"
                                />
                              )}
                            </h1>
                            <h5 className="text-[16px] text-gray-700">
                              Published Ads {item.publishedProducts.length}
                            </h5>
                            <h5 className="text-[12px] text-gray-700">
                              Member Since{" "}
                              {moment(item.createdAt).format("MMMM YYYY")}
                            </h5>
                            <div className="cursor-pointer text-[12px] text-gray-700">
                              {item.followers.length} Followers
                            </div>
                            <div className="flex space-x-1 items-center text-[14px] text-gray-800">
                              <h6>Ratings & Reviews</h6>
                              <GrFormNextLink />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="px-5 lg:px-10 lg:flex-row flex-col items-start flex lg:items-center space-y-3 lg:space-y-0 w-full lg:space-x-12">
                        <div className="flex w-full lg:w-1/2 justify-between items-center">
                          <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                            <AiFillLike /> <span>{item.likes.length}</span>
                          </button>
                          <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                            <FaShareNodes /> <span>Share</span>
                          </button>
                          <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                            <FaStar /> <span>e</span>
                          </button>
                          <button className="flex bg-gray-100 rounded-full space-x-1 py-1 px-3 text-[12px] text-gray-800 items-center">
                            <HiBuildingOffice2 /> <span>{item.storeType}</span>
                          </button>
                        </div>
                        <div className="w-full lg:w-1/2">
                          <form
                            onSubmit={searchQueryFunction}
                            className="bg-white border-[0.5px] px-2 border-gray-200 rounded-full py-1 flex items-center"
                          >
                            <IoSearchOutline size={20} />
                            <input
                              type="text"
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="focus:outline-none mx-2 w-full"
                              placeholder="search in store"
                            />
                            <button className="bg-[#9748FF] text-white text-[14px] py-1 px-2 rounded-full">
                              search
                            </button>
                          </form>
                        </div>
                      </div>
                      <hr className="lg:my-7 my-5" />
                      <div className="mx-5 lg:mx-10 mb-10 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-3">
                        {item.publishedProducts.length === 0
                          ? results.map((item) => (
                              <div
                                className="border-gray-400 border-[0.5px] w-full lg:w-[240px] rounded-md"
                                key={item.id}
                              >
                                <Link href={`/item/${item.id}`}>
                                  <div className="relative w-full h-[200px]">
                                    <Image
                                      src={item.image}
                                      alt={item.name}
                                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                      className="w-full rounded-t-md "
                                      fill
                                      style={{ objectFit: "cover" }}
                                    />
                                  </div>
                                </Link>
                                <div className="p-3">
                                  <div className="flex items-center justify-between">
                                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                                      Rs {item.price}
                                    </h1>
                                    <div className="h-[20px] w-[20px] flex items-center justify-center cursor-pointer rounded-full bg-[#9748FF]">
                                      <HiDotsHorizontal
                                        color="white"
                                        size={10}
                                      />
                                    </div>
                                  </div>
                                  <h2 className="text-gray-800 mt-1">
                                    {item.name}
                                  </h2>
                                  <div className="pb-3 pt-5 flex justify-between">
                                    <h1 className="text-gray-800">
                                      {item.city}
                                    </h1>
                                    <h2 className="text-gray-800">
                                      {item.date}
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            ))
                          : "e"}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 lg:block hidden sticky h-[100vh] top-[140px]">
                  <div className="flex flex-col space-y-5">
                    <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 py-5 px-6">
                      <h2 className="text-gray-800 font-bold text-xl">
                        Contact Seller
                      </h2>
                      <div className="text-sm mt-2 bg-[#9748FF] flex items-center text-white py-4 cursor-pointer hover:border-[#9748FF] hover:border-[0.5px] animate-pulse hover:animate-none hover:bg-white duration-200 hover:text-black px-4 rounded-lg space-x-2">
                        <IoCallOutline size={25} />{" "}
                        <span className="text-[17px]"> Edit Phone Number</span>
                      </div>
                    </div>
                    <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 py-5 px-6">
                      <h2 className="text-gray-800 font-bold text-xl flex items-center justify-between">
                        <span>About Store</span>{" "}
                        {openStoreDescription ? (
                          <MdOutlineDone
                            onClick={UpdateStoreDescription}
                            className="cursor-pointer"
                          />
                        ) : (
                          <MdEdit
                            color="#9748FF"
                            size={17}
                            onClick={handleToggleStoreDescription}
                            className=" rounded-full cursor-pointer relative"
                          />
                        )}
                      </h2>
                      <h5 className="text-gray-700 text-sm mt-2 flex space-x-2">
                        <div>
                          <RiErrorWarningLine />
                        </div>
                        {openStoreDescription ? (
                          <textarea
                            onChange={(e) =>
                              setValues({ storeDescription: e.target.value })
                            }
                            placeholder={item?.storeDescription}
                            className="outline-none resize-none"
                            autoFocus
                            name=""
                            id=""
                          ></textarea>
                        ) : (
                          <span className="">{item?.storeDescription}</span>
                        )}
                      </h5>
                    </div>
                    <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 py-5 px-6">
                      <h2 className="text-gray-800 font-bold text-xl flex items-center justify-between">
                        <span>Location</span>{" "}
                        {storeName ? (
                          <MdOutlineDone
                            onClick={UpdateStoreLocation}
                            className="cursor-pointer"
                          />
                        ) : (
                          <MdEdit
                            color="#9748FF"
                            size={17}
                            onClick={handleToggleStoreLocation}
                            className=" rounded-full cursor-pointer relative"
                          />
                        )}
                      </h2>
                      <h5 className="text-gray-700 text-sm mt-2 flex space-x-2 items-center w-full">
                        <FaLocationDot />
                        {openStoreLocation ? (
                          <input
                            type="text"
                            className="outline-none"
                            autoFocus
                            placeholder={item.sellerAddress}
                            onChange={(e) =>
                              setValues({
                                sellerAddress: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <span>{item.sellerAddress}</span>
                        )}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openBannerImageUploader && (
        <div className="w-full h-screen fixed top-0  flex justify-center items-center">
          <div
            className="h-screen bg-black top-0 fixed w-full opacity-50"
            onClick={() => setOpenBannerImageUploader(false)}
          />
          <div className="flex flex-col items-center bg-white justify-center mt-20 fixed w-1/2 h-[400px] z-20 py-10 rounded-md">
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
    </div>
  );
}

export default CurrrentUserStore;
