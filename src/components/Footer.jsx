import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className="bg-[#181818] w-full text-white py-20 z-50">
      <div className="max-w-6xl mx-5 lg:mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-start">
          <div className="w-2/4">
            <Image
              src="/logo.png"
              width="80"
              height="80"
              alt="SiteLogo"
              priority
              className="rounded-full"
            />
          </div>
          <div className="mt-5 flex flex-col space-y-3 w-1/2">
            <div className="mb-3">
              <h1 className="text-[28px]">About</h1>
              <div className="w-1/3 bg-[#9748FF] h-2 rounded-full" />
            </div>
            <ul className="flex flex-col space-y-2">
              <li className="text-[17px] hover:text-[#9748FF] duration-200 hover:translate-x-1">
                <Link href={"/aboutus"}>About Us</Link>
              </li>
              <li className="text-[17px] hover:text-[#9748FF] duration-200 hover:translate-x-1">
                <Link href={"/contactus"}>Contact Us</Link>
              </li>
              <li className="text-[17px] hover:text-[#9748FF] duration-200 hover:translate-x-1">
                <Link href={"/faq"}>FAQ & Help</Link>
              </li>
            </ul>
          </div>
          <div className="mt-5 flex flex-col space-y-3 w-1/2">
            <div className="mb-3">
              <h1 className="text-[28px]">Follow Us</h1>
              <div className="w-1/3 bg-[#9748FF] h-2 rounded-full" />
            </div>
            <ul className="flex flex-row space-x-3">
              <Link href={"https://github.com/5Y3D-Bilal"}>
                <li className="text-[17px] hover:text-[#9748FF] duration-200 hover:scale-110">
                  <FaGithub size={30} />
                </li>
              </Link>
              <Link href={"https://facebook.com"}>
                <li className="text-[17px] hover:text-[#9748FF] duration-200 hover:scale-110">
                  <FaFacebook size={30} />
                </li>
              </Link>
              <Link href={"https://www.youtube.com/channel/UCMQ1lEMBBF0HYHRtVLzUl_A"}>
                <li className="text-[17px] hover:text-[#9748FF] duration-200 hover:scale-110">
                  <FaSquareYoutube size={30} />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <hr className="mt-20" />
        <div>
          <h6>@ Copyright by Bestie</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
