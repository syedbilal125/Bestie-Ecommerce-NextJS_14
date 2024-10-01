import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function ContactUs() {
  return (
    <div className="pt-20  ">
      <Navbar />
      <div className="flex space-x-4 max-w-6xl lg:mx-auto my-10 mx-4">
        <div className="w-full border-[0.2px] border-gray-200 my-2 p-10 ">
          <h1 className="capitalize text-[25px] font-bold">
            How can you contact with us.
          </h1>
          <hr />
          <ul className="flex flex-col space-y-4 mt-6">
            <li>1. Send us an email: 54587dfdd@gmail.com</li>
            <li>2. Call us: 03022832161</li>
            <li>
              3. Visit our <span className="text-blue-400">Facebook</span> page
            </li>
            <li>
              4. Join our <span className="text-blue-400">Discord</span> server
            </li>
          </ul>
        </div>
        <div className="w-1/2 lg:block hidden">
          <Image src="/contact.png" priority height={500} width={500} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
