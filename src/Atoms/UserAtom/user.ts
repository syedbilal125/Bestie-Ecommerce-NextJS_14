import { atom } from "recoil";

type userPageModle = {
  isOpen: boolean;
  type: "account" | "yourorders" | "logindetails" | "customerservice";
};

const initaluserPageModle: userPageModle = {
  isOpen: false,
  type: "account",
};

export const userPageModle = atom<userPageModle>({
  key: "userPageModle",
  default: initaluserPageModle,
});
