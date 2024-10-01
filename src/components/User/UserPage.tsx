"use client";
import { userPageModle } from "../../Atoms/UserAtom/user";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Yourorder from "../User/Yourorder";
import Account from "../User/Account";
import CoustomerService from "../User/CoustomerService";
import LoginDetails from "./LoginDetails";
import axios from "axios";

type UserModleProps = {
  userData: {
    email: string;
    iat: number;
    id: string;
    isAdmin: boolean;
    profileImage: string;
    username: string;
  };
};

const UserModle: React.FC<UserModleProps> = ({ userData }) => {
  const UserModle = useRecoilValue(userPageModle);
  return (
    <>
      <div className="w-full">
        {UserModle.type === "account" ? (
          <Account UserData={userData} />
        ) : UserModle.type === "yourorders" ? (
          <Yourorder UserData={userData} />
        ) : UserModle.type === "customerservice" ? (
          <CoustomerService UserData={userData} />
        ) : (
          <LoginDetails UserData={userData} />
        )}
      </div>
    </>
  );
};
export default UserModle;
