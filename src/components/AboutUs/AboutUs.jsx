import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AboutUs() {
  return (
    <div className="pt-20  ">
      <Navbar />
      <div className="flex space-x-4 max-w-6xl lg:mx-auto my-10 mx-4">
        <div className="w-full border-[0.2px] border-gray-200 my-2 p-10 ">
          <h1 className="capitalize text-[25px] font-bold">About Us</h1>
          <hr />
          <h2 className="mt-4 text-[20px] font-semibold">Welcome to Bestie!</h2>
          <p className="mt-1">
            At Bestie, we believe that buying and selling should be easy,
            convenient, and enjoyable. As a trusted online marketplace, we
            connect millions of people around the world, helping them buy and
            sell a wide variety of items quickly and securely.
          </p>

          <h2 className="mt-4 text-[20px] font-semibold">Who We Are</h2>
          <p className="mt-1">
            Bestie was founded with a simple mission: to create a platform where
            anyone can buy or sell almost anything. Whether you're looking to
            declutter your home, find great deals, or start a side hustle,
            Bestie is your go-to marketplace.
          </p>

          <h2 className="mt-4 text-[20px] font-semibold">Our Vision</h2>
          <p className="mt-1">
            Our vision is to empower people by providing them with a platform
            that simplifies transactions and fosters trust within the community.
            We strive to build a world where buying and selling is accessible to
            everyone, enabling people to find what they need and sell what they
            dont with ease.
          </p>
          <hr />
          <h2 className="mt-7 capitalize text-[25px] font-bold">
            Join Our Community
          </h2>
          <p className="mt-1">
            Whether you're a buyer searching for a great deal or a seller
            looking to reach a broader audience, Bestie is here to help. Join
            our growing community today and experience the convenience and
            excitement of online buying and selling.
          </p>
        </div>
        <div className="w-1/2 lg:block hidden">
          <Image src="/about.png" priority height={500} width={500} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
