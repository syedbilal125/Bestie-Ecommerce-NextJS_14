"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import NavMobile from "./MobileNavbar";

const getCurrentUser = async () => {
  const jwtToken = localStorage.getItem("token");
  try {
    const response = await axios.get("https://besty-backend.vercel.app/api/currentuser", {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });

    const currentUser = response?.data;
    return currentUser;
  } catch (error) {
    console.error();
  }
};

function Navbar() {
  const router = useRouter();
  const [settings, setSettings] = useState(false);
  const ToggleSettings = () => {
    setSettings(!settings);
  };
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await getCurrentUser();
      router.refresh();
      setCurrentUser(user);
    };

    fetchCurrentUser();
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Feed", href: "/feed" },
    { name: "Stores", href: "/stores" },
  ];
  const pathName = usePathname();

  return (
    <>
      <nav className="py-1 bg-white lg:mx-auto z-50 fixed top-0 w-full">
        <div className="max-w-6xl lg:mx-auto mx-5 py-2">
          <div className="flex justify-between items-center  py-1 ">
            <div className="flex items-center">
              <div className="lg:hidden block">
                <NavMobile />
              </div>
              <Link href={"/"} className="flex items-center">
                <div className="border-white border-[6px] relative rounded-full w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]">
                  <Image
                    src={logo}
                    alt="user profile image"
                    style={{ objectFit: "cover" }}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 10vw"
                    className="rounded-full"
                    priority
                  />
                </div>
                <span
                  className="text-[21px] font-bold lg:block hidden"
                  style={{ fontStyle: "italic" }}
                >
                  Bestie
                </span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <div>
                <div className="lg:flex items-center space-x-4 hidden">
                  {navLinks.map((item) => {
                    const isActive =
                      item.href === "/"
                        ? pathName === item.href
                        : pathName.startsWith(item.href);
                    return (
                      <Link
                        key={item.name}
                        className={`cursor-pointer ${
                          isActive ? "text-[#9748FF]" : ""
                        } font-semibold leading-4`}
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="space-x-2">
                {currentUser ? (
                  <div className="flex space-x-3 items-center">
                    {currentUser?.storeId ? (
                      <Link href={'/post'} className="flex justify-center items-center w-24 h-10 lg:w-28 lg:h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                        <span className="font-medium text-[#333] group-hover:text-white">
                          Post Ad
                        </span>
                      </Link>
                    ) : (
                      ""
                    )}
                    <button
                      onClick={ToggleSettings}
                      className="relative inline-block text-left"
                    >
                      <Image
                        src={currentUser?.profileImage}
                        className="cursor-pointer rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
                        width="100"
                        height="100"
                        alt="SiteLogo"
                        priority
                      />
                      {settings && (
                        <div
                          className="absolute right-0 z-50 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="menu-button"
                          tabIndex="-1"
                        >
                          <div className="py-1" role="none">
                            <Link
                              href={`/user/${currentUser?.id}`}
                              className="block px-4 py-2 text-sm text-gray-700"
                              role="menuitem"
                              tabIndex="-1"
                              id="menu-item-0"
                            >
                              Account
                            </Link>
                            {currentUser?.storeId ? (
                              <Link
                                href={`/store/${currentUser?.id}`}
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-1"
                              >
                                Store
                              </Link>
                            ) : (
                              <Link
                                href={`/createstore/${currentUser?.id}`}
                                className="block px-4 py-2 text-sm text-gray-700"
                                role="menuitem"
                                tabIndex="-1"
                                id="menu-item-1"
                              >
                                Create Store
                              </Link>
                            )}
                          </div>
                        </div>
                      )}
                    </button>
                  </div>
                ) : (
                  <>
                    <Link href={`/auth`}>
                      <button className="w-28 h-12 bg-white cursor-pointer rounded-3xl border-2 border-[#9748FF] shadow-[inset_0px_-2px_0px_1px_#9748FF] group hover:bg-[#9748FF] transition duration-300 ease-in-out">
                        <span className="font-medium text-[#333] group-hover:text-white">
                          Login
                        </span>
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
