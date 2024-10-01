"use client";
import Image from "next/image";
import React, { useState } from "react";
import EmblaCarousel from "../Embla/Swipper";
import { RiErrorWarningLine, RiTwitterXFill } from "react-icons/ri";
import moment from "moment";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoCallOutline, IoShareSocial } from "react-icons/io5";
import { CiChat1, CiHeart } from "react-icons/ci";
import {
  FaFacebookF,
  FaFlag,
  FaLocationDot,
  FaShareNodes,
  FaWhatsapp,
} from "react-icons/fa6";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { MdOutlineEmail } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { SiMicrosoftstore } from "react-icons/si";

function SingleItem({ product, user }) {
  const joinData = moment(user.createdAt).format("MMMM YYYY");
  const sellerPhoneNum = user.sellerPhoneNum;
  const whatsAppURL = ` https://wa.me/92${sellerPhoneNum}`;
  const [showNumber, setShowNumber] = useState(false);

  const ShareURL = (id) => {
    return `https://bestie-frontend.vercel.app/item/${id}`;
  };


  const googleMapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    product.sellerLocation
  )}`;

  const formattedNumber = product.productPrice.toLocaleString("en-PK", {
    currency: "PKR",
    minimumFractionDigits: 0,
  });

  function getTimeFromNow(dateString) {
    const timestamp = moment(dateString).valueOf(); // Convert to timestamp
    const now = moment(); // Current time
    const timeFromNow = moment.duration(now.diff(timestamp)); // Calculate the difference

    if (timeFromNow.asSeconds() < 60) {
      return `${Math.floor(timeFromNow.asSeconds())} seconds ago`;
    } else if (timeFromNow.asMinutes() < 60) {
      return `${Math.floor(timeFromNow.asMinutes())} minutes ago`;
    } else if (timeFromNow.asHours() < 24) {
      return `${Math.floor(timeFromNow.asHours())} hours ago`;
    } else if (timeFromNow.asDays() < 7) {
      return `${Math.floor(timeFromNow.asDays())} days ago`;
    } else if (timeFromNow.asWeeks() < 4) {
      return `${Math.floor(timeFromNow.asWeeks())} weeks ago`;
    } else if (timeFromNow.asMonths() < 12) {
      return `${Math.floor(timeFromNow.asMonths())} months ago`;
    } else {
      return `${Math.floor(timeFromNow.asYears())} years ago`;
    }
  }
  const [productId, setProductId] = useState('');
  const [openItemShareSocials, setOpenItemShareSocials] = useState(false);
  const [sharingProductName, setSharingProductName] = useState("");
  const handleOpenShare = (productName, productId) => {
    setOpenItemShareSocials((prevState) => !prevState);
    setProductId(productId);
    setSharingProductName(productName);
  };

  const handleOpenPeopleApp = () => {
    window.location.href = "ms-people://home";
  };

 
  return (
    <div className="mt-24 mx-5 max-w-6xl lg:mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-10">
        <div className="w-full flex flex-col space-y-3 mb-10">
          <div className="w-full md:border-[0.5px] lg:border-[0.5px] border-gray-300 rounded-lg">
            <EmblaCarousel productImages={product.productImages} />
          </div>
          <div className="w-full md:border-[0.5px] lg:border-[0.5px] text-gray-700 border-gray-300 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[25px] font-extrabold">
                Rs. {formattedNumber}
              </h1>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full cursor-pointer">
                  <CiHeart size={30} />
                </div>
                <div onClick={() => handleOpenShare(product.productName,product._id)} className="p-2 rounded-full hover:bg-[#d8b9ff] duration-500  cursor-pointer">
                  <IoShareSocial size={30} />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="font-bold capitalize">{product.productName}</h5>
              <div className="flex justify-between mt-6">
                <div className="flex items-center text-[14px] space-x-1">
                  <FaLocationDot /> <span>{product.sellerLocation}</span>
                </div>
                <span className="text-[14px]">
                  {getTimeFromNow(product.createdAt)}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:border-[0.5px] lg:border-[0.5px] text-gray-700 border-gray-300 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[25px] text-black font-extrabold">Details</h1>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mt-4">
                <ul className="grid grid-cols-1 gap-y-4 list-decimal ml-5">
                  {product.productDetails.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:border-[0.5px] lg:border-[0.5px] text-gray-700 border-gray-300 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <h1 className="text-[25px] text-black font-extrabold">
                Description
              </h1>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mt-4">
                <ul className="grid grid-cols-1 gap-y-4 list-decimal ml-5">
                  {product.productDescriptionPoints.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 mt-5 lg:mt-0">
          <div className="flex flex-col space-y-5">
            <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 p-5">
              <div className="flex items-center justify-between">
                <div className="flex md:flex-row flex-col items-start space-x-3 lg:items-center ">
                  <Image
                    src={user.storeLogo}
                    className="w-[60px] h-[60px] rounded-full"
                    alt="logo"
                    width={300}
                    height={300}
                  />
                  <div className="flex flex-col space-y-[0.5px]">
                    <h1 className="text-[1.25rem] font-bold text-gray-700">
                      {user.storeName}
                    </h1>
                    <h5 className="text-[16px] text-gray-600">
                      Member Since {joinData}
                    </h5>
                    <Link
                      href={`/profile/${user._id}`}
                      className="text-[14px] font-bold text-gray-700 group flex items-center space-x-1"
                    >
                      <span>See Profile</span>{" "}
                      <IoIosArrowRoundForward className="group-hover:translate-x-1 duration-1000" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex flex-col space-y-3">
                <div
                  onClick={() => setShowNumber(true)}
                  className={`text-sm bg-[#9748FF] flex items-center justify-center  py-4 cursor-pointer  text-white  ${
                    showNumber
                      ? "animate-none bg-[#9748FF] text-white"
                      : "animate-pulse hover:border-[0.5px] hover:bg-white hover:border-[#9748FF] hover:text-black"
                  } hover:animate-none  duration-200  px-4 rounded-lg space-x-2`}
                >
                  <IoCallOutline size={25} />{" "}
                  <span className="text-[17px]">
                    {" "}
                    {showNumber ? (
                      <Link href={"myapp://open"}>
                        +92{user.sellerPhoneNum}
                      </Link>
                    ) : (
                      "Show Phone Number"
                    )}
                  </span>
                </div>
                <div className="text-sm border-[1px] border-gray-600 flex items-center justify-center text-gray-800 py-4 cursor-pointer px-4 rounded-lg space-x-1">
                  <CiChat1 size={25} />{" "}
                  <span className="text-[17px]">Chat</span>
                </div>
                <Link
                  href={whatsAppURL}
                  target="_blank"
                  className="text-sm bg-green-100 hover:bg-green-400 hover:text-white duration-300 flex items-center justify-center text-green-800 py-4 cursor-pointer px-4 rounded-lg space-x-1"
                >
                  <FaWhatsapp size={25} />{" "}
                  <span className="text-[17px]">WhatsApp</span>
                </Link>
              </div>
            </div>
            <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 py-5 px-6">
              <h2 className="text-gray-800 font-bold text-xl">Share Options</h2>
              <h5 className="text-gray-700 text-sm mt-2 flex px-10">
                <div className="grid grid-cols-4 mt-1 gap-7">
                  <FacebookShareButton
                    className=" flex flex-col items-center"
                    url={ShareURL(product._id)}
                    quote={"Title or jo bhi aapko likhna ho"}
                    hashtag={"#portfolio..."}
                  >
                    <FaFacebookF size={15} />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    className=" flex flex-col items-center"
                    url={ShareURL(product._id)}
                    quote={"Title or jo bhi aapko likhna ho"}
                    hashtag={"#portfolio..."}
                  >
                    <FaWhatsapp size={15} />{" "}
                  </WhatsappShareButton>
                  <EmailShareButton
                    className=" flex flex-col items-center"
                    url={ShareURL(product._id)}
                    quote={"Title or jo bhi aapko likhna ho"}
                    hashtag={"#portfolio..."}
                  >
                    <MdOutlineEmail size={15} />
                  </EmailShareButton>
                  <TwitterShareButton
                    className=" flex flex-col items-center"
                    url={ShareURL(product._id)}
                    quote={"Title or jo bhi aapko likhna ho"}
                    hashtag={"#portfolio..."}
                  >
                    <RiTwitterXFill size={15} />
                  </TwitterShareButton>
                </div>
              </h5>
            </div>
            <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 py-5 px-6">
              <h2 className="text-gray-800 font-bold text-xl">Report</h2>
              <h5 className="text-gray-700 text-sm mt-2 flex space-x-2 items-center w-full cursor-pointer">
                <FaFlag size={15} /> <span>Report This ad</span>
              </h5>
            </div>
            <Link
              href={googleMapsUrl}
              target="_blank"
              className="flex rounded-lg flex-col border-[0.5px] border-gray-300"
            >
              <div className=" relative w-full h-[111px]">
                <Image
                  src={"/map.png"}
                  alt={`Image`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full rounded-md sm:rounded-none"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
            <div className="flex rounded-lg flex-col border-[0.5px] border-gray-300 py-5 px-6">
              <h2 className="text-gray-800 font-bold text-xl">
                Safety Tips for Buyers
              </h2>
              <h5 className="text-gray-700 text-sm mt-5">
                <ul className="flex flex-col space-y-2 list-disc ml-3.5">
                  <li>Meet seller at a public place</li>
                  <li>Check The item before you buy</li>
                  <li>Pay only after collecting The item</li>
                </ul>
              </h5>
            </div>
          </div>
        </div>
      </div>
      {openItemShareSocials && (
        <div className="w-full h-screen top-0 absolute left-0 z-50  flex justify-center items-center overflow-y-hidden">
          <div
            className="h-screen bg-black opacity-40 top-0 fixed w-full z-10 overflow-y-hidden"
            onClick={() => setOpenItemShareSocials(false)}
          />
          <div className="flex items-center bg-[#1b1b1b]  fixed w-[80%] lg:w-[25%]  z-20  rounded-md overflow-y-hidden">
            <div className="w-full h-full overflow-y-hidden flex flex-col items-center my-6 mx-3">
              <div className="text-white mt-7 mb-2 flex flex-col items-center w-full">
                <h6 className="font-bold">Share</h6>
                <p className="text-[12px]">{sharingProductName}</p>
                <hr className="w-full h-[0.2px] mt-7" />
              </div>
              <div className="flex flex-col justify-center items-center mt-7">
                <div
                  onClick={handleOpenPeopleApp}
                  className="text-white flex flex-col items-center hover:bg-gray-700 duration-500 cursor-pointer p-2 rounded-md"
                >
                  <SlPeople size={22} />
                  <h6 className="text-[12px] mt-2">No contacts? No Problem</h6>
                  <h5 className="text-[12px] mt-1">
                    Tap to start adding the most important people to you.
                  </h5>
                </div>
                <div></div>
              </div>
              <hr className="w-full h-[0.2px] mt-10" />
              <div className="grid grid-cols-4 gap-5 mt-10">
                <FacebookShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <FacebookIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Facebook
                  </span>
                </FacebookShareButton>
                <WhatsappShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <WhatsappIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Whatsapp
                  </span>
                </WhatsappShareButton>
                <EmailShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <EmailIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Email
                  </span>
                </EmailShareButton>
                <TwitterShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <XIcon size={40} round={true} />
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    X
                  </span>
                </TwitterShareButton>
                <TelegramShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <TelegramIcon size={40} round={true} />{" "}
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Telegram
                  </span>
                </TelegramShareButton>
                <RedditShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <RedditIcon size={40} round={true} />{" "}
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    Reddit
                  </span>
                </RedditShareButton>
                <LinkedinShareButton
                  className=" flex flex-col items-center"
                  url={ShareURL(product._id)}
                  quote={"Title or jo bhi aapko likhna ho"}
                  hashtag={"#portfolio..."}
                >
                  <LinkedinIcon size={40} round={true} />{" "}
                  <span className="text-[13px] mt-1.5 text-white text-center ">
                    LinkedIn
                  </span>
                </LinkedinShareButton>
              </div>
              <hr className="w-full h-[0.2px] mt-10" />
              <div className="mt-1 text-white w-full">
                <Link
                  href={"ms-windows-store://home"}
                  className="flex items-center justify-center space-x-2"
                >
                  <SiMicrosoftstore />{" "}
                  <h5 className="text-[14px] mt-1">Get apps in Store.</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleItem;
