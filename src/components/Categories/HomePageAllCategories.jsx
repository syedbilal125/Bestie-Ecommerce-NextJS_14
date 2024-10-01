import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function HomePageAllCategories({
  products,
  Food,
  Book,
  Kid,
  Vehicles,
  Jobs,
  Services,
  Propertys,
  Electronics,
  Bikes,
  Business,
  Mobiles,
  Furniture,
  Fashion,
  Animals,
}) {
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

  return (
    <div className="my-10 lg:max-w-6xl mx-5 py-20 lg:mx-auto">
      <div className="">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3 ">
            Vehicles
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Vehicles.map((item) => (
              <div key={item._id}>
                {item.productCategories === "Vehicles" && (
                  <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                    <Link href={`/item/${item._id}`}>
                      <div className="relative w-full h-[300px]">
                        <Image
                          src={item.productImages[0]}
                          alt={item.productName}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="w-full rounded-t-md "
                          fill
                          priority
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                    <div className="p-3">
                      <h1 className="text-gray-900 font-extrabold text-[25px]">
                        Rs{" "}
                        {item.productPrice.toLocaleString("en-PK", {
                          currency: "PKR",
                          minimumFractionDigits: 0,
                        })}
                      </h1>
                      <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                      <div className="pb-3 pt-5 flex justify-between">
                        <h2 className="text-gray-800">
                          {getTimeFromNow(item.createdAt)}
                        </h2>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Mobiles
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Mobiles.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Rent-Propertys
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {products.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Propertys
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Propertys.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Electronics
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Electronics.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Bikes
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Bikes.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Business
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Business.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Services
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Services.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Jobs
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Jobs.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Animals
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Animals.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Furniture
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Furniture.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Fashion
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Fashion.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Books
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Book.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Kids
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Kid.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex justify-between mb-4">
          <h1 className="text-[20px] text-gray-900 font-extrabold mb-3">
            Food
          </h1>
          <button className="py-1 px-3 bg-gray-200 rounded-full text-[#9748FF] duration-500 hover:border-[#9748FF] hover:border-[0.5px] font-medium">
            Show All
          </button>
        </div>
        <div className="">
          <div className="grid lg:grid-cols-4 gap-2 grid-cols-1 md:grid-cols-3">
            {Food.map((item) => (
              <div key={item._id}>
                <div className="border-gray-400 border-[0.5px] w-full lg:w-[280px] rounded-md ">
                  <Link href={`/item/${item._id}`}>
                    <div className="relative w-full h-[300px]">
                      <Image
                        src={item.productImages[0]}
                        alt={item.productName}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full rounded-t-md "
                        fill
                        priority
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                  <div className="p-3">
                    <h1 className="text-gray-900 font-extrabold text-[25px]">
                      Rs{" "}
                      {item.productPrice.toLocaleString("en-PK", {
                        currency: "PKR",
                        minimumFractionDigits: 0,
                      })}
                    </h1>
                    <h2 className="text-gray-800 mt-1">{item.productName}</h2>
                    <div className="pb-3 pt-5 flex justify-between">
                      <h2 className="text-gray-800">
                        {getTimeFromNow(item.createdAt)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageAllCategories;
